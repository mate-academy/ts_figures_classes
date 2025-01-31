export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid triangle less 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public readonly shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid circle less 0');
    }
  }

  public getArea(): number {
    const squareCircle = Math.PI * this.radius ** 2;

    return Math.floor(squareCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle less 0');
    }
  }

  public getArea(): number {
    const squareRectangle = this.width * this.height;

    return Number(squareRectangle.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
