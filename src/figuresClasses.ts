type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (this.shape !== 'triangle') {
      throw new Error('Wrong shape.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides.');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Positive numbers only.');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;

    const perimeter = (a + b + c) / 2;
    const calculatedArea = Math.sqrt(
      perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c),
    );
    const area = parseFloat(calculatedArea.toFixed(2));

    return area;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: Color;

  a: number;

  constructor(color: Color, a: number) {
    if (this.shape !== 'circle') {
      throw new Error('Wrong shape.');
    }

    if (a <= 0) {
      throw new Error('Must be positive number');
    }
    this.color = color;
    this.a = a;
  }

  getArea(): number {
    const { a } = this;

    const area = Math.floor(Math.PI * (a * a) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: Color;

  a: number;

  b: number;

  constructor(color: Color, a: number, b: number) {
    if (this.shape !== 'rectangle') {
      throw new Error('Wrong shape.');
    }

    if (a <= 0 || b <= 0) {
      throw new Error('Must be positive number');
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const { a, b } = this;

    const area = parseFloat((a * b).toFixed(2));

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
