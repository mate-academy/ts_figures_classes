export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export function checkTriangleSides(
  a: number,
  b: number,
  c: number,
): boolean {
  const sides = [a, b, c];
  const maxValue = Math.max.apply(null, sides);
  const lessSides = sides.filter((value) => value !== maxValue);
  const sum = lessSides[0] + lessSides[1];

  if (a <= 0 || b <= 0 || c <= 0 || (maxValue >= sum)) {
    return false;
  }

  return true;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!checkTriangleSides(a, b, c)) {
      throw new Error('Incorrect triangle side');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = semiPerimeter
    * (semiPerimeter - this.a)
    * (semiPerimeter - this.b)
    * (semiPerimeter - this.c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect circle radius');
    }
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
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
      throw new Error('Incorrect rectangle side');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
