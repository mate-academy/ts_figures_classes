type Figures = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Figures;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figures = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(this.a, this.b, this.c);
    const allSides = this.a + this.b + this.c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Your values arent valid');
    }

    if (allSides - maxSide <= maxSide) {
      throw new Error('your largest side is'
      + 'not equal to the sum of the other two');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) * 0.5;

    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figures = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Your values arent valid');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figures = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Your values arent valid');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
