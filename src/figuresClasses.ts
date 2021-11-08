type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArePositive: boolean = a > 0 && b > 0 && c > 0;

    const sides: number[] = [a, b, c].sort((
      firstSide: number, secondSide: number,
    ): number => secondSide - firstSide);

    const canBeTriangle: boolean = sides[0] < sides[1] + sides[2];

    if (!sidesArePositive) {
      throw new Error('All sides must be greater than 0');
    }

    if (!canBeTriangle) {
      throw new Error('The longest side be smaller, than a sum of two others');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimeter * (
        (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)
      ),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area: number = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
