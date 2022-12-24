type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private isValidTriangle(): Boolean {
    const { a, b, c } = this;

    const falseConditions = [
      Math.max(a, b, c) >= a + b + c - Math.max(a, b, c),
      a <= 0,
      b <= 0,
      c <= 0,
    ];

    return falseConditions.some(Boolean);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.isValidTriangle()) {
      throw new Error('There are no correct triangle sizes');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Not correct value of radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public hight: number,
  ) {
    if (this.width <= 0 || this.hight <= 0) {
      throw new Error('Not correct value of side');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.hight * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
