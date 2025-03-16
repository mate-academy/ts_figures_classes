export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Sides of a triangle must greater than 0!');
    }

    const sides = [sideA, sideB, sideC];
    const longestSide: number = Math.max(...sides);

    sides.splice(sides.indexOf(longestSide), 1);

    if (sides[0] + sides[1] <= longestSide) {
      throw new Error(
        `Sum of the smaller sides have to be greater than the longest side!`,
      );
    }
  }

  getArea(): number {
    const semiP = (this.sideA + this.sideB + this.sideC) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiP *
            (semiP - this.sideA) *
            (semiP - this.sideB) *
            (semiP - this.sideC),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('with and height must be greater than 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
