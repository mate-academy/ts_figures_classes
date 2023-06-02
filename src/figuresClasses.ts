type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.validateParameters();
  }

  validateParameters(): void {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('No one side cannot be less than or equal to 0');
    }

    const sides: number[] = [this.sideA, this.sideB, this.sideC].sort(
      (current, next) => next - current,
    );

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`sides ${this.sideA}, `
        + `${this.sideB} and ${this.sideC} can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(p * (p - this.sideA) * (p - this.sideB)
      * (p - this.sideC)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be less than or equal to 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape ='rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('No one side cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
