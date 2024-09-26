type Spape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Spape;
  color: Color;
  getArea(): number;
}

const rounded = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: Spape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('a, b or c - need have value');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return rounded(area);
  }
}

export class Circle implements Figure {
  shape: Spape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius - need have value');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return rounded(area);
  }
}

export class Rectangle implements Figure {
  shape: Spape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width or height - need have value');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return rounded(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
