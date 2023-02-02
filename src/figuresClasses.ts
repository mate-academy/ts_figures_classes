type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

const isTriangleExist = (a: number, b: number, c: number): boolean => {
  return (a + b) > c && (a + c) > b && (b + c) > a;
};

const isFigureViable = (...args: number[]): boolean => {
  switch (args.length) {
    case 1:
      return args[0] > 0;
    case 2:
      return args[0] > 0 && args[1] > 0;
    case 3:
      return args[0] > 0 && args[1] > 0 && args[2] > 0;
    default:
      throw new Error('from 1 to 3 parameters permitted');
  }
};

const roundDown = (num: number): number => {
  const string = num.toString();
  const dotIndex = string.indexOf('.');
  const decimalPart = string.slice(dotIndex + 1);

  if (decimalPart.length > 3) {
    return +(string.slice(0, dotIndex + 3));
  }

  return num;
};

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!(isTriangleExist(a, b, c) && isFigureViable(a, b, c))) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = (semiPerimeter * (semiPerimeter - this.a) * (
      semiPerimeter - this.b) * (semiPerimeter - this.c)) ** 0.5;

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public r: number,
  ) {
    if (!isFigureViable(this.r)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.r ** 2;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (!isFigureViable(this.a, this.b)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
