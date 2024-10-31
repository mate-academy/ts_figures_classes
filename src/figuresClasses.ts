'useStrict';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.Triangle;

  constructor(
    public readonly color: Colors,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || !this.isValidTriangle()) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  private isValidTriangle(): boolean {
    const sides = [this.a, this.b, this.c];
    const highestNumber = Math.max(...sides);
    const sumOfSides = sides.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
    );

    return highestNumber < sumOfSides - highestNumber;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.Circle;

  constructor(
    public readonly color: Colors,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.Rectangle;

  constructor(
    public readonly color: Colors,
    public readonly height: number,
    public readonly width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Dimensions must be greater than zero');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
