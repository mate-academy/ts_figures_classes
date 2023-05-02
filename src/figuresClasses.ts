export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: 'triangle';

  color: Color;

  sides: number[];

  constructor(color: Color, ...args: number[]) {
    this.shape = 'triangle';
    this.color = color;
    this.sides = [...args].sort((a, b) => a - b);

    if (this.sides.some((side) => side <= 0)) {
      throw new Error('At least one property is less than 0');
    }

    if (this.sides[0] + this.sides[1] <= this.sides[2]) {
      throw new Error('Not a triangle');
    }
  }

  getArea():number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('At least one property is less than 0');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('At least one property is less than 0');
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
