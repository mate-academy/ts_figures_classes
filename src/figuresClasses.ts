type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green ' | 'blue';

export interface Figure {
  shape: Shape
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);

    return Number(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2)) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(color: Color, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
    this.color = color;
  }

  getArea(): number {
    const area = (this.width * this.height).toFixed(2);

    return Number(area);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
