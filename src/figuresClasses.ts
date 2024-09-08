export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Enter correct values');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Enter correct values');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    if (area % 1 !== 0) {
      return +area.toFixed(2);
    }

    return area;
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter correct values');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    if (area % 1 !== 0) {
      return Math.floor(area * 100) / 100;
    }

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct values');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    if (area % 1 !== 0) {
      return +area.toFixed(2);
    }

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
