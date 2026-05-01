<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    if (!browser) return;

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
        in float size;
        in float offset;
        in float speed;

        uniform float iTime;
        uniform vec2 iResolution;

        void main() {
            float t = iTime;

            vec2 pos = position;

            pos.x += speed * t * 60.0;
            pos.x = mod(pos.x, iResolution.x);

            pos.y += sin(offset + t * speed) * 3.0;

            vec2 clip = (pos / iResolution) * 2.0 - 1.0;
            clip.y *= -1.0;

            gl_Position = vec4(clip, 0.0, 1.0);

            gl_PointSize = size;
        }`;

    const fragmentShaderSource = `#version 300 es
        precision highp float;
        out vec4 fragColor;

        void main() {
            fragColor = vec4(1.0);
        }`;

    function compile(type: number, src: string): WebGLShader {
      if (gl !== null) {
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
    };
    return 'how da hael you even do this stoopid';
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShaderSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShaderSource));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    let particles = 0;

    const posData: number[] = [];
    const sizeData: number[] = [];
    const offsetData: number[] = [];
    const speedData: number[] = [];

    function resizeParticles(w: number, h: number) {
      const target = Math.floor((w * h) / (52800 + h));

      if (target === particles || gl === null) return;

      particles = target;

      posData.length = 0;
      sizeData.length = 0;
      offsetData.length = 0;
      speedData.length = 0;

      for (let i = 0; i < particles; i++) {
        posData.push(Math.random() * w, Math.random() * h);
        sizeData.push(2 + Math.random() * 6);
        offsetData.push(Math.random() * Math.PI);
        speedData.push(0.25 + Math.random() * 5);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(posData),
        gl.DYNAMIC_DRAW,
      );

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(sizeData),
        gl.STATIC_DRAW,
      );

      gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(offsetData),
        gl.STATIC_DRAW,
      );

      gl.bindBuffer(gl.ARRAY_BUFFER, speedBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(speedData),
        gl.STATIC_DRAW,
      );
    }

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const posBuffer = gl.createBuffer();
    const sizeBuffer = gl.createBuffer();
    const offsetBuffer = gl.createBuffer();
    const speedBuffer = gl.createBuffer();

    function attrib(buffer: WebGLBuffer, name: string, size: number) {
      if (gl === null) return;
      const loc = gl.getAttribLocation(program, name);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
    }

    attrib(posBuffer, "position", 2);
    attrib(sizeBuffer, "size", 1);
    attrib(offsetBuffer, "offset", 1);
    attrib(speedBuffer, "speed", 1);

    const timeLoc = gl.getUniformLocation(program, "iTime");
    const resLoc = gl.getUniformLocation(program, "iResolution");

    function resize() {
      if (gl === null) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);

      const w = innerWidth;
      const h = document.body.scrollHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);

      resizeParticles(canvas.width, canvas.height);
    }

    resize();
    window.addEventListener("resize", resize);

    let raf: number;

    function render(t: number) {
      if (gl === null) return;
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.uniform1f(timeLoc, t * 0.001);

      gl.drawArrays(gl.POINTS, 0, particles);

      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);

    onDestroy(() => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    });
  });
</script>

<canvas bind:this={canvas} class="absolute inset-0 pointer-events-none -z-1"
></canvas>
