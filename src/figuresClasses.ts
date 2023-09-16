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
    if (a <= 0 || b <= 0 || c <= 0
      || a >= b + c
      || b >= a + c
      || c >= b + a) {
      throw new Error('Invalid triangle: The sum of any two'
        + 'sides must be greater than the length of the remaining side.');
    }
    this.color = color;
    this.area = calculateArea(a, b, c);
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
    if (radius <= 0) {
      throw new Error('Invalid circle: radius must be greater than 0');
    }
    this.color = color;
    this.area = Math.PI * radius ** 2;
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
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle: width and height'
        + ' of rectangle must be greater than 0');
    }
    this.color = color;
    this.area = width * height;
  }

  getArea(): number {
    return parseFloat(this.area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} `
    + `- ${parseFloat(figure.area.toFixed(2))}`;
}
