export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  parts: number[];

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('have to be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('sides mistakes');
    }

    this.shape = 'triangle';
    this.color = color;
    this.parts = [a, b, c];
  }

  getArea(): number {
    const s = (this.parts[0] + this.parts[1] + this.parts[2]) / 2;

    return (
      Math.floor(
        Math.sqrt(
          s * (s - this.parts[0]) * (s - this.parts[1]) * (s - this.parts[2]),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius have to be greater than 0');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height have to be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
