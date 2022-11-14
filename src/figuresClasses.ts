enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Lenght has to be more then 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The length of longest side should be more then sum of other two',
      );
    }
  }

  shape: Shape = Shape.Triangle;

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius has to be more than 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }

  shape: Shape = Shape.Circle;
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height have to be more then 0');
    }
  }

  shape: Shape = Shape.Rectangle;

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
