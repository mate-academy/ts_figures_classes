export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('The length of side(s) is less or equals 0');
    }

    if (!this.isTriangle()) {
      throw new Error('The sum of shorter sides is lower than longest side');
    }
  }

  isTriangle(): boolean {
    const arrOfNumbers = [this.a, this.b, this.c];
    const maxNumber = Math.max(...arrOfNumbers);

    arrOfNumbers.splice(arrOfNumbers.indexOf(maxNumber), 1);

    const sumOfLowest = arrOfNumbers.reduce((a, b) => a + b);

    return sumOfLowest > maxNumber;
  }

  getArea():number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is negative number or 0');
    }
  }

  getArea(): number {
    const doubled = this.radius * this.radius;

    const area = Math.trunc(Math.PI * doubled * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides can\'t be 0 or negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
