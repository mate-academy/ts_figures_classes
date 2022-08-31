
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const isValid = (...edges:number[]): boolean => {
  return edges.some((side) => side <= 0);
};

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (isValid(sideA, sideB, sideC)) {
      throw new Error('SIDE CAN\'T BE LESS THEN 0');
    }

    if (sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA) {
      throw new Error('SUM OF 2 SIDES CAN\'T BE GREATER THEN THIRD SIDE');
    }
  }

  getArea():number {
    const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));

    return Math.floor(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isValid(radius)) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public length: number,
  ) {
    if (isValid(width, length)) {
      throw new Error('SIDE MUST BE GREATER THAN 0');
    }
  }

  getArea():number {
    return this.length * this.width;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
