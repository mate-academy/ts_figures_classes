export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  a: number;

  b: number;

  c:number;

  shape: string;

  constructor(color:string, a: number, b:number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('error');
    }

    if ((this.a + this.b) <= this.c
     || (this.b + this.c) <= this.a
     || (this.a + this.c) <= this.b) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const sqrt = Math.sqrt((semiPerimeter - this.a)
     * (semiPerimeter - this.b)
     * (semiPerimeter - this.c)
     * semiPerimeter);

    return Math.trunc(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  color: string;

  radius: number;

  shape: string;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const sqrtCircle = Math.PI * this.radius ** 2;

    return Math.trunc(sqrtCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;

  width: number;

  height: number;

  shape: string;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
