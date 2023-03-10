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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Parameter is not valid');
    }

    if (this.c >= this.a + this.b) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (this.radius <= 0) {
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
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
