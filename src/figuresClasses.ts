export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red'| 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red'| 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    const sortedSides: number[] = [a, b, c]
      .sort((first, second) => second - first);

    if ((sortedSides[0] >= sortedSides[1] + sortedSides[2])
    || sortedSides.some((side) => side === 0)) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red'| 'green' | 'blue',
    public radius: number,
    public shape: Figure['shape'] = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red'| 'green' | 'blue',
    public a: number,
    public b: number,
    public shape: Figure['shape'] = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    return Math.round((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
