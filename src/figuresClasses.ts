type Shape = 'triangle'| 'circle'| 'rectangle';
type Color = 'red'| 'green' | 'blue';

const round = (number: number):number => +number.toFixed(2);

export interface Figure {
  shape : Shape,
  color : Color,
  getArea():number
}

export class Triangle implements Figure {
  shape:Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB:number,
    public sideC:number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error();
    }

    if (sideA >= sideB + sideC
        || sideB >= sideA + sideC
        || sideC >= sideA + sideB) {
      throw new Error(
        `sides ${sideA}, ${sideB} and ${sideC} can't form a triangle`,
      );
    }
  }

  getArea():number {
    const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return round((halfPerimeter
      * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB)
      * (halfPerimeter - this.sideC)) ** 0.5);
  }
}

export class Circle implements Figure {
  shape:Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea():number {
    return round(3.14 * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape:Shape = 'rectangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB:number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error();
    }
  }

  getArea():number {
    return round(this.sideA * this.sideB);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
