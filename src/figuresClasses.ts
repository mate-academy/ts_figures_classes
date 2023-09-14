enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  shape: ShapeType,
  color: 'red' | 'green' | 'blue',
  area: number,
}

function calculateArea(a: number, b: number, c: number): number {
  const s: number = 1 / 2 * (a + b + c);

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export class Triangle implements Figure {
  public readonly shape: ShapeType = ShapeType.Triangle;

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    a = 0,
    b = 0,
    c = 0,
  ) {
    this.color = color;
    this.area = calculateArea(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0
      || a >= b + c
      || b >= a + c
      || c >= b + a) {
      throw new Error('');
    }
  }

  getArea(): number {
    return parseFloat(this.area.toFixed(2));
  }
}

export class Circle implements Figure {
  public readonly shape: ShapeType = ShapeType.Circle;

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    radius: number = 0,
  ) {
    this.color = color;
    this.area = Math.PI * radius ** 2;

    if (radius <= 0) {
      throw new Error('');
    }
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle {
  public readonly shape: ShapeType = ShapeType.Rectangle;

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    width: number,
    height: number,
  ) {
    this.color = color;
    this.area = width * height;

    if (width <= 0 || height <= 0) {
      throw new Error('');
    }
  }

  getArea(): number {
    return parseFloat(this.area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} `
    + `- ${parseFloat(figure.area.toFixed(2))}`;
}
