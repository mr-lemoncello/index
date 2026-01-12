export class Particle {
  x!: number;
  y!: number;
  s!: number;
  spd!: number;
  off!: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.s = Math.floor(Math.random() * 5);
    this.spd = 0.25 + Math.random() * 5;
    this.off = Math.random() * Math.PI;
  }

  update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.x += this.spd;
    this.y += Math.sin(this.off);
    this.off += this.spd / 32 ? 0.05 : this.spd / 32;

    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.s, this.s);

    if (this.x > canvas.width + 4) {
      this.x = -4;
      this.y = Math.random() * canvas.height;
    }
  }
}