type Color = 'red'|'green'|'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea: Function;
}

function roundedArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

function isTriangle(a:number, b:number, c:number):boolean {
  const allSides = [a, b, c].sort((x:number, y:number) => x - y);

  return allSides[2] < allSides[0] + allSides[1];
}

export class Triangle {
  public shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || !isTriangle(a, b, c)) {
      throw new Error('triangle with such sides does not exist');
    }
  }

  getArea():number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c),
    );

    return roundedArea(triangleArea);
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('not valid radius');
    }
  }

  getArea():number {
    const circleArea = Math.PI * this.radius ** 2;

    return roundedArea(circleArea);
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('not valid sides');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
