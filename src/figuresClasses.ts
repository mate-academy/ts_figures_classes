export interface Figure {
  color: string;
  shape: string;

  getArea(): number;
}

function isTrianglePossible(a: number, b: number, c:number): boolean {
  const sides = [a, b, c];
  const largest = Math.max(...sides);

  const twoShorterSides = sides.filter((side) => side !== largest);
  const sumOfShorterSides
  = twoShorterSides.reduce((total, side) => total + side, 0);

  if (largest >= sumOfShorterSides) {
    return false;
  }

  return true;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid data');
    }

    if (!isTrianglePossible(this.a, this.b, this.c)) {
      throw new Error('Creating triangle is not possible');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const triangleSquare
      = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
      * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return +triangleSquare.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius ** 2);

    return Math.floor(100 * circleArea) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const rectArea = this.width * this.height;

    return +rectArea.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
