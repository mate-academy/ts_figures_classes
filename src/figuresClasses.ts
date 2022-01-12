export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: string | 'red' | 'green' | 'blue';
  getArea() : number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {
    this.shape = 'triangle';

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return +(result.toString()).slice(0, (result.toString()).indexOf('.') + 3);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: 'circle',
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const result = +(Math.PI * this.radius * this.radius);

    return +(result.toString()).slice(0, (result.toString()).indexOf('.') + 3);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: 'rectangle',
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
