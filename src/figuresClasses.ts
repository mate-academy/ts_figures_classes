/* eslint-disable no-useless-constructor */
export interface Figure {
  shape: string;
  color: string;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      [this.a, this.b, this.c].some((side) => side <= 0) ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a
    ) {
      throw new Error('Wrong size measures');
    }
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area =
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100;

    return area;
  };
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('Wrong size measures');
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  };
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Wrong size measures');
    }
  }

  getArea = (): number => {
    return Math.floor(this.a * this.b * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  const shapeName = figure.shape;
  const area = figure.getArea();

  return `A ${figure.color} ${shapeName} - ${area}`;
}
