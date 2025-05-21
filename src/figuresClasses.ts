enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side value must be biggest than 0');
    }

    const maxSideValue = Math.max(a, b, c);
    const anotherSides = a + b + c - maxSideValue;

    if (maxSideValue >= anotherSides) {
      throw new Error('Max side value can`t be bigger than sum another sides');
    }
  }

  getArea = (): number => {
    const { a, b, c } = this;
    const halfOfPerimeter = 0.5 * (a + b + c);
    const area = Math.sqrt(
      halfOfPerimeter *
        (halfOfPerimeter - a) *
        (halfOfPerimeter - b) *
        (halfOfPerimeter - c),
    );

    return Number(area.toFixed(2));
  };
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea = (): number => {
    const area = Math.PI * this.radius ** 2;

    return Number(area.toFixed(2));
  };
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side value must be biggest than 0');
    }
  }

  getArea = (): number => {
    const { width, height } = this;
    const area = width * height;

    return Number(area.toFixed(2));
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
