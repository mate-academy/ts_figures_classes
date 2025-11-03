type Forms = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Forms;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Forms = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'At least one of the measures is a negative number,' +
          'try to use positive numbers.',
      );
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle.`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Forms = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'At least one of the measures is a negative number,' +
          'try to use positive numbers.',
      );
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Forms = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'At least one of the measures is a negative number,' +
          'try to use positive numbers.',
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
