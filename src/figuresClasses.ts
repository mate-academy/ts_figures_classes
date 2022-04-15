export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}
export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    a: number, b: number, c: number,
  ) {
    if (a && b && c) {
      if (a + b <= c || a + c <= b || c + b <= a) {
        throw new Error('Only real triangle sizes, please');
      } else {
        this.a = a;
        this.b = b;
        this.c = c;
      }
    } else {
      throw new Error('Only positive triangle sizes, please');
    }
  }

  getArea(): number {
    const halfSum = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(halfSum * (halfSum - this.a)
      * (halfSum - this.b) * (halfSum - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Positive radius, please');
    } else {
      this.radius = radius;
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  width: number;

  height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Positive length, please');
    } else {
      this.width = width;
      this.height = height;
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
