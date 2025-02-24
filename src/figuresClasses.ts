type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color, private width: number, private height: number) {
    if (height < 0 || width < 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  constructor(public color: Color, private radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color, private a: number, private b: number, private c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero')
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
