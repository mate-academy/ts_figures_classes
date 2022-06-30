type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any side cannot be <= 0');
    }

    const sorted: number[] = [a, b, c]
      .sort((first: number, second: number) => second - first);

    if (sorted[0] >= (sorted[1] + sorted[2])) {
      throw new Error('The biggest side can not be bigger'
      + ' than sum of other sides');
    }
  }

  getArea(): number {
    const P: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(P * (P - this.a)
      * (P - this.b) * (P - this.c));

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
      throw new Error('Radius cannot be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Rectangle sides must be > 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.heigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(
  figure: {
    shape: Shape,
    color: Color,
    getArea(): number
  },
): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
