export interface Figure {
  shape: string,
  color: string,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('all sides a triangle must be greater  than zero');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('the radius of the circle must be greater than zero');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('all sides a reactangle must be greater than zero');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.heigth = heigth;
    this.width = width;
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea().toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
