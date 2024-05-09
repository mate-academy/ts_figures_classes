export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Shape implements Figure {
  shape: string;

  color: 'green' | 'red' | 'blue';

  constructor(shape: string, color: 'red' | 'green' | 'blue') {
    this.shape = shape;
    this.color = color;
  }

  getArea(): number {
    throw new Error('Method not implemented');
  }
}

export class Triangle extends Shape {
  sides: number[];

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    super('triangle', color);
    this.sides = [a, b, c];

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Not a valid triangle');
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return parseFloat(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    super('circle', color);
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    const roundedArea = Math.floor(area * 100) / 100;
    const result = parseFloat(roundedArea.toFixed(2));

    return result;
  }
}

export class Rectangle extends Shape {
  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    super('rectangle', color);
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
