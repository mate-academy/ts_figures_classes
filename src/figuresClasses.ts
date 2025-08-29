export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function assertPositiveSides(shape: string, ...nums: number[]): void {
  if (!nums.every((n) => n > 0)) {
    if (shape === 'triangle') {
      throw new Error('Triangle sides must be greater than 0.');
    }

    if (shape === 'circle') {
      throw new Error('Radius must be greater than 0.');
    }

    if (shape === 'rectangle') {
      throw new Error('Rectangle width and height must be greater than 0.');
    }
  }
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    assertPositiveSides(this.shape, a, b, c);

    const longest = Math.max(a, b, c);
    const sum = a + b + c;

    if (2 * longest >= sum) {
      throw new Error(
        `Sides ${a}, ${b}, ${c} cannot form a triangle (triangle inequality).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    assertPositiveSides(this.shape, radius);
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    assertPositiveSides(this.shape, width, height);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
