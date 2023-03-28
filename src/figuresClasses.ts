type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(public color: Color, a: number, b: number, c: number) {
    const isValidLength: boolean = a > 0 && b > 0 && c > 0;
    const isValidTriangle: boolean = a + b > c && b + c > a && a + c > b;

    if (!isValidLength || !isValidTriangle) {
      throw new Error('Invalid params');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  radius: number;

  constructor(public color: Color, radius: number) {
    const isValidCircle: boolean = radius > 0;

    if (!isValidCircle) {
      throw new Error('Invalid params');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);
    const [left, right]: string[] = area.toString().split('.');

    return +`${left}.${right.slice(0, 2)}`;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  constructor(public color: Color, width: number, height: number) {
    const isValidRectangle: boolean = width > 0 && height > 0;

    if (!isValidRectangle) {
      throw new Error('Invalid params');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
