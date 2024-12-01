enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: Color,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides must be greater than zero');
    }

    if (c >= a + b || a >= b + c || b >= a + c) {
      throw new Error('wrong length');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public readonly shape: 'circle' = 'circle';

  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
