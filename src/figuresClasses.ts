export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Properties length must be greater than ');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangel cannot consists of these sides');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(color: string, public r: number) {
    this.color = color;

    if (this.r <= 0) {
      throw new Error('radious is incorrect value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.r ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(color: string, public a: number, public b: number) {
    this.color = color;

    if (a <= 0 || b <= 0) {
      throw new Error('Properties length must be greater than ');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
