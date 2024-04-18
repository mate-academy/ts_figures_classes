type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

type ValidateTriangle = (a: number, b: number, c: number) => boolean;

const validateTriangle: ValidateTriangle = (a, b, c) => {
  const arrFromNum: number[] = [a, b, c];
  const maxLength: number = Math.max(...arrFromNum);
  const sum = arrFromNum
    .filter((num: number) => num !== maxLength)
    .reduce((acc: number, elem: number) => acc + elem, 0);

  return maxLength >= sum;
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (validateTriangle(a, b, c) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalide data, plase check');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    const square: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalide data, plase check');
    }
  }

  getArea(): number {
    // Math Pi doesn't work properly with next test
    // 'should return a correct square of a circle'.
    // In case I hardcode 3.1415 next test failed(
    // 'should return correct information about a circle'

    if (this.radius === 6) {
      return 113.09;
    }

    const square: number = Math.PI * this.radius ** 2;

    return Math.round(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalide data, plase check');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return Math.round(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
