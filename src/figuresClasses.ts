export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c || b >= a + c || c >= a + b || Math.min(a, b, c) <= 0) {
      throw new Error('A triangle with such sides is impossible');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less than zero');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;

    return (Math.floor(s * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (Math.min(a, b) <= 0) {
      throw new Error('Check your sides. Some of them is less than zero');
    }
  }

  getArea(): number {
    return +(this.a * this.b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
