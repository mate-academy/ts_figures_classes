type Shape = 'triangle' | 'circle' | 'rectangle';

type ShapeColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: ShapeColor;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: ShapeColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all sides of a triangle should be greater than 0');
    }

    const sortedSides = [a, b, c].toSorted((first, second) => first - second);

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(
        'the longest side of a triangle should be' +
          ' greater or equal than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: ShapeColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius of a circle should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: ShapeColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('all sides of a rectangle should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
