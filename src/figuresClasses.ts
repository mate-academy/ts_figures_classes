type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundToHundredths(n: number): number {
  return Math.floor(n * 100) / 100;
}

function validatePositive(...values: Array<number>): void {
  const check: boolean = values.some((value: number): boolean => value <= 0);

  if (check) {
    throw new Error('Length should be greater than 0');
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validatePositive(a, b, c);

    const [smallSide, midSide, bigSide] = [a, b, c].sort(
      (x: number, y: number): number => x - y,
    );

    if (bigSide >= smallSide + midSide) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validatePositive(radius);
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validatePositive(width, height);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
