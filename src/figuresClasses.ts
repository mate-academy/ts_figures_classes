enum ShapesType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum ColorsType {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: ShapesType;
  color: ColorsType;
  getArea(): number;
}

function roundArea(value: number): number {
  return Math.floor(value * 100) / 100;
}

function isValideSide(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(`${ShapesType} sides must be greater than 0`);
  }
}

export class Triangle implements Figure {
  readonly shape = ShapesType.Triangle;

  constructor(
    public color: ColorsType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    isValideSide(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle sides are invalid');
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c),
    );

    return roundArea(area);
  }
}

export class Circle implements Figure {
  readonly shape = ShapesType.Circle;

  constructor(
    public color: ColorsType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = ShapesType.Rectangle;

  constructor(
    public color: ColorsType,
    public width: number,
    public height: number,
  ) {
    isValideSide(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
