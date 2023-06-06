type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

function validateFigure(...sides: number[]): void {
  sides.some((el) => {
    if (el <= 0) {
      throw new Error(`Figure parameters: ${el}
      cannot be 0 or a negative number`);
    }

    return true;
  });

  sides.sort((min, max) => min - max);

  if (sides[sides.length - 1] >= sides[0] + sides[1]) {
    throw new Error('Figure lenght must be > 0');
  }
}

function toPrecision(area: number):number {
  return Math.floor(area * 100) / 100;
}

export class Triangle {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateFigure(this.a, this.b, this.c);
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return toPrecision(area);
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateFigure(this.radius);
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return toPrecision(area);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validateFigure(this.width, this.height);
  }

  getArea(): number {
    const area: number = Math.round(this.width * this.height);

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
