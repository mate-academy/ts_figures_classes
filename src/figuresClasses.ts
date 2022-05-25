export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export function heronsFormula(sides: number[]): boolean {
  const sortedSides = sides.sort((a, b) => a - b);

  if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
    return false;
  }

  return true;
}

export function greaterThanZero(args: number[]): boolean {
  if (args.every((x) => x > 0)) {
    return true;
  }

  return false;
}

export function roundToHund(x: number): number {
  return Math.floor(x * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (!greaterThanZero([a, b, c])) {
      throw new Error('Side/Sides lesser than 0');
    }

    if (!heronsFormula([a, b, c])) {
      throw new Error('Triangle sides doesnt match Herons Formula');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToHund(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (!greaterThanZero([radius])) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return roundToHund(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (!greaterThanZero([width, height])) {
      throw new Error('Invalid arguments');
    }
  }

  getArea(): number {
    return roundToHund(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
