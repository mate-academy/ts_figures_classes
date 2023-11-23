function roundToHundreths(number: number): number {
  return +(Math.floor(number * 100) / 100).toFixed(2);
}

function checkLength(...args: Array<number>): void {
  const notPositive = [...args].find((arg) => arg <= 0);

  if (notPositive) {
    throw new Error('Length must be a positive number');
  }
}

type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' |'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors, public a: number, public b: number, public c: number,
  ) {
    checkLength(a, b, c);

    const longest: number = Math.max(a, b, c);

    if (longest >= a + b + c - longest) {
      throw new Error('Longest side cannot be bigger than the sum of others');
    }
    this.shape = 'triangle';
  }

  getArea = (): number => {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundToHundreths(area);
  };
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(public color: Colors, public radius: number) {
    checkLength(radius);
    this.shape = 'circle';
  }

  getArea = (): number => roundToHundreths(Math.PI * this.radius * this.radius);
}

export class Rectangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors, public width: number, public height: number,
  ) {
    checkLength(width, height);
    this.shape = 'rectangle';
  }

  getArea = (): number => roundToHundreths(this.width * this.height);
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
