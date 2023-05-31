type Colors = 'triangle' | 'circle' | 'rectangle';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Size cant be <= 0');
    } else if (
      a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error('Wrong size of triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor((area) * 100) / 100;
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Size cant be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor((area) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Size cant be <= 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor((area) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
