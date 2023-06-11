type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isTriangle(side1: number, side2: number, side3: number): boolean {
  const sortedSides = [side1, side2, side3].sort((a, b) => a - b);

  return (sortedSides[0] + sortedSides[1]) <= sortedSides[2];
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0 || b <= 0 || c <= 0
      || isTriangle(a, b, c)
    ) {
      throw Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw Error('Radius cannot be less or equal zero');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public width:number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw Error('Both sides should be greater zero');
    }
  }

  getArea():number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
