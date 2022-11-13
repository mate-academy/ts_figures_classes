type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundValue(value:number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error! Side length should be graeter than 0');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(`the sum of the lengths of two sides must be greater
      than the length of the third side`);
    }
  }

  getArea(): number {
    const halfOfPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt((halfOfPerimetr - this.a) * (halfOfPerimetr - this.b)
      * (halfOfPerimetr - this.c) * halfOfPerimetr);

    return roundValue(area);
  }
}

export class Circle {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be bigger then 0');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return roundValue(square);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Error! Height and width should be bigger than 0');
    }
  }

  getArea():number {
    const recSquare = this.heigth * this.width;

    return roundValue(recSquare);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
