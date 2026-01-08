export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (color.length <= 0 || a > 0 || b > 0 || c > 0) {
      throw new Error('invalid instance');
    }
  }

  getArea(): number {
    const area = (1 / 2) * (this.a + this.b + this.c);

    return area;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (color.length <= 0) {
      throw new Error('invalid instance');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Number(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (color.length <= 0 || width > 0 || height > 0) {
      throw new Error('invalid instance');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
