export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of a triangle cannot be less than or equal to 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle.`);
    }
  }

  getArea(): number {
    const square = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(square * (square - this.a) * (square - this.b) * (square - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides of a rectangle cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
