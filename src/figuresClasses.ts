export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides');
    }

    const max = Math.max(a, b, c);
    const sum = a + b + c - max;

    if (max >= sum) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('The radius must be positive');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}
export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('The length of a side must be positive');
    }
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
