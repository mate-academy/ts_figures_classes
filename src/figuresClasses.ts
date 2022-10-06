enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

const roundDown = (num: number): number => Math.floor(num * 100) / 100;

const validate = (...values: number[]): void => {
  values.forEach((value) => {
    if (value <= 0) {
      throw new Error('sizes are wrong');
    }
  });
};

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validate(this.a, this.b, this.c);

    const max = Math.max(this.a, this.b, this.c);

    if (max >= (this.a + this.b + this.c) - max) {
      throw new Error('sizes are wrong');
    }
  }

  getArea = (): number => {
    const { a, b, c } = this;

    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return roundDown(area);
  };
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validate(this.radius);
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  };
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validate(this.width, this.height);
  }

  getArea = ():number => {
    const { height, width } = this;

    const area = height * width;

    return roundDown(area);
  };
}

export function getInfo({
  color,
  shape,
  getArea,
}: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
