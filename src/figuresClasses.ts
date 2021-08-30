export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length should be greater than 0');
    }

    const arrayOfTriangle: number[] = [a, b, c]
      .sort((x: number, y: number) => y - x);

    if (arrayOfTriangle[0] === arrayOfTriangle[1] + arrayOfTriangle[2]) {
      throw new Error('A triangle can\'t be created from these 3 sides');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2; // half of perimeter
    const area: number = (p
      * (p - this.a)
      * (p - this.b)
      * (p - this.c)) ** (1 / 2); // Heron's formula

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length should be greater than 0');
    }
  }

  getArea(): number {
    const area: number = 3.14 * this.radius ** 2;

    return Number(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length has to be grater than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
