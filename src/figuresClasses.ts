type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const [
      firstSide,
      secondSide,
      thirdSide,
    ]: number[] = [a, b, c].sort((side1, side2) => side2 - side1);

    if (firstSide >= secondSide + thirdSide) {
      throw new Error('sides 1, 2 and 3 cannot form a triangle');
    }
  }

  getArea(): number {
    const sp = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(sp * (sp - this.a) * (sp - this.b) * (sp - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('the radius of the circle cannot be less than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public witdh: number,
    public height: number,
  ) {
    if (witdh < 0 || height < 0) {
      throw new Error('the side of the rectangle cannot be less than 0');
    }
  }

  getArea(): number {
    const area = this.witdh * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const figureArea = figure.getArea();

  return `A ${color} ${shape} - ${figureArea}`;
}
