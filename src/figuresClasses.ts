export interface Figure {
  getInfo(): string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sumArray: number[] = [this.a, this.b, this.c];

    if (sumArray.sort((x, y) => y - x)[0] >= sumArray[1] + sumArray[2]) {
      throw new Error(
    'The longest side of a triangle cannot be greater than or equal to ' +
    'the sum of the other two sides'      );   }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side length must be greater than 0');
    }
  }

  shape = 'triangle';

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  shape = 'circle';

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  shape = 'rectangle';

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return figure.getInfo();
}
