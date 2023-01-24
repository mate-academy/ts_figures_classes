enum Shape {
  TriangleShape = 'triangle',
  CircleShape = 'circle',
  RectangleShape = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape:Shape,
  color: Color,
  getArea(): number
}

function getError(...nums: number[]): boolean {
  return nums.some((num) => num <= 0);
}

export class Triangle implements Figure {
  shape = Shape.TriangleShape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortSides = [a, b, c].sort((x, y) => x - y);

    if (getError(a, b, c) || sortSides[2] >= sortSides[0] + sortSides[1]) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = Shape.CircleShape;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (getError(radius)) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const circleArray = Math.PI * this.radius ** 2;

    return Math.floor(circleArray * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.RectangleShape;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (getError(width, height)) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
