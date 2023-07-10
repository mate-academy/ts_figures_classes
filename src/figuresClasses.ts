export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    const summarySides = a + b + c;

    if ([a, b, c].some((side) => side <= 0)
    || (summarySides - maxSide < maxSide)) {
      throw new Error('A triangle with such sides cannot exist.');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
    * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(2));
  }
}
export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than 0');
    }
  }

  getArea(): number {
    return Number((Math.PI * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if ([width, height].some((side) => side <= 0)) {
      throw new Error('All sides must be more than 0');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
