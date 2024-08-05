export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: Function;
}

export class Triangle implements Figure {
  shape = 'triangle' as const;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(a, b, c) < 0) {
      throw new Error('your error message');
    }

    const [min, mid, max] = [a, b, c].sort((x, y) => x - y);

    if (max >= mid + min) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(
        semiperimeter *
          (semiperimeter - this.a) *
          (semiperimeter - this.b) *
          (semiperimeter - this.c),
      ).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape = 'circle' as const;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle' as const;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (Math.min(width, height) < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
