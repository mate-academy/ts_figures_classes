enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

function checkSideLength(...args: number[]): void {
  if (args.some((sideLength) => (sideLength <= 0))) {
    if (args.length === 1) {
      throw new Error('Circle radius can not be 0 or less');
    }
    throw new Error('All sides must be greater than 0');
  }
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSideLength(a, b, c);

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Sides a, b, c cannot form a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    const triangleArea: number = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return Number(triangleArea.toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    checkSideLength(radius);
  }

  getArea(): number {
    const circleArea = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return circleArea;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    checkSideLength(width, height);
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Number(rectangleArea.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
