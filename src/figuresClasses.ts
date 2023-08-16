export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be longer than 0!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Those sides will not form a triangle!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c)).toFixed(2));
  }
}

export class Circle {
  shape: string = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Both sides must be longer than 0');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
