type Color = 'red' | 'green' | 'blue';
type Shape = 'rectangle' | 'circle' | 'triangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length must be positive');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error(`Sides ${a}, ${b} and {${c} can not form a triangle}`);
    }
  }

  getArea = (): number => {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea = (): number => {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length must be positive');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  const {
    color,
    shape,
    getArea,
  } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
