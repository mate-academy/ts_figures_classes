type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    if (this.isTriangle() === false) {
      throw new Error(`Sides ${this.a}, ${this.b}
        and ${this.c} can't form a triangle. Values should be greater than 0.`);
    }
  }

  isTriangle(): boolean {
    return (
      this.a + this.b > this.c
      && this.a + this.c > this.b
      && this.b + this.c > this.a
      && this.a !== 0
      && this.b !== 0
      && this.c !== 0
    );
  }

  getArea(): number {
    const halfPartOfPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      halfPartOfPerimeter * (halfPartOfPerimeter - this.a)
      * (halfPartOfPerimeter - this.b)
      * (halfPartOfPerimeter - this.c),
    );

    return Number(triangleArea.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0.');
    }
  }

  getArea(): number {
    const circleArea = this.radius * this.radius * Math.PI;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.isRectangle() === true) {
      throw new Error('Values should be greater than 0.');
    }
  }

  isRectangle(): boolean {
    return (this.width <= 0 || this.height <= 0);
  }

  getArea(): number {
    const rectangleArea = this.height * this.width;

    return Number(rectangleArea.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
