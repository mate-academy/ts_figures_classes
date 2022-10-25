type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

function checkDimension(value: number | number[]): boolean {
  if (typeof value === 'number') {
    return value <= 0;
  }

  return Math.min(...value) <= 0;
}

const squareToHundreds = (val: number) : number => Math.floor(val * 100) / 100;

export class Triangle implements Figure {
  color: Color;

  shape: Shape;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: Color, ...sides: number[]) {
    if (checkDimension(sides)) {
      throw new Error('Wrong side value');
    }

    const maxSide = Math.max(...sides);

    if (maxSide >= sides.reduce((a, b) => a + b, 0) / 2) {
      throw new Error('Not a triangle');
    }

    [this.sideA, this.sideB, this.sideC] = [...sides];

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    const square: number
      = Math.sqrt(
        semiPerimeter
        * (semiPerimeter - this.sideA)
        * (semiPerimeter - this.sideB)
        * (semiPerimeter - this.sideC),
      );

    return squareToHundreds(square);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkDimension(radius)) {
      throw new Error('Wrong radius value');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return squareToHundreds(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  sideA: number;

  sideB: number;

  constructor(
    public color: Color,
    ...sides: number[]
  ) {
    if (Math.min(...sides) <= 0) {
      throw new Error('Wrong side value');
    }

    [this.sideA, this.sideB] = [...sides];

    this.shape = 'rectangle';
  }

  getArea(): number {
    const area: number = this.sideA * this.sideB;

    return squareToHundreds(area);
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
