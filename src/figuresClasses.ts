// figureClasses.ts

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';

// Helper: round down to two decimal places
const floorToHundredths = (n: number): number => Math.floor(n * 100) / 100;

export class Triangle implements Figure {
  public readonly shape: 'triangle' = 'triangle';

  public readonly color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    // All sides must be positive
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive');
    }

    // Triangle inequality: longest side < sum of other two
    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'Invalid triangle: the longest side must be shorter ' +
          'than the sum of the other two',
      );
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return floorToHundredths(area);
  }
}

export class Circle implements Figure {
  public readonly shape: 'circle' = 'circle';

  public readonly color: Color;

  constructor(
    color: Color,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return floorToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: 'rectangle' = 'rectangle';

  public readonly color: Color;

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  public getArea(): number {
    return floorToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  // Show as integer when possible, otherwise two decimal places
  const areaStr = Number.isInteger(area) ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}
