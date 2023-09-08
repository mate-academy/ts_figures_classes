enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red ='red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRoundedValue(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side is less or equal to zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Two sides are less or equal to third side');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return getRoundedValue(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the radius is less or equal to zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getRoundedValue(area);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Height or width are less or equal to zero');
    }
  }

  getArea(): number {
    return getRoundedValue(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${area}`;
}
