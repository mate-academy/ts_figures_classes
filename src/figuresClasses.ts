enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number
}

abstract class GeometricShapes implements Figure {
  abstract getArea(): number;

  static roundingNumber(value:number): number {
    return Math.trunc(value * 100) / 100;
  }

  static getTriangleArea(value:number[]): number {
    const semiPerimetr = value.reduce((a, b) => a + b, 0) / 2;

    return Math.sqrt(value.map((sides) => semiPerimetr - sides)
      .reduce((a, b) => a * b) * semiPerimetr);
  }

  static getCircleArea(radius:number): number {
    return radius ** 2 * Math.PI;
  }

  static getRectangleArea(height:number, width:number): number {
    return height * width;
  }

  constructor(
    public shape: Shapes,
    public color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends GeometricShapes {
  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(Shapes.Triangle, color);

    if (a < 1 || b < 1 || c < 1) {
      throw new Error('Side size must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The sum of two sides cannot be greater than the third');
    }
  }

  getArea():number {
    const TriangleArea = Triangle.getTriangleArea([this.a, this.b, this.c]);

    return GeometricShapes.roundingNumber(TriangleArea);
  }
}

export class Circle extends GeometricShapes {
  constructor(
    color: Colors,
    public radius: number,
  ) {
    super(Shapes.Circle, color);

    if (radius < 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea():number {
    const circleArea = GeometricShapes.getCircleArea(this.radius);

    return GeometricShapes.roundingNumber(circleArea);
  }
}

export class Rectangle extends GeometricShapes {
  constructor(
    color: Colors,
    public width: number,
    public height: number,
  ) {
    super(Shapes.Rectangle, color);

    if (width < 0 || height < 0) {
      throw new Error('Width or height must be greater than 0');
    }
  }

  getArea():number {
    return GeometricShapes.getRectangleArea(this.width, this.height);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
