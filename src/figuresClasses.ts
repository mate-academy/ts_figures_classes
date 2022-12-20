type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
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

    if (this.isNotATriangle()) {
      throw new Error('Wrong sides size');
    }
  }

  isNotATriangle(): boolean {
    return (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b
    );
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
    * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.isNotACircle()) {
      throw new Error('Wrong radius size');
    }
  }

  isNotACircle(): boolean {
    return (this.radius <= 0);
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.isNotARectangle()) {
      throw new Error('Wrong sides size');
    }
  }

  isNotARectangle(): boolean {
    return (
      this.width <= 0
      || this.height <= 0
    );
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
