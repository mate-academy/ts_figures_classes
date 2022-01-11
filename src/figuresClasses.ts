enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.validSides()) {
      throw new Error('Invalid sides');
    }
  }

  validSides(): boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return false;
    }

    const maxSide = Math.max(this.a, this.b, this.c);

    const sumSides = [this.a, this.b, this.c]
      .reduce((sum, side) => {
        return maxSide !== side
          ? sum + side
          : sum;
      }, 0);

    return maxSide < sumSides;
  }

  getArea(): number {
    const semiPerimiter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimiter * (semiPerimiter - this.a)
      * (semiPerimiter - this.b) * (semiPerimiter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const area = (this.height * this.width);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
