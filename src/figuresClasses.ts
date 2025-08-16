type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Invalid side length a= ${a}. Side lengths must be greater than 0.`);
    }

    if (b <= 0) {
      throw new Error(`Invalid side length b= ${b}. Side lengths must be greater than 0.`);
    }

    if (c <= 0) {
      throw new Error(`Invalid side length c= ${c}. Side lengths must be greater than 0.`);
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(`Invalid triangle: a = ${a}, b = ${b}, c = ${c}; the longest side is greater than or equal to the sum of the other two sides.`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Invalid radius: ${radius}. Radius must be greater than 0`,
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(`Invalid width: ${width}. Width must be greater than 0`);
    }

    if (height <= 0) {
      throw new Error(`Invalid height: ${height}. Height must be greater than 0`);
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
