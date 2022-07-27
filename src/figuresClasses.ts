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

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side cant be equal or less than 0');
    }

    if (a + b <= c) {
      throw new Error(`The ${c} side is less than sum of ${a} and ${b}`);
    }

    if (a + c <= b) {
      throw new Error(`The ${b} side is less than sum of ${a} and ${c}`);
    }

    if (b + c <= a) {
      throw new Error(`The ${a} side is less than sum of ${b} and ${c}`);
    }
  }

  getArea(): number {
    const p: number = ((this.a + this.b + this.c) / 2);

    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius should me more than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The both sides should be bigger than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
