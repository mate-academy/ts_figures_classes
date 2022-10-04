type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  color: Colors;

  sizeA: number;

  sizeB: number;

  sizeC: number;

  constructor(
    color: Colors,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.sizeA = a;
    this.sizeB = b;
    this.sizeC = c;

    this.checkTriangle();
  }

  getArea(): number {
    const p = (this.sizeA + this.sizeB + this.sizeC) / 2;
    const res = p * (p - this.sizeA) * (p - this.sizeB) * (p - this.sizeC);

    return Number(Math.sqrt(res).toFixed(2));
  }

  checkTriangle(): void {
    const sides = [this.sizeA, this.sizeB, this.sizeC];
    const sumOfSides = sides.reduce((a: number, b: number) => a + b, 0);

    if (sumOfSides - Math.max(...sides) <= Math.max(...sides)
      || sides.find((a: number) => (a <= 0))) {
      throw new Error('Invalid shape settings');
    }
  }
}

export class Circle implements Figure {
  shape: Shapes;

  color: Colors;

  radius: number;

  constructor(
    color: Colors,
    radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    this.checkCircle();
  }

  getArea(): number {
    const res = (this.radius * this.radius) * Math.PI;

    return Math.trunc(res * 100) / 100;
  }

  checkCircle(): void {
    if (this.radius <= 0) {
      throw new Error('Invalid shape settings');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  color: Colors;

  width: number;

  height: number;

  constructor(
    color: Colors,
    width: number,
    height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    this.checkRectangle();
  }

  getArea(): number {
    return this.width * this.height;
  }

  checkRectangle(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid shape settings');
    }
  }
}

export function getInfo(figure: Rectangle | Triangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
