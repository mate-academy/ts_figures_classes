// import { getTypeParameterOwner } from "typescript";

export interface Figure {
  shape : 'triangle' | 'circle' | 'rectangle';
  getArea() : number;
}

function round(numb : number) : number {
  return Math.floor(numb * 100) / 100;
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  public shape : 'triangle';

  constructor(
    public color : Color,
    public a : number,
    public b : number,
    public c : number,
  ) {
    this.color = color;
    this.shape = 'triangle';

    const max = [a, b, c].sort((sideA, sideB) => sideB - sideA);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not a triangle!');
    }

    if (max[0] >= (max[1] + max[2])) {
      throw new Error('Not a triangle!');
    }
  }

  getArea() :number {
    const semi = round((this.a + this.b + this.c) / 2);

    const notSqrt = (
      semi * (semi - this.a) * (semi - this.b) * (semi - this.c)
    );

    return round(Math.sqrt(notSqrt));
  }
}

export class Circle {
  public shape: 'circle';

  constructor(
    public color : Color,
    public a : number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (a <= 0) {
      throw new Error('Not a circle!');
    }
  }

  getArea() : number {
    return round((this.a * this.a) * Math.PI);
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: Color,
    public a : number,
    public b : number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0) {
      throw new Error('Not a rectangle!');
    }
  }

  getArea() : number {
    return round(this.a * this.b);
  }
}

export function getInfo(figure) : string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
