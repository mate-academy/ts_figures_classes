function roundDown(number: number, decimals: number): number {
  const decims = decimals || 0;

  return Math.floor(number * Math.pow(10, decims)) / Math.pow(10, decims);
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [this.a, this.b, this.c];

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side of triangle can not be <= 0');
    }

    const sortedSides = sides.sort((x, y) => y - x);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(
        'the longest side of a triangle can not be >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return roundDown(area, 2);
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius can not be <= 0');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return roundDown(circleArea, 2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Circle radius can not be <= 0');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return roundDown(rectangleArea, 2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
