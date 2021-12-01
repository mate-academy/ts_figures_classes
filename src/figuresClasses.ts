enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea() : number;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error('Invalid side length');
    }

    if (
      this.side1 + this.side2 <= this.side3
      || this.side3 + this.side2 <= this.side1
      || this.side3 + this.side1 <= this.side2
    ) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const p = (this.side1 + this.side2 + this.side3) / 2;
    const s = Math.sqrt(
      p * (p - this.side1) * (p - this.side2) * (p - this.side3),
    );

    return Math.floor(100 * s) / 100;
  }
}

export class Circle {
  shape = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shapes.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0) {
      throw new Error('Invalid height');
    }

    if (width <= 0) {
      throw new Error('Invalid width');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
