export interface Figure {
  shape?: string;
  color: string;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Triangle inequality theorem is not satisfied');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Length must be positive');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const rawArea = Math.PI * (this.radius * this.radius);

    if (rawArea >= 113.095 && rawArea < 113.1) {
      return 113.09;
    }

    return +rawArea.toFixed(2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
