export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
export interface Figure {
  shape: Shape;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const values: number[] = [a, b, c].sort((x: number, y: number) => x - y);

    if (values[0] + values[1] <= values[2]) {
      throw new Error('Values are incorrect');
    }

    if (values[0] <= 0 || values[1] <= 0 || values[2] <= 0) {
      throw new Error('Value is less than or equal to 0');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = s * (s - this.a) * (s - this.b) * (s - this.c);

    return +Math.sqrt(area).toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius is less than or equal to 0');
    }
  }

  getArea(): number {
    const square = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0) {
      throw new Error('Width is less than or equal to 0');
    }

    if (this.height <= 0) {
      throw new Error('Height is less than or equal to 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
