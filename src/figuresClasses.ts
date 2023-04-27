type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side less than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('largest side bigger than sum of smaller');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color,
    public radius: number) {
    if (radius <= 0) {
      throw new Error('radius less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
    public height: number, public width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('side less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
