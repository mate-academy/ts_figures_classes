import { IFigure, Shape, TColor, TShape } from './types/figure';
import { roundToHundret } from './utils/round';
import { getTriangleArea, isTriangle } from './utils/triangle';

class Figure implements IFigure {
  shape: TShape;

  color: TColor;

  constructor(shape: TShape, color: TColor) {
    this.shape = shape;
    this.color = color;
  }

  getArea(): number {
    throw new Error("Method 'getArea()' must be implemented.");
  }
}

export class Triangle extends Figure {
  area: number = 0;

  a: number;

  b: number;

  c: number;

  constructor(color: TColor, a: number, b: number, c: number) {
    super(Shape.Triangle, color);

    if (!isTriangle(a, b, c)) {
      throw new Error();
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;

    this.area = getTriangleArea(a, b, c);

    return roundToHundret(this.area);
  }
}

export class Circle extends Figure {
  area: number = 0;

  radius: number;

  constructor(color: TColor, radius: number) {
    super(Shape.Circle, color);

    if (radius < 1) {
      throw new Error();
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    this.area = Math.pow(this.radius, 2) * Math.PI;

    return roundToHundret(this.area);
  }
}

export class Rectangle extends Figure {
  area: number = 0;

  width: number;

  height: number;

  constructor(color: TColor, width: number, height: number) {
    super(Shape.Rectangle, color);

    if (width < 0 || height < 0) {
      throw new Error();
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    this.area = this.width * this.height;

    return roundToHundret(this.area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
