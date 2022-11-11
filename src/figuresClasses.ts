enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

type Color = 'red' | 'green' | 'blue';

function roundToHundreths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0)) {
      throw new Error('Values entered should be positive');
    }

    if ((b + c) <= a || (a + c) <= b || (a + b) <= c) {
      throw new Error(`The opposite and adjacent sides can't
      be bigger than hypotenuse`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (
        (s - this.a)
      * (s - this.b)
      * (s - this.c)
      ),
    );

    return roundToHundreths(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius should be positive');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundToHundreths(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Values entered should be positive');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundToHundreths(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
