type TypeShape = 'circle' | 'triangle' | 'rectangle';
export interface Figure {
  shape: TypeShape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: TypeShape = 'triangle';

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Sides must be positive and form a valid triangle');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: TypeShape = 'circle';

  color: string;

  constructor(color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be positive number');
    }
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: TypeShape = 'rectangle';

  color: string;

  constructor(color: string, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wight and hight must be positive numbers');
    }

    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
