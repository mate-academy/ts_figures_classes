export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(
        `Triangle side a must be greater than zero, but got ${a}`,
      );
    }

    if (b <= 0) {
      throw new Error(
        `Triangle side b must be greater than zero, but got ${b}`,
      );
    }

    if (c <= 0) {
      throw new Error(
        `Triangle side c must be greater than zero, but got ${c}`,
      );
    }

    if (a + b <= c) {
      throw new Error(
        `Triangle inequality violated: side c (${c}) is not less than the sum of sides a (${a}) and b (${b})`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Triangle inequality violated: side b (${b}) is not less than the sum of sides a (${a}) and c (${c})`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Triangle inequality violated: side a (${a}) is not less than the sum of sides b (${b}) and c (${c})`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Circle radius must be greater than zero, but got ${radius}`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(
        `Rectangle width must be greater than zero, but got ${width}`,
      );
    }

    if (height <= 0) {
      throw new Error(
        `Rectangle height must be greater than zero, but got ${height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo<T extends Figure>(figure: T): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
