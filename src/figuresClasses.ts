type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

function roundNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shapes = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle cannot have side size equal or below zero.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Is not a triangle.');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return roundNumber(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle {
  constructor(
    public color: Colors,
    public radius: number,
    public shape: Shapes = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return roundNumber(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public shape: Shapes = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error("Rectangle sides' sizes must be positive.");
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return roundNumber(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toString()}`;
}
