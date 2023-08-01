enum SHAPE {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum COLOR {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: SHAPE,
  color: COLOR,
  getArea(): number
}

export class Triangle implements Figure {
  shape = SHAPE.triangle;

  constructor(
    public color: COLOR,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error: Sides can`t be less that 1');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfSides = a + b + c - maxSide;

    if (maxSide >= sumOfSides) {
      throw new Error('Error: One side can`t be bigger than sum of two sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape = SHAPE.circle;

  constructor(
    public color: COLOR,
    public radius: number,
  ) {
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Error: The radius can`t be less than 1');
    }
  }

  getArea(): number {
    let area = Math.PI * this.radius * this.radius;

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Rectangle {
  shape = SHAPE.rectangle;

  constructor(
    public color: COLOR,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Error: Sides can`t be less that 1');
    }
  }

  getArea(): number {
    let area = this.height * this.width;

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
