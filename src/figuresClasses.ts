type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Colors,
  shape: Shapes,

  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => y - x);

    if ((sides[0] >= sides[1] + sides[2])
        || a < 1 || b < 1 || c < 1) {
      throw new Error('Every side must me more then 0');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;

    return +(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be more then 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and heigth must be more then 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
