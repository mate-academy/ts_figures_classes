type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'cirlce' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 && this.b <= 0 && this.c <= 0) {
      throw new Error('Invalid element length');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Invalid element length');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(perimetr * (perimetr - this.a))
      * (perimetr - this.b) * (perimetr - this.c) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'cirlce';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!this.validLength) {
      throw new Error('Radius can not be less than 0 or be equal 0');
    }
  }

  validLength(): boolean {
    return this.radius > 0;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!this.validLength()) {
      throw new Error('Invalid element length');
    }
  }

  validLength(): boolean {
    return this.width > 0 || this.height > 0;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
