type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function squareRound(square: number):number {
  return Math.floor(square * 100) / 100;
}

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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One or more side`s length <= 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Longest triangle side more then sum of others side`s');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;

    const square = Math.sqrt(
      p * ((p - a) * (p - b) * (p - c)),
    );

    return squareRound(square);
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length <= 0');
    }
  }

  getArea(): number {
    const { radius } = this;
    const circleSquare = Math.PI * radius ** 2;

    return squareRound(circleSquare);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: number,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One or more side`s length <= 0');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const rectangleSquare = width * height;

    return squareRound(rectangleSquare);
  }
}

export function getInfo(figure: Figure):string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea.apply(figure)}`;
}
