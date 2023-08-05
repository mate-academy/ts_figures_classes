export interface Figure {
  shape: string,
  color: string,

  getArea(): number
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (!this.canFormTriangle(a, b, c)) {
      throw new Error(
        'throws an error: sides 1, 2 and 3 can\'t form a triangle',
      );
    }
  }

  shape = 'triangle';

  private canFormTriangle(a: number, b: number, c: number): boolean {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }

    const sides: number[] = [this.a, this.b, this.c];
    const sortedSides: number[] = sides.sort(
      (side1: number, side2: number) => side2 - side1,
    );

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      return false;
    }

    return true;
  }

  getArea(): number {
    const aTo2: number = this.a ** 2;
    const bTo2: number = this.b ** 2;
    const cTo2: number = this.c ** 2;

    return Math.floor(
      (
        (1 / 4) * Math.sqrt((4 * aTo2 * bTo2) - ((aTo2 + bTo2 - cTo2) ** 2))

      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    private r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('throws an error');
    }
  }

  shape = 'circle';

  getArea(): number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('throws an error');
    }
  }

  shape = 'rectangle';

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
