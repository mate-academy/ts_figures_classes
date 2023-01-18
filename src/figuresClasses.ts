// import { NumericLiteral } from '@babel/types';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const perimeter = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length cannot be less than or equal to zero');
    }

    if (a >= perimeter - a || b >= perimeter - b || c >= perimeter - c) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape : Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('length cannot be less than or equal to zero');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('length cannot be less than or equal to zero');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
