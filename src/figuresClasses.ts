type Shape = "triangle" | "circle" | "rectangle";

type Color = "red" | "green" | "blue";

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = "triangle",
  ) {
    const sides = [a, b, c].sort((x, y) => x - y);
    
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("All triangle sides must be positive numbers.'")
    }

    if (sides[2] >= sides[1] + sides[0]) {
      throw new Error("The provided sides do not form a valid triangle.")
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2

    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = "circle",
  ) {
    if (radius <= 0) {
      throw new Error("Circle radius must be a positive number.")
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = "rectangle",
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Rectangle width and height must be positive numbers.")
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
