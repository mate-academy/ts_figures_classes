export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }

    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const a: number = this.sides[0];
    const b: number = this.sides[1];
    const c: number = this.sides[2];
    const s: number = (a + b + c) / 2;

    return Math.trunc((Math.sqrt(s * (s - a) * (s - b) * (s - c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  height: number;

  width: number;

  constructor(color: string, height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const area: string = figure.getArea().toString();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
