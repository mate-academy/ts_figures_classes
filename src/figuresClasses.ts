function rounding(result: number): number {
  return Math.floor(result * 100) / 100;
}

type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' |'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
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
    const triangleCheckSides = [a, b, c].sort((i, k) => i - k);

    if (triangleCheckSides[2] >= triangleCheckSides[1] + triangleCheckSides[0]
      || a === 0
      || b === 0
      || c === 0
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const trianglePerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      trianglePerimeter
      * (trianglePerimeter - this.a)
      * (trianglePerimeter - this.b)
      * (trianglePerimeter - this.c),
    );

    return rounding(triangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return rounding((this.radius ** 2) * Math.PI);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

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
    return rounding(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
