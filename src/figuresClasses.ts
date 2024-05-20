enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

function checkPositiveNumbers(...nums: number[]): void {
  if (nums.some((num) => num <= 0)) {
    throw new Error('some length <= 0');
  }
}

function checkValidDataForTriangle(...nums: number[]): void {
  checkPositiveNumbers(...nums);

  nums.sort((a: number, b: number) => a - b);

  if (nums[0] + nums[1] <= nums[2]) {
    throw new Error(
      'the longest side of a triangle is >= than a sum of two others',
    );
  }
}

function roundDownToHundreadths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = Shape.TRIANGLE;

  constructor(
    public color: Figure['color'],
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    checkValidDataForTriangle(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundDownToHundreadths(s);
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = Shape.CIRCLE;

  constructor(
    public color: Figure['color'],
    protected radius: number,
  ) {
    checkPositiveNumbers(radius);
  }

  getArea(): number {
    return roundDownToHundreadths(Math.PI * Math.pow(this.radius, 2));
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = Shape.RECTANGLE;

  constructor(
    public color: Figure['color'],
    protected width: number,
    protected height: number,
  ) {
    checkPositiveNumbers(width, height);
  }

  getArea(): number {
    return roundDownToHundreadths(this.width * this.height);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
