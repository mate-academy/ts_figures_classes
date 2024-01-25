export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  a?: number,
  b?: number,
  c?: number,
  radius?: number,
  width?: number,
  height?: number,
  getArea(): number,
  shape: Shape,
  color: Color,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle parameters');
    }
  }

  isValidTriangle(): boolean {
    if (this.a < (this.b + this.c)
      && this.b < (this.a + this.c)
      && this.c < (this.b + this.a)) {
      return true;
    }

    return false;
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;
    const S: number = Math.sqrt(halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c));

    return parseFloat(S.toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (!this.isValidCircle()) {
      throw new Error('Invalid circle parameters');
    }
  }

  isValidCircle(): boolean {
    if (this.radius > 0) {
      return true;
    }

    return false;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (!this.isValidRectangle()) {
      throw new Error('Invalid rectangle parameters');
    }
  }

  isValidRectangle(): boolean {
    if (this.height > 0 && this.width > 0) {
      return true;
    }

    return false;
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
