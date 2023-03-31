export interface Figure {
  shape: "triangle" | "circle" | "rectangle";
  color: "red" | "green" | "blue";
  getArea(): number;
}

const isNotATriangle = (a: number, b: number, c: number): boolean => {
  const temp = [a, b, c].sort((a, b) => a - b);

  return temp[2] >= temp[0] + temp[1] ? true : false;
};

type colorOrNumber = "red" | "green" | "blue" | number;

const lengthIsLessThanZero = (...params: colorOrNumber[]): boolean => {
  return params.some((param) => {
    if (typeof param === "string") {
      return !param.length ? true : false;
    }

    return !param || param < 0 ? true : false;
  });
};

const round = (formula: number): number => {
  return Math.floor(formula * 100) / 100;
};

export class Triangle implements Figure {
  shape: "triangle";

  constructor(
    public color: "red" | "green" | "blue",
    public a: number,
    public b: number,
    public c: number
  ) {
    this.shape = "triangle";

    if (lengthIsLessThanZero(color, a, b, c)) {
      throw new Error("The data you entered is not valid");
    }

    if (isNotATriangle(a, b, c)) {
      throw new Error("The sides you have chosen cannot create a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: "circle";

  constructor(public color: "red" | "green" | "blue", public radius: number) {
    this.shape = "circle";

    if (lengthIsLessThanZero(color, radius)) {
      throw new Error("The data you entered is not valid");
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: "rectangle";

  constructor(
    public color: "red" | "green" | "blue",
    public width: number,
    public height: number
  ) {
    this.shape = "rectangle";

    if (lengthIsLessThanZero(color, width, height)) {
      throw new Error("The data you entered is not valid");
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
