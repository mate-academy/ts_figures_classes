type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape : 'triangle' | 'circle' | 'rectangle';
  color : Color;
  getArea() : number;
}

let square : number;

export class Triangle implements Figure {
  shape : 'triangle';

  color : 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(color : 'red' | 'green' | 'blue',
    a : number, b : number, c : number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0) {
      throw new Error('your error message');
    }

    if (this.b <= 0) {
      throw new Error('your error message');
    }

    if (this.c <= 0) {
      throw new Error('your error message');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b) {
      throw new Error('your error message');
    }
  }

  getArea() : number {
    square = Math.sqrt(((this.a + this.b + this.c) / 2)
    * (((this.a + this.b + this.c) / 2) - this.a)
    * (((this.a + this.b + this.c) / 2) - this.b)
    * (((this.a + this.b + this.c) / 2) - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color : 'red' | 'green' | 'blue';

  radius : number;

  constructor(color : 'red' | 'green' | 'blue', radius : number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea() : number {
    square = Math.PI * this.radius ** 2;

    return Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape : 'rectangle';

  color : 'red' | 'green' | 'blue';

  width : number;

  height : number;

  constructor(color : 'red' | 'green' | 'blue',
    width : number, height : number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea() : number {
    square = this.height * this.width;

    return Math.round(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
