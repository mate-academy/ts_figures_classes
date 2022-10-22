export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle {
  shape = 'triangle';

  constructor(public color: Figure,
    public a: number,
    public b: number,
    public c: number) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || this.c >= this.a + this.b) {
      throw new Error('your error message');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const halfPer: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(halfPer * (halfPer - this.a)
    * (halfPer - this.b) * (halfPer - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: Figure,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea():number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: Figure,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea():number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
