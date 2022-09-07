function checkDimension(value: number | number[]): boolean {
  if (typeof value === 'number') {
    return value <= 0;
  }

  return Math.min(...value) <= 0;
}

const roundToHundreds = (val: number) : number => Math.floor(val * 100) / 100;

export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  shape: string;
  sideA: number;
  sideB: number;
  sideC: number;

  constructor(
    public color: string,
    ...sides: number[]
  ) {
    if (checkDimension(sides)) {
      throw new Error('Wrong side value');
    }

    const maxSide = Math.max(...sides);

    if (maxSide >= sides.reduce((a, b) => a + b, 0) / 2) {
      throw new Error('Not a triangle');
    }

    [this.sideA, this.sideB, this.sideC] = [...sides];

    this.shape = 'triangle';
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area: number
    = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
    );

    return roundToHundreds(area);
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (checkDimension(radius)) {
      throw new Error('Wrong radius value');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundToHundreds(area);
  }
}

export class Rectangle implements Figure {
  shape: string;
  sideA: number;
  sideB: number;

  constructor(
    public color: string,
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

    return roundToHundreds(area);
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
