type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkSides();
  }

  protected checkSides(): void {
    const fielsd: string[] = ['a', 'b', 'c'];
    const wrong: string[] = [];

    for (const side of fielsd) {
      if (side in this && Number(this[side as keyof Triangle]) <= 0) {
        wrong.push(side);
      }
    }

    if (wrong.length) {
      throw Error(`Sides (${wrong.join(', ')}) should be more than 0`);
    }

    if (this.semiPerimeter <= Math.max(this.a, this.b, this.c)) {
      throw Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  public get semiPerimeter(): number {
    return (this.a + this.b + this.c) / 2;
  }

  public getArea(): number {
    return (
      Math.floor(
        Math.sqrt(
          this.semiPerimeter *
            (this.semiPerimeter - this.a) *
            (this.semiPerimeter - this.b) *
            (this.semiPerimeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkRadius();
  }

  protected checkRadius(): void {
    if (this.radius <= 0) {
      throw Error('Radius should be more than 0');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.checkSides();
  }

  protected checkSides(): void {
    const fielsd: string[] = ['width', 'height'];
    const wrong: string[] = [];

    for (const side of fielsd) {
      if (side in this && Number(this[side as keyof Rectangle]) <= 0) {
        wrong.push(side);
      }
    }

    if (wrong.length) {
      throw Error(`Sides (${wrong.join(', ')}) should be more than 0`);
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
