type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  color: Color;
  shape: Shape;
  getArea: () => number;
}

function validateData(...nums: number[]): boolean {
  return nums.some((num) => num <= 0);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color : Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortSides: number[] = [a, b, c].sort((x, y) => x - y);

    if (validateData(a, b, c)
      || sortSides[2] >= (sortSides[0] + sortSides[1])) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color : Color,
    public radius: number,
  ) {
    if (validateData(radius)) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color : Color,
    public height: number,
    public weigth: number,
  ) {
    if (validateData(height, weigth)) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const area: number = this.height * this.weigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
