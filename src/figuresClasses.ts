export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Invalid sides of triangle');
    }
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const square = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    return Math.sqrt(
      square * (square - this.sides[0])
        * (square - this.sides[1]) * (square - this.sides[2]),
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius of circle');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid sizes of sides of rectangle');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = (+figure.getArea().toFixed(2)).toString();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
