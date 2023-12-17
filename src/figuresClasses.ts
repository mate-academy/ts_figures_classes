enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

function checkPositiveNumsError(...nums: number[]): void {
  if (nums.some((num) => num <= 0)) {
    throw new Error('Some value is <= 0');
  }
}

function roundDownToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = Shape.TRIANGLE;

  constructor(
    public color: Figure['color'],
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    checkPositiveNumsError(a, b, c);

    const sortNums = [a, b, c].sort((firstNum, secondNum) => {
      return firstNum - secondNum;
    });

    if (sortNums[0] + sortNums[1] <= sortNums[2]) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  public getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return roundDownToHundredths(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.CIRCLE;

  constructor(
    public color: Figure['color'],
    protected radius: number,
  ) {
    checkPositiveNumsError(radius);
  }

  getArea(): number {
    const { radius } = this;

    return roundDownToHundredths(Math.PI * (radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.RECTANGLE;

  constructor(
    public color: Figure['color'],
    protected width: number,
    protected height: number,
  ) {
    checkPositiveNumsError(width, height);
  }

  getArea(): number {
    const { width, height } = this;

    return roundDownToHundredths(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
