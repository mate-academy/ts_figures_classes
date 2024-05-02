export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public color: string;

  public shape: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.shape = 'triangle';

    const arrayOfSides = [a, b, c];
    const longestSide = Math.max(...arrayOfSides);
    const sum = arrayOfSides.reduce((total: number, current: number) => {
      return total + current;
    });
    const checkForValidInput = arrayOfSides.some((elem: number) => elem <= 0);

    if (checkForValidInput || sum - longestSide <= longestSide) {
      throw new Error('Please, enter valid numbers!');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area: number =
      semiperimeter *
      (semiperimeter - this.a) *
      (semiperimeter - this.b) *
      (semiperimeter - this.c);

    return +Math.sqrt(area).toFixed(2);
  }
}

export class Circle implements Figure {
  public color: string;

  public shape: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    this.color = color;
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Enter valid radius!');
    }
  }

  getArea(): number {
    const radius = this.radius;
    const pi = Math.PI;
    const area = pi * radius * radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public color: string;

  public shape: string;

  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Enter valid number!');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
