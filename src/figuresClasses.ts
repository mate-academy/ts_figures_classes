enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: FigureShape.Triangle | FigureShape.Circle | FigureShape.Rectangle;
  color: string;

  getArea(): number;
}

const roundedNum = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape = FigureShape.Triangle;

  constructor(
    public color: 'red' | 'green ' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(
        `sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundedNum(area);
  }
}

export class Circle implements Figure {
  shape = FigureShape.Circle;

  constructor(
    public color: 'red' | 'green ' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        `circle cant' have radius ${this.radius}`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundedNum(area);
  }
}

export class Rectangle implements Figure {
  shape = FigureShape.Rectangle;

  constructor(
    public color: 'red' | 'green ' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error(`
        sides ${this.a} and ${this.b} can't form a rectangle
      `);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return roundedNum(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${
    figure.color
  } ${(figure.shape)} - ${figure.getArea()}`;
}
