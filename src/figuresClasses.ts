enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be greater than zero');
    }

    if (!this.isTriangle()) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  isTriangle(): boolean {
    return this.a < this.b + this.c
      && this.b < this.a + this.c
      && this.c < this.a + this.b;
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea = (): number => {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side must be greater than zero');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  const precision = figure instanceof Rectangle ? 0 : 2; // Set precision based on the figure type
  const area = figure.getArea().toFixed(precision);

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
