
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
    const s: number = +((a + b + c) / 2).toFixed(2);
    const areaTriangle: number = +(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);

    this.area = areaTriangle;

    return areaTriangle;
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

export function getInfo(figure: any): {} {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`

}
