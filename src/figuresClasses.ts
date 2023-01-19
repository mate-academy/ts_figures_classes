enum ShapeEnum {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
enum ColorEnum {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: ShapeEnum;
  color: ColorEnum;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = ShapeEnum.Triangle;

  constructor(
    public color: ColorEnum,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c];

    if (sides.some((side) => side <= 0)) {
      throw new Error('One of sides is 0');
    }

    sides.sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('Triangle does not exist');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = ShapeEnum.Circle;

  constructor(
    public color: ColorEnum,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = ShapeEnum.Rectangle;

  constructor(
    public color: ColorEnum,
    public width: number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of sides is 0');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
