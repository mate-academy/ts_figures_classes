type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

function throwError(...sides: number[]): void {
  const firstTrue: boolean = sides.some((side: number) => side <= 0);

  if (firstTrue) {
    throw new Error('Invalid data for this figure!');
  }
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    throwError(a, b, c);

    const sortedSides: number[] = [a, b, c]
      .sort((valueA, valueB) => valueA - valueB);

    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      throw new Error('Invalid sizes for triangle sides!');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    throwError(radius);
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    throwError(width, height);
  }

  getArea():number {
    return roundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
