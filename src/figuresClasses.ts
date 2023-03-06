
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
  };

  getArea(a: number, b: number, c: number) {
    const s: number = + ((a + b + c) / 2).toFixed(2);
    const area: number = + (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);

    this.area = area;
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

  getArea(a: number) {
    this.area = + (Math.PI * a**2).toFixed(2);
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

  getArea(a: number, b: number) {
    this.area = + (a * b).toFixed(2);
  }
}

export function getInfo(figure: any): {} {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`

}
