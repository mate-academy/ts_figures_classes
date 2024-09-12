export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  getArea: () => number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('every value in Triangle must be greater than 0');
    }

    if (
      this.b + this.c <= this.a ||
      this.c + this.a <= this.b ||
      this.b + this.a <= this.c
    ) {
      throw new Error('figure is not triangle');
    }

    this.getArea = (): number => {
      const semi = (this.a + this.b + this.c) * 0.5;
      const triangleArea = Math.sqrt(
        (semi - this.a) * (semi - this.b) * (semi - this.c) * semi,
      );

      return Math.floor(triangleArea * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  getArea: () => number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('value in Circle must be greater than 0');
    }

    this.getArea = (): number => {
      const circleArea = this.radius ** 2 * Math.PI;

      return Math.floor(circleArea * 100) / 100;
    };
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  getArea: () => number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('every value in Rectangle must be greater than 0');
    }

    this.getArea = (): number => {
      const rectangleArea = this.width * this.height;

      return Math.floor(rectangleArea * 100) / 100;
    };
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
