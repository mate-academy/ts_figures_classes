type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.isValidParameters();
  }

  isValidParameters(): void {
    if (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
    ) {
      throw new Error('side(s) can\'t be less then 0');
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('the side of the triangle is not valid');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    const areaOfTriangle
    = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(areaOfTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.isValidParameters();
  }

  isValidParameters(): void {
    if (this.radius <= 0) {
      throw new Error('radius can\'n be less then 0');
    }
  }

  getArea(): number {
    const areaOfCircle = Math.PI * (this.radius ** 2);

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.isValidParameters();
  }

  isValidParameters(): void {
    if (this.width <= 0) {
      throw new Error('width can\'n be less then 0');
    }

    if (this.height <= 0) {
      throw new Error('height can\'n be less then 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
