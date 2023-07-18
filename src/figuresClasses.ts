export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: string;

  public sides: number[];

  constructor(public color: string, ...sides: number[]) {
    if (sides.some((side: number) => side <= 0)) {
      throw new Error('Error: sides must be greater than 0');
    }

    if (
      sides[0] + sides[1] <= sides[2]
      || sides[1] + sides[2] <= sides[0]
      || sides[0] + sides[2] <= sides[1]
    ) {
      throw new Error(
        'Error: sum of any two sides must be greater than the third side',
      );
    }

    this.shape = 'triangle';
    this.sides = sides;
  }

  public getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: string;

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Error: must be greater than 0');
    }

    this.shape = 'circle';
  }

  public getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error: width and height must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
