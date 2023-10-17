type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: string,
  getArea(): number,
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sum = this.a + this.b;

    if (a <= 0 || b <= 0 || c <= 0 || c >= sum) {
      throw new Error('Sides are not positive numbers');
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Radius is a not positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('All sides should are positive numbers');
    }
  }

  getArea(): number {
    const area = Number(this.height) * Number(this.width);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
