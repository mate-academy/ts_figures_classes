export interface Figure {
  shape: string,
  color: string,
  getArea(): number
}

export class Triangle implements Figure {
  public shape= 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || !a || !b || !c
      || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b}, ${c} can't form triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const roundedArea = (Math.floor(area * 100)) / 100;

    return roundedArea;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (!radius || radius <= 0) {
      throw new Error(`you should pass valid radius. Radius - ${radius}`);
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;
    const roundedArea = (Math.floor(area * 100)) / 100;

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (!width || width <= 0
        || !height || height <= 0) {
      // eslint-disable-next-line max-len
      throw new Error(`height: ${height} and width: ${width} can't form rectangle`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
