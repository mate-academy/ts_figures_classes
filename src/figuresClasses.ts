type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`Sides ${a}, ${b} and ${c} cant form a triangle`);
    }
  }

  getArea(): number {
    const sidesTriangle = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      sidesTriangle *
        (sidesTriangle - this.a) *
        (sidesTriangle - this.b) *
        (sidesTriangle - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle is not correct');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides less than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor((area * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
