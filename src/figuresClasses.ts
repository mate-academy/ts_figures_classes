type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides must be bigger than 0');
    }

    if (this.a > this.b && this.a > this.c && this.a >= (this.b + this.c)) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    if (this.b > this.a && this.b > this.c && this.b >= (this.a + this.c)) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    if (this.c > this.a && this.c > this.b && this.c >= (this.a + this.b)) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  a: number;

  constructor(color: Color, a: number) {
    this.color = color;
    this.a = a;

    if (this.a <= 0) {
      throw new Error('radius must be bigger than 0');
    }
  }

  getArea(): number {
    const s = Math.PI * this.a ** 2;

    return (Math.floor(s * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  a: number;

  b: number;

  constructor(color: Color, a: number, b: number) {
    this.color = color;
    this.a = a;
    this.b = b;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('sides must be bigger than 0');
    }
  }

  getArea(): number {
    const s = this.a * this.b;

    return +s.toFixed(2);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
