type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  color: Figure['color'];

  sides: number[];

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid inputs for a triangle');
    }
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  color: Figure['color'];

  radius: number;

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid inputs for a circle');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  color: Figure['color'];

  width: number;

  height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid inputs for a rectangle');
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
  const area = figure.getArea().toFixed(2).replace(/\.00$/, '');

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
