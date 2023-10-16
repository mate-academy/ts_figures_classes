type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red'| 'green'| 'blue';

export interface Figure {
  shape:Shape;
  color:Color
  getArea():number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a * b * c <= 0) {
      throw new Error('Your triangle can not exist');
    }

    const sides = [a, b, c];

    sides.sort((as, bs) => as - bs);

    if (sides[sides.length - 1] >= sides[0] + sides[1]) {
      throw new Error(
        `sides ${sides[0]},${sides[1]} and ${sides[2]} can't form a triangle`,
      );
    }
  }

  getArea():number {
    const { a, b, c } = this;

    const p = 0.5 * (a + b + c);

    const area = Math.floor(
      Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle can not be formed');
    }
  }

  getArea():number {
    const { radius } = this;

    return Math.floor((Math.PI * (radius * radius)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color:Color,
    public width:number,
    public height:number,
  ) {
    if (height * width <= 0) {
      throw new Error('Rectangle can not be formed');
    }
  }

  getArea():number {
    const { height, width } = this;

    return height * width;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
