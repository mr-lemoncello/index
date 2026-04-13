<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const gl = canvas.getContext("webgl2", { alpha: true });
        if (!gl) {
            console.error("WebGL2 not supported");
            return;
        }

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 0);

        const vertexShaderSource = `#version 300 es
        in vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }`;

        const fragmentShaderSource = `#version 300 es
        precision highp float;

        uniform float iTime;
        uniform vec2 iResolution;
        uniform float iScroll;

        out vec4 fragColor;

        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}

        float snoise3(vec3 v){
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

            vec3 i = floor(v + dot(v,C.yyy));
            vec3 x0 = v - i + dot(i,C.xxx);

            vec3 g = step(x0.yzx,x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);

            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;

            i = mod(i,289.0);
            vec4 p = permute(permute(permute(
                i.z + vec4(0.0,i1.z,i2.z,1.0))
                + i.y + vec4(0.0,i1.y,i2.y,1.0))
                + i.x + vec4(0.0,i1.x,i2.x,1.0));

            float n_ = 1.0/7.0;
            vec3 ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p*ns.z*ns.z);
            vec4 x_ = floor(j*ns.z);
            vec4 y_ = floor(j - 7.0*x_);

            vec4 x = x_*ns.x + ns.yyyy;
            vec4 y = y_*ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4(x.xy,y.xy);
            vec4 b1 = vec4(x.zw,y.zw);

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h,vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);

            vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

            vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
            m = m*m;

            return 42.0 * dot(m*m,
                vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        float fbm(vec2 uv, float t){
            float total = 0.0;
            float amp = 0.5;
            float freq = 1.0;

            for(int i=0;i<4;i++){
                total += snoise3(vec3(uv*freq, t)) * amp;
                freq *= 2.0;
                amp *= 0.5;
            }
            return total * 0.5 + 0.5;
        }

        void main(){
            vec2 uv = gl_FragCoord.xy / iResolution.xy;

            uv.y -= iScroll / iResolution.y;
            uv = uv * 2.0 - 1.0;
            uv.x *= iResolution.x / iResolution.y;

            float t = -iTime * 0.02;
            uv.x += t;

            float n = fbm(uv * 2.5, t);
            float cloud = smoothstep(0.4, 0.75, n);

            fragColor = vec4(vec3(1.0), cloud);
        }`;

        function compile(type: number, src: string): WebGLShader {
            if (gl === null) {
                throw new Error("Failed to create shader");
            }
            const shader = gl.createShader(type);
            if (!shader) {
                throw new Error("Failed to create shader");
            }

            gl.shaderSource(shader, src);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                const info = gl.getShaderInfoLog(shader);
                gl.deleteShader(shader);
                throw new Error(info || "Shader compile error");
            }

            return shader;
        }

        const program = gl.createProgram()!;
        gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShaderSource));
        gl.attachShader(
            program,
            compile(gl.FRAGMENT_SHADER, fragmentShaderSource),
        );
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);

        const buffer = gl.createBuffer()!;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const posLoc = gl.getAttribLocation(program, "position");
        console.log("posLoc", posLoc);
        gl.enableVertexAttribArray(posLoc);
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const timeLoc = gl.getUniformLocation(program, "iTime");
        const resLoc = gl.getUniformLocation(program, "iResolution");
        const scrollLoc = gl.getUniformLocation(program, "iScroll");

        function resize() {
            if (gl === null) return;
            console.log(canvas.width, canvas.height);
            const dpr = Math.min(devicePixelRatio || 1, 2);
            const w = innerWidth;
            const h = innerHeight;

            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
        }

        resize();
        window.addEventListener("resize", resize);

        let targetScroll = 0;
        let smoothScroll = 0;

        const onScroll = () => (targetScroll = scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });

        let raf: number;

        function render(time: number) {
            if (gl === null) return;
            smoothScroll += (targetScroll - smoothScroll) * 0.08;

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform1f(timeLoc, time * 0.001);
            gl.uniform1f(scrollLoc, smoothScroll);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            raf = requestAnimationFrame(render);
        }

        raf = requestAnimationFrame(render);

        onDestroy(() => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScroll);
        });
    });
</script>

<canvas
    bind:this={canvas}
    class="fixed inset-0 pointer-events-none -z-1 opacity-10"
>
</canvas>
