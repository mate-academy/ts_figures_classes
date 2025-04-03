export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b}, ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Number(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The height and width must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
