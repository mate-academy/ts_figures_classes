export interface Figure {
  shape: string,
  color: string,
  area: number,
}

export class Triangle {
  shape: string;

  area: number;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.area = this.getArea();

    const sum = this.a + this.b;

    if (a <= 0 || b <= 0 || c <= 0 || c >= sum) {
      throw new Error();
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: string;

  area: number;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.area = this.getArea();

    if (this.radius < 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export class Rectangle {
  shape: string;

  area: number;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.area = this.getArea();

    if (this.width < 0 || this.height < 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area = Number(this.height) * Number(this.width);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
