enum Shapes {
  triangle ='triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Colors {
  green = 'green',
  red = 'red',
  blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('Incorrect, value can not be negative');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw Error('Incorrect value(s) for triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const triangleArea
    = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw Error('Incorrect, value can not be negative');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw Error('Value can not be negative');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
