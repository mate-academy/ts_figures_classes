export interface Figure {
  color: string;
  a: number;
  b?: number;
  c?: number;
  shape: string;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    this.validationTriangle();
  }

  private validationTriangle(): void {
    const [a, b, c] = [this.a, this.b, this.c].sort((x, y) => x - y);

    if (a + b <= c) {
      throw new Error(
        `throws an error: sides 1, 2 and 3 can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s: number = +((this.a + this.b + this.c) / 2).toFixed(2);

    const sum: number = +Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    ).toFixed(2);

    return sum;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public shape: string = 'circle',
  ) {
    this.validationCircle();
  }

  private validationCircle(): void {
    if (this.a <= 0) {
      throw Error(`throws an error`);
    }
  }

  getArea(): number {
    const sum: number = Math.PI * Math.pow(this.a, 2);

    return Math.trunc(sum * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public shape: string = 'rectangle',
  ) {
    this.validationRectangle();
  }

  private validationRectangle(): void {
    if (this.a <= 0 || this.b <= 0) {
      throw Error(`throws an error`);
    }
  }

  getArea(): number {
    const sum: number = +(this.a * this.b).toFixed(2);

    return sum;
  }
}

export function getInfo(figure: Figure): string {
  const area =
    figure instanceof Rectangle
      ? figure.getArea()
      : figure instanceof Circle
        ? figure.getArea()
        : figure instanceof Triangle
          ? figure.getArea()
          : 0;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}

const trin = new Circle('blue', 3);

// eslint-disable-next-line no-console
console.log(getInfo(trin));
