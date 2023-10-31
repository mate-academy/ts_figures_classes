export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side should be more than 0');
    }

    const longestSide = Math.max(a, b, c);

    if (a + b + c - longestSide <= longestSide) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side should be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
