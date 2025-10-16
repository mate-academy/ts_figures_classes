export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public readonly shape: 'triangle' = 'triangle',
  ) {
    const sortedToHigher = [this.a, this.b, this.c].sort(
      (x: number, y: number) => y - x,
    );

    const [first, second, third] = sortedToHigher;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides must be more than zero');
    }

    if (first >= second + third) {
      throw new Error(
        'The triangle with the one side bigger' +
          " than the sum of other sides can't exist",
      );
    }
  }

  getArea(): number {
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const p = (a + b + c) / 2;

    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
      .toString()
      .split('');

    for (let i = 0; i <= area.length; i++) {
      if (area[i] === '.') {
        area.length = i + 3;
      }
    }

    return +area.join('');
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public readonly shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error("The circle with zero radius can't exist");
    }
  }

  getArea(): number {
    const p = Math.PI;
    const r2 = this.radius ** 2;

    const area = (p * r2).toString().split('');

    for (let i = 0; i <= area.length; i++) {
      if (area[i] === '.') {
        area.length = i + 3;
      }
    }

    return +area.join('');
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public readonly shape: 'rectangle' = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The rectangle must have each side more that zero');
    }
  }

  getArea(): number {
    const area = (this.width * this.height).toString().split('');

    for (let i = 0; i <= area.length; i++) {
      if (area[i] === '.') {
        area.length = i + 3;
      }
    }

    return +area.join('');
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
