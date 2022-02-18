type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const cheked = (a: number, b: number, c: number): boolean => {
  const arr = [a, b, c].sort((x, y) => x - y);

  return arr[2] < arr[1] + arr[0];
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;

    if (a > 0 && b > 0 && c > 0 && cheked(a, b, c)) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error('It\'s not triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +(s).toFixed(3).slice(0, -1);
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    this.color = color;

    if (radius > 0) {
      this.radius = radius;
    } else {
      throw new Error('It\'s not circle');
    }
  }

  getArea(): number {
    return +(this.radius ** 2 * Math.PI).toFixed(3).slice(0, -1);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;

    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    } else {
      throw new Error('It\'s not rectangle');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(3).slice(0, -1);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
