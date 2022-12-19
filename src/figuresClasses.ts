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
    this.validParameters();
  }

  validParameters(): void {
    const theSmallestNumber = Math.min(
      this.a,
      this.b,
      this.c,
    );

    if (theSmallestNumber <= 0) {
      throw new Error('side(s) should be greater then 0');
    }

    if (!this.isValidTriangle()) {
      throw new Error('the side of the triangle is not valid');
    }
  }

  isValidTriangle(): boolean {
    const sortedSides: number[] = [this.a, this.b, this.c]
      .sort((side1, side2) => side1 - side2);

    if ((sortedSides[2] >= (sortedSides[0] + sortedSides[1]))) {
      return false;
    }

    return true;
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
    this.validParameters();
  }

  validParameters(): void {
    if (this.radius <= 0) {
      throw new Error('radius should be greater then 0');
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
    this.validParameters();
  }

  validParameters(): void {
    if (this.width <= 0) {
      throw new Error('width should be greater then 0');
    }

    if (this.height <= 0) {
      throw new Error('height should be greater then 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
