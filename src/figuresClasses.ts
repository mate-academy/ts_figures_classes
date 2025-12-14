export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('sides a, b and c can`t form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides a, b, and c must be greater than 0');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const areaSquared = s * (s - a) * (s - b) * (s - c);
    const area = Math.sqrt(areaSquared);
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}
export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}
export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All lengths must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
