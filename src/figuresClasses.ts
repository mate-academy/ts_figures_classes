function floorToHundrets(area: number):number {
  return Math.floor(100 * area) / 100;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Incorrect SIDES');
    }

    const sides: number[] = [a, b, c].sort((s1, s2) => s1 - s2);

    if (sides[2] >= sides[1] + sides[0]) {
      throw new Error('IT IS NOT A TRIANGLE');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c));

    return floorToHundrets(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Incorrect RADIUS');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return floorToHundrets(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect SIDES');
    }
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return floorToHundrets(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
