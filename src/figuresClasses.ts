export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle {
  public shape: 'triangle'= 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('incorrect length');
    }

    const sum = [a, b, c].sort((x, y) => x - y);

    if (sum[0] + sum[1] <= sum[2]) {
      throw new Error('incorrect length for triangle');
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  public getArea(): number {
    const area = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return area;
  }
}

export class Rectangle {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
