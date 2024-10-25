export interface Figure {
  type: 'Triangle' | 'Circle' | 'Rectangle';
  color: 'red' | 'green' | 'blue';
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  type: 'Triangle' = 'Triangle';

  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  type: 'Circle' = 'Circle';

  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    const areaString = area.toString();
    const [integerPart, decimalPart] = areaString.split('.');

    return parseFloat(
      `${integerPart}.${decimalPart ? decimalPart.slice(0, 2) : '00'}`,
    );
  }
}

export class Rectangle implements Figure {
  type: 'Rectangle' = 'Rectangle';

  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  const formattedArea = Number.isInteger(area)
    ? area.toFixed(0)
    : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
