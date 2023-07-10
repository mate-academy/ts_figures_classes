type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  form: Shape;
  color: Color;
}

export class Triangle {
  constructor(
    public color: Figure['color'],
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Figure['form'],
  ) {
    if (sideA && sideB && sideC) {
      let sides = [sideA, sideB, sideC];
      const maxSide = Math.max(...sides);

      sides = sides.filter((num) => num !== maxSide);

      if (maxSide >= (sides[0] + sides[1])) {
        throw new Error(
          'one of the sides cannot be greater than or equal to the other two',
        );
      }
    }

    if (!sideC || !sideA || !sideB) {
      throw new Error('side lengths must be specified');
    }

    if (sideC <= 0 || sideB <= 0 || sideA <= 0) {
      throw new Error('length cannot be <= 0');
    }

    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.shape = 'triangle';
  }

  public getArea(): number {
    const perimeter = (this.sideA + this.sideB + this.sideC) / 2;

    const square = Math.sqrt(
      perimeter * (perimeter - this.sideA) * (
        perimeter - this.sideB
      ) * (perimeter - this.sideC),
    ).toFixed(2);

    return +square;
  }
}

export class Circle {
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: Figure['form'],
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be <= 0');
    }

    this.color = color;
    this.radius = radius;
    this.shape = 'circle';
  }

  public getArea(): number {
    const area = Math.PI * (this.radius) ** 2;

    return +(Math.floor(area * 100) / 100);
  }
}

export class Rectangle {
  constructor(
    public color: Figure['color'],
    public sideA: number,
    public sideB: number,
    public shape: Figure['form'],
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('length cannot be <= 0');
    }

    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.shape = 'rectangle';
  }

  public getArea(): number {
    const area = this.sideA * this.sideB;

    return +area.toFixed(2);
  }
}

export function getInfo(
  figure: {
    color: Figure['color'],
    shape: Figure['form'],
    getArea: Function,
  },
): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
