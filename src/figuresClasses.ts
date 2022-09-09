export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

function circleDataChecker(radius:number): void {
  if (radius <= 0) {
    throw new Error('Error: radius must be greater than 0!!!');
  }
}

function triangleDataChecker(a: number, b: number, c: number): void {
  if (a >= b + c
    || b >= a + c
    || c >= a + b
  ) {
    throw new Error('Error: can not create triangle with such data!!!');
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Error: Can not create triangle with side length of 0!!!');
  }
}

function rectangleDataChecker(width:number, height: number): void {
  if (width <= 0 || height <= 0) {
    throw new Error('Error: Can not create rectangle with side length of 0!!!');
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a:number,
    public b:number,
    public c:number,
  ) {
    triangleDataChecker(a, b, c);
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a)
     * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    circleDataChecker(radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width:number,
    public height:number,
  ) {
    rectangleDataChecker(width, height);
  }

  getArea(): number {
    return (this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
