<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const canvas = document.getElementById(
            "webglCanvas",
        ) as HTMLCanvasElement;
        if (canvas !== null) {
            const gl = canvas.getContext("webgl2", { alpha: true })!;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            // --- Vertex shader (fullscreen quad) ---
            const vertexShaderSource = `#version 300 es
            in vec4 position;
            void main() { gl_Position = position; }
            `;

            // --- Fragment shader ---
            const fragmentShaderSource = `#version 300 es
            precision highp float;

            uniform float iTime;
            uniform vec2 iResolution;
            uniform float iScroll;
            out vec4 fragColor;

            // --- 3D Simplex noise ---
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
            vec4 p = permute( permute( permute(
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
            return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
            }

            // fractal brownian motion
            float fbm3(vec2 uv, float t){
            float total = 0.0;
            float amplitude = 0.5;
            float frequency = 1.0;

            for(int i = 0; i < 4; i++){
                vec2 p = uv * frequency + vec2(t * 0.02, 0.0);
                total += snoise3(vec3(p, t * 0.1)) * amplitude;
                frequency *= 2.0;
                amplitude *= 0.5;
            }
            return total * 0.5 + 0.5;
        }

            void main() {
                vec2 fragCoord = gl_FragCoord.xy;
                float scrollNorm = iScroll / iResolution.y;
                vec2 uv = fragCoord.xy / iResolution.xy;
                uv.y -= scrollNorm;

                uv = uv * 2.0 - 1.0;
                uv.x *= iResolution.x / iResolution.y;

                float slowTime = iTime * -0.02;
                uv.x += slowTime;

                float cloudScale = 2.5;
                float n = fbm3(uv * cloudScale, slowTime);

                // cloud density
                float cloud = smoothstep(0.4, 0.75, n);

                // white clouds with transparency
                vec3 cloudColor = vec3(1.0);
                float alpha = cloud;

                fragColor = vec4(cloudColor, alpha);
            }
            `;

            // --- Compile Shader Helper ---
            function compileShader(
                gl: WebGL2RenderingContext,
                type: number,
                source: string,
            ): WebGLShader {
                const shader = gl.createShader(type)!;
                gl.shaderSource(shader, source);
                gl.compileShader(shader);

                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                }
                return shader;
            }

            // --- Create Program ---
            const vertexShader = compileShader(
                gl,
                gl.VERTEX_SHADER,
                vertexShaderSource,
            );
            const fragmentShader = compileShader(
                gl,
                gl.FRAGMENT_SHADER,
                fragmentShaderSource,
            );
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            // --- Fullscreen Quad ---
            const vertices = new Float32Array([
                -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
            ]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

            const positionLoc = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLoc);
            gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

            // --- Uniform Locations ---
            const iTimeLoc = gl.getUniformLocation(program, "iTime");
            const iResLoc = gl.getUniformLocation(program, "iResolution");
            const iScrollLoc = gl.getUniformLocation(program, "iScroll");
            gl.clearColor(0, 0, 0, 0);

            // --- Render Loop ---
            function render(t: number) {
                t *= 0.001;
                smoothScroll += (targetScroll - smoothScroll) * 0.1;

                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.uniform1f(iTimeLoc, t);
                gl.uniform1f(iScrollLoc, smoothScroll);
                gl.drawArrays(gl.TRIANGLES, 0, 6);

                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);

            // --- Resize Handling ---
            function resizeCanvas() {
                const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR
                const width = window.innerWidth;
                const height = window.innerHeight;

                canvas.width = Math.floor(width * dpr);
                canvas.height = Math.floor(height * dpr);

                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(iResLoc, canvas.width, canvas.height);
            }

            resizeCanvas();

            const ro = new ResizeObserver(() => {
                targetScroll = window.scrollY;
            });
            ro.observe(document.body);

            let targetScroll = 0;
            let smoothScroll = 0;

            window.addEventListener("scroll", () => {
                targetScroll = window.scrollY;
            }, { passive: true });

        }
    });
</script>

<canvas
  id="webglCanvas"
  class="fixed inset-0 pointer-events-none -z-1 opacity-10"
></canvas>