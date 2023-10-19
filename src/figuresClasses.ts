type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: FigureColor,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0
      || sideB <= 0
      || sideC <= 0
    ) {
      throw new Error('some side <= 0');
    }

    if (sideA >= (sideB + sideC)
      || sideB >= (sideA + sideC)
      || sideC >= (sideB + sideA)
    ) {
      throw new Error('some side >= sum others');
    }
  }

  getArea(): number {
    const semiPerim = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(((semiPerim
      * (semiPerim - this.sideA)
      * (semiPerim - this.sideB)
      * (semiPerim - this.sideC)) ** 0.5)
      * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius <= 0');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0
      || height <= 0
    ) {
      throw new Error('width or height <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
