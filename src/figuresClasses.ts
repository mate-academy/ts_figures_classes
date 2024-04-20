function roundedToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundedToHundredths(area);
  }
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle side');
    }

    const sortSides = [a, b, c].sort((f, s) => s - f);

    const isPossible = sortSides[0] >= sortSides[1] + sortSides[2];

    if (isPossible) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiper = 0.5 * (a + b + c);
    const area = Math.sqrt(
      semiper * (semiper - a) * (semiper - b) * (semiper - c),
    );

    return roundedToHundredths(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid width or height');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedToHundredths(area);
  }
}

export function getInfo(figure: Circle | Triangle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
