type Figures = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Figures;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figures = 'triangle';

  constructor(
    public color: Colors,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Not valid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) * 0.5;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  shape: Figures = 'circle';

  constructor(
    public color: Colors,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not valid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figures = 'rectangle';

  constructor(
    public color: Colors,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Not valid rectangle');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
