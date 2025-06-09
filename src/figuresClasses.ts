export interface Figure {
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides should be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('Invalid triangle: longest side too long');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('The radius should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('The sides should be greater than 0');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  let shape: string = '';

  if (figure instanceof Triangle) {
    shape = 'triangle';
  }

  if (figure instanceof Circle) {
    shape = 'circle';
  }

  if (figure instanceof Rectangle) {
    shape = 'rectangle';
  }

  return `A ${figure.color} ${shape} - ${figure.getArea()}`;
}
