export interface Figure {
  shape: string;
  color: string;
  getArea(): void;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not all numbers are positive');
    }

    const longest = [a, b, c];

    longest.sort((el1: number, el2: number) => el1 - el2).reverse();

    if (longest[0] >= (longest[1] + longest[2])) {
      throw new Error('Not a valid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not a valid circle radius');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius * this.radius);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Not a valid rectangle');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
