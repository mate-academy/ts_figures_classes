type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    private a: number,
    private b: number,
    private c: number,
    public color: Color,
  ) {
    this.findErrors();
  }

  getArea(): number {
    const halfPerim = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      halfPerim
      * (halfPerim - this.a) * (halfPerim - this.b) * (halfPerim - this.c),
    );

    return Math.floor(area * 100) / 100;
  }

  findErrors(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of sides is less or equal to zero!');
    }

    const sides = [this.a, this.b, this.c];
    const biggestSide = Math.max(...sides);
    const sum = sides
      .filter((side) => side !== biggestSide)
      .reduce((side, acc) => acc + side);

    if (biggestSide >= sum) {
      throw new Error('Not a triangle!');
    }
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    this.findErrors();
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }

  findErrors(): void {
    if (this.radius <= 0) {
      throw new Error('Radius is less or equal to zero!');
    }
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private wigth: number,
    private height: number,
  ) {
    this.findErrors();
  }

  getArea(): number {
    return Math.floor(this.wigth * this.height * 100) / 100;
  }

  findErrors(): void {
    if (this.wigth <= 0 || this.height <= 0) {
      throw new Error('Side is less or equal to zero!');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
