type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= (b + c) || (b >= (a + c)) || (c >= (a + b))) {
      throw new Error('error: sides 1, 2 and 3 cannot form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error: sides 1, 2 and 3 cannot have a negative value');
    }
  }

  getArea():number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const square = perimetr * (perimetr - this.a) * (perimetr - this.b)
   * (perimetr - this.c);
    const result = Math.sqrt(square);

    return Number(result.toFixed(2));
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error: radius of the circle is less than 0');
    }
  }

  getArea():number {
    const result = Math.PI * this.radius * this.radius;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ((width <= 0) || (height <= 0)) {
      throw new Error('error: width and height cannot form a rectangle');
    }
  }

  getArea():number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
