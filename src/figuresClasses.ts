type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundDown(num: number):number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const longSide
      = ((sideA + sideB + sideC) - Math.max(sideA, sideB, sideC))
        - Math.max(sideA, sideB, sideC);

    if (sideA <= 0 || sideB <= 0 || sideC <= 0 || longSide <= 0) {
      throw new Error('Wrong data of triangle!');
    }
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong circle data!');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong data for rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return roundDown(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
