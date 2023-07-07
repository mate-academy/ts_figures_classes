type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export function isTriangle(a: number, b: number, c: number): boolean {
  if (a === 0 || b === 0 || c === 0) {
    return true;
  }

  const array = [a, b, c];

  const maxNum = array.sort((first, second) => first - second).pop();

  if (maxNum >= array[0] + array[1]) {
    return true;
  }

  return false;
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea: () => number | string;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (isTriangle(this.a, this.b, this.c)) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number | string {
    const semiP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('It is not a circle');
    }
  }

  getArea(): number | string {
    return Math.floor((Math.PI * (this.radius) ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('It is not a rectangle');
    }
  }

  getArea(): number | string {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
