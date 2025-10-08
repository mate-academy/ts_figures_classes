export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle' as const;

  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('one side is less than zero');
    }

    const maxNumber = Math.max(a, b, c);
    const sumNumber = [a, b, c].reduce((sum, n) => sum + n, 0);

    if (maxNumber >= sumNumber - maxNumber) {
      throw new Error('one of the sides is not valid');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle' as const;

  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('the radius of the circle is less than 0');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle' as const;

  constructor(
    public color: 'red' | 'blue' | 'green',
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('the width or height of the rectangle is less than 0');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
