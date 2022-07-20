export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: Figure['shape'] = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    return Math.trunc(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: Figure['shape'] = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
