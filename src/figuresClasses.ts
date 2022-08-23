
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape;

  color;

  a: number;

  b: number;

  c: number;

  constructor(color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some side less then 0');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= b + a)) {
      throw new Error('side is incorrect');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape;

  color;

  radius: number;

  constructor(color, radius: number) {
    if (radius <= 0) {
      throw new Error(`${radius} less then 0`);
    }

    this.color = color;
    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius * this.radius) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape;

  color;

  width: number;

  height: number;

  constructor(color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('side is incorrect');
    }

    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
