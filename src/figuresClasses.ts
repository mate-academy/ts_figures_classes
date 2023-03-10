export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Parameter is not valid');
    }

    if (c >= a + b
      || b >= c + a
      || a >= b + c) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter: number = (a + b + c) / 2;
    const area: number = Math.sqrt(semiperimeter
        * (semiperimeter - a)
        * (semiperimeter - b)
        * (semiperimeter - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
