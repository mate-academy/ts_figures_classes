type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

function validateFigure(...sides: number[]): void {
  if (sides.some((el) => el <= 0)) {
    throw new Error('Figure lenght must be > 0');
  }

  sides.sort((min, max) => min - max);

  if (sides[sides.length - 1] >= sides[0] + sides[1]) {
    throw new Error('Figure lenght must be > 0');
  }
}

export class Triangle {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateFigure(this.a, this.b, this.c);
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const area:number = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateFigure(this.radius);
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validateFigure(this.width, this.height);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
