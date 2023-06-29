export interface Figure {
  shape: string,
  area: number,
  color: string,
}

export class Triangle {
  readonly shape: string = "Triangle";
  private area: number = 0;
  constructor(
    readonly color: "red" | "green" | "blue",
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong value!');
    } else {
      this.getArea();
    }
  }

  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    this.area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle {
  readonly shape: string = "Circle";
  private area: number = 0;
  constructor(
    readonly color: "red" | "green" | "blue",
    readonly a: number,
  ) {
    if (a <= 0) {
      throw new Error('Wrong value!');
    } else {
      this.getArea();
    }
  }

  getArea() {
    this.area = 2 * Math.PI * this.a;
  }
}

export class Rectangle {
  readonly shape: string = "Rectangle";
  private area: number = 0;
  readonly color: "red" | "green" | "blue";
  readonly a: number;
  readonly b: number;
  constructor(color: "red" | "green" | "blue", a: number, b: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    if (a <= 0 || b <= 0) {
      throw new Error('Wrong value!');
    } else {
      this.getArea();
    }
  }

  getArea() {
    this.area = this.a * this.b;
  }
}

export function getInfo(figure: Figure) {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`
}
