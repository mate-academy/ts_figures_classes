type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];
    const someInvalidSide = triangleSides.some((side) => side <= 0);

    if (someInvalidSide) {
      throw new Error('Invalid value');
    }

    const sortSides = triangleSides.sort((cur, next) => cur - next);

    if (sortSides[2] >= sortSides[1] + sortSides[0]) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const halfOfPerimeter: number = (this.a + this.b + this.c) / 2;
    const firstDif = halfOfPerimeter - this.a;
    const secondDif = halfOfPerimeter - this.b;
    const thirdDif = halfOfPerimeter - this.c;
    const perimeterOfTriangle = Math.sqrt(halfOfPerimeter
      * firstDif * secondDif * thirdDif);

    return +perimeterOfTriangle.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const perOfCircle = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return perOfCircle;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const perimeterOfRectangle = this.width * this.heigth;

    return +perimeterOfRectangle.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
