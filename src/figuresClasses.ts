enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape:Shape,
  color:Color,
  getArea:() => number
}

export class Triangle implements Figure {
  shape:Shape = Shape.triangle;

  constructor(
    public color:Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideC <= 0 || sideB <= 0 || sideA <= 0) {
      throw Error('cant form triangle');
    }

    if (sideC >= sideA + sideB
    || sideB >= sideA + sideC
    || sideA >= sideB + sideC) {
      throw Error('cant form triangle');
    }
  }

  getArea():number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const heron = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.floor(heron * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw Error('cant form circle');
    }
  }

  getArea():number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Shape = Shape.rectangle;

  constructor(
    public color:Color,
    public sideA:number,
    public sideB:number,
  ) {
    if (sideB <= 0 || sideA <= 0) {
      throw Error('cant form rectangle');
    }
  }

  getArea():number {
    const square = this.sideA * this.sideB;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
