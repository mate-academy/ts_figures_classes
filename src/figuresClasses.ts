type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b) {
      throw new Error('The longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const result: number = Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const result: number = Math.floor((Math.PI
      * this.r * this.r) * 100) / 100;

    return parseFloat(result.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side must be greater than 0');
    }
  }

  getArea(): number {
    const result: number = this.width * this.height;

    return parseFloat(result.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
