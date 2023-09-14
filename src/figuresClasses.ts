export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  area: number,
}

function HeronsFormula(a: number, b: number, c: number): number {
  const s: number = 1 / 2 * (a + b + c);

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export class Triangle implements Figure {
  public readonly shape: 'triangle';

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    a = 0,
    b = 0,
    c = 0,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.area = HeronsFormula(a, b, c);

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
  public readonly shape: 'circle';

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    radius: number = 0,
  ) {
    this.shape = 'circle';
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
  public readonly shape: 'rectangle';

  public readonly area: number;

  constructor(
    public color: Figure['color'],
    width: number,
    height: number,
  ) {
    this.shape = 'rectangle';
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
