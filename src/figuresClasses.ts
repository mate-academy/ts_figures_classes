export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: Function,
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Any side can\'t be 0 or less');
    }

    const sides = [this.a, this.b, this.c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('Sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return +((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Figure['color'],
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('Radius can\'t be 0 or less');
    }
  }

  getArea(): number {
    return +(Math.PI * this.a ** 2).toFixed(2);
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Sides can\'t be 0 or less');
    }
  }

  getArea():number {
    return +(this.a * this.b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const result: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${result}`;
}
