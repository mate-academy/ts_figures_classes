
export interface Figure {
  shape: string,
  color: string,
  area: number,
  getArea(a: number, b: number, c: number): void,
}

export class Triangle {
  constructor(
    public shape: string,
    public color: string,
    public area: number,
  ) {
    this.shape = shape;
    this.color = color;
  }

  getArea(a: number, b: number, c: number): number {
    const bigest: number = Math.max(a, b, c);

    const sum: number = a + b + c;
    if (a <= 0 || b <= 0 || c <= 0 ||  (sum - bigest) <= bigest) {
      throw new Error('your error message');
    }

    const s: number = +((a + b + c) / 2).toFixed(2);
    const area: number = +Math.sqrt(s * (s - a) * (s - b) * (s - c));

    this.area = +area.toFixed(2);

    return +area.toFixed(2);
  }
}

export class Circle {
  constructor(
    public shape: string,
    public color: string,
    public area: number,
  ) {
    this.shape = shape;
    this.color = color;
  }

  getArea(a: number): number {
    const areaCircle = +(Math.PI * a ** 2).toFixed(2);

    this.area = areaCircle;

    return areaCircle;
  }
}

export class Rectangle {
  constructor(
    public shape: string,
    public color: string,
    public area: number,
  ) {
    this.shape = shape;
    this.color = color;
  }

  getArea(a: number, b: number): number {
    const areaRectangle = +(a * b).toFixed(2);

    this.area = areaRectangle;

    return areaRectangle;
  }
}

export function getInfo(figure: any): unknown {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
