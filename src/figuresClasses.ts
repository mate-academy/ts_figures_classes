type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.findErrors();
  }

  getArea(): number {
    return Math.floor(1 / 4 * ((4 * (this.a ** 2) * (this.b ** 2)
      - (((this.a ** 2) + (this.b ** 2) - (this.c ** 2)) ** 2))
      ** (1 / 2)) * 100) / 100;
  }

  findErrors(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side is less or equal to zero');
    }

    if (this.a >= this.b + this.c || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('side is longer than the sum of two others');
    }
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.findErrors();
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }

  findErrors(): void {
    if (this.radius <= 0) {
      throw new Error('radius is less or equal to zero');
    }
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public wigth: number,
    public height: number,
  ) {
    this.findErrors();
  }

  getArea(): number {
    return Math.floor(this.wigth * this.height * 100) / 100;
  }

  findErrors(): void {
    if (this.wigth <= 0 || this.height <= 0) {
      throw new Error('side is less or equal to zero');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
