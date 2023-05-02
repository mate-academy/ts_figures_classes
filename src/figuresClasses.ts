type FigureShape = 'triangle' |'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

function to2Numbers(num: number): number {
  return (Math.trunc(num * 100)) / 100;
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;

  getArea(): number;
}

export class Triangle {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const max = Math.max(sideA, sideB, sideC);
    const sum = sideA + sideB + sideC;

    if (max >= sum - max) {
      throw new Error('The largest side of the triangle'
      + 'must be less than the sum of the other two');
    }
  }

  getArea = (): number => {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC);

    return to2Numbers(Math.sqrt(area));
  };
}

export class Circle {
  shape: FigureShape = 'circle';

  constructor(public color: FigureColor, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea = (): number => {
    return to2Numbers((Math.PI * (this.radius ** 2)));
  };
}

export class Rectangle {
  shape: FigureShape = 'rectangle';

  constructor(public color: FigureColor, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Rectangle sides must be positive numbers');
    }
  }

  getArea = (): number => {
    return this.a * this.b;
  };
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
