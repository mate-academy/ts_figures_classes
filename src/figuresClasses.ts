export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: 'triangle';

  color: Color;

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  };

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;

    if (a <= 0
      || b <= 0
      || c <= 0
      || Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Wrong sides of a triangle');
    }
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: Color;

  getArea = (): number => Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

  constructor(color: Color, public radius: number) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Color;

  getArea = (): number => Math.floor(this.height * this.width * 100) / 100;

  constructor(color: Color, public width: number, public height: number) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Wrong sides');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
