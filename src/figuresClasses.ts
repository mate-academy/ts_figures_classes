type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const checkSides = a <= 0 || b <= 0 || c <= 0;

    let theLongest = 0;
    let sum = 0;

    [a, b, c].forEach((side, index, sides) => {
      theLongest = side > theLongest ? side : theLongest;

      if (side === theLongest) {
        sum = sides
          .filter((side1, index1) => index1 !== index)
          .reduce((sum1, num) => sum1 + num, 0);
      }
    });

    const checkTheLongest = theLongest >= sum;

    if (checkSides || checkTheLongest) {
      throw new Error('Enter correct values');
    }
  }

  getArea(): number {
    let area = 0;
    const p = (this.a + this.b + this.c) / 2;

    area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter correct radius');
    }
  }

  getArea(): number {
    let area = 0;

    area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct values');
    }
  }

  getArea(): number {
    let area = 0;

    area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
