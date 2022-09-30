type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

function catchError(...args: number[]): void {
  let error = args.some((parameter) => parameter <= 0);

  if (args.length === 3) {
    const max = Math.max(...args);
    const sum = args.reduce((a, b) => a + b, 0);

    error = (max >= sum - max);
  }

  if (error) {
    throw new Error('Invalid data!');
  }
}

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    catchError(a, b, c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    catchError(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    catchError(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
