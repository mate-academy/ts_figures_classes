type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0)
    || (a + b + c - Math.max(a, b, c) <= Math.max(a, b, c))) {
      throw new Error('my error message :)');
    }
  }

  getArea = (): number => {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(s * 100) / 100;
  };
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('my error message :)');
    }
  }

  getArea = (): number => {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  };
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('my error message :)');
    }
  }

  getArea = (): number => {
    return Math.trunc(this.width * this.height * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
