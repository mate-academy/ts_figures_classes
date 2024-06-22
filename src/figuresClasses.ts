export interface Figure {
  shape: string;

  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('its not triangle');
    }
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const sum = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      sum * (sum - this.a) * (sum - this.b) * (sum - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('its not Circle');
    }
    this.shape = `circle`;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('its not Rectangle');
    }
    this.shape = `rectangle`;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const figuree: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figuree}`;
}
