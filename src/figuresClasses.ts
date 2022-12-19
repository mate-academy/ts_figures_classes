type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (!this.checkTriangle()) {
      throw new Error('There are no correct triangle sizes');
    }
  }

  checkTriangle(): boolean {
    const maxSize = Math.max(this.a, this.b, this.c);

    if ((maxSize < this.a + this.b + this.c - maxSize)
      && this.a > 0
      && this.b > 0
      && this.c > 0) {
      return true;
    }

    return false;
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
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Not correct value of radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public hight: number,
  ) {
    this.shape = 'rectangle';

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
