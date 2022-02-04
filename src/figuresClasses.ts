export interface Figure {
  shape: string
  color: string
  getArea(): number | never
  sides?: number[]
  radius?: number
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  sides: number[];

  getArea: () => number | never;

  constructor(color: string, ...sides: number[]) {
    this.shape = 'triangle';
    this.color = color;
    this.sides = sides;

    const [a, b, c] = sides;
    let p = a + b + c;

    const errorValue = sides.some((elem: number) => elem <= 0
        || p - elem <= elem);

    if (errorValue) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.getArea = (): number | never => {
      p /= 2;

      const result = ((p - a) * (p - b) * (p - c) * p) ** (1 / 2);

      return Math.round(result * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  getArea: () => number | never;

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }

    this.getArea = (): number | never => {
      const s = (Math.PI * radius * radius);

      return Math.floor(s * 100) / 100;
    };
  }
}

export class Rectangle {
  shape: string;

  color: string;

  sides: number[];

  getArea: () => number | never;

  constructor(color: string, ...sides: number[]) {
    this.shape = 'rectangle';
    this.color = color;
    this.sides = sides;

    const errorValue = [sides[0], sides[1]]
      .some((elem: number) => elem <= 0);

    if (errorValue) {
      throw new Error("sides can't form a rectangle");
    }

    this.getArea = (): number | never => {
      const [width, height] = sides;
      const s = width * height;

      return Math.round(s * 100) / 100;
    };
  }
}

export function getInfo({ shape, color, getArea }: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
