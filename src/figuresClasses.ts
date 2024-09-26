type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const roundingArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be bigger than 0.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('This sides cannot form a triangle');
    }
  }

  getArea(): number {
    const semiperimeterOfTheTriangle = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.sqrt(
      semiperimeterOfTheTriangle *
        (semiperimeterOfTheTriangle - this.a) *
        (semiperimeterOfTheTriangle - this.b) *
        (semiperimeterOfTheTriangle - this.c),
    );

    return roundingArea(areaOfTriangle);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be bigger than 0.');
    }
  }

  getArea(): number {
    const areaOfCircle = Math.PI * this.radius ** 2;

    return roundingArea(areaOfCircle);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be bigger than 0.');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.width * this.height;

    return roundingArea(areaOfRectangle);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
