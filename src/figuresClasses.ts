type Shapes = "triangle" | "circle" | "rectangle";
type Colors = "red" | "green" | "blue";
type colorOrNumber = Colors | number;

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

class Controller {
  static lengthIsLessThanZero = (...params: colorOrNumber[]): boolean => {
    return params.some((param) => {
      if (typeof param === "string") {
        return !param.length;
      }

      return !param || param < 0;
    });
  };

  static getRoundingDown = (formula: number): number => {
    return Math.floor(formula * 100) / 100;
  };
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number
  ) {
    if (Controller.lengthIsLessThanZero(color, a, b, c)) {
      throw new Error("The data you entered is not valid");
    }

    if (this.isNotATriangle(a, b, c)) {
      throw new Error("The sides you have chosen cannot create a triangle");
    }
  }

  shape: Shapes = "triangle";

  isNotATriangle(a: number, b: number, c: number): boolean {
    const temp = [a, b, c].sort((a, b) => a - b);

    return temp[2] >= temp[0] + temp[1];
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c)
    );

    return Controller.getRoundingDown(square);
  }
}

export class Circle implements Figure {
  constructor(public color: Colors, public radius: number) {
    if (Controller.lengthIsLessThanZero(color, radius)) {
      throw new Error("The data you entered is not valid");
    }
  }

  shape: Shapes = "circle";

  getArea(): number {
    return Controller.getRoundingDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number
  ) {
    if (Controller.lengthIsLessThanZero(color, width, height)) {
      throw new Error("The data you entered is not valid");
    }
  }

  shape: Shapes = "rectangle";

  getArea(): number {
    return Controller.getRoundingDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
