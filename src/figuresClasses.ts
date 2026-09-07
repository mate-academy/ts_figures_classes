export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function roundDownHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle' as const;

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (max >= sum - max) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownHundredths(area);
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle' as const;

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownHundredths(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle' as const;

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return roundDownHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaStr = Number.isInteger(area) ? String(area) : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}

