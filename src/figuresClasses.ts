enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blur';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;

}

const roundDown = (num:number): number => Math.floor(num * 100) / 100;

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sizes are wrong');
    }

    const max = Math.max(this.a, this.b, this.c);

    if (max >= (this.a + this.b + this.c - max)) {
      throw new Error('sizes are wrong');
    }
  }

  getArea = (): number => {
    const { a, b, c } = this;

    const semiPerimetr = (a + b + c) / 2;

    return roundDown(
      Math.sqrt(
        semiPerimetr
        * (semiPerimetr - a)
        * (semiPerimetr - b)
        * (semiPerimetr - c),
      ),
    );
  };
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('sizes are wrong');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  };
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('sizes are wrong');
    }
  }

  getArea(): number {
    const { heigth, width } = this;
    const area = heigth * width;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
