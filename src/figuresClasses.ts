export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public shape: 'triangle',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [this.a, this.b, this.c].sort((x, y) => y - x);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The sides must be greater than zero');
    }

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('These sides cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public shape: 'circle',
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * Math.pow(this.r, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public shape: 'rectangle',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
