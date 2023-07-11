type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle'
  color: Color
  getArea: () => number
}
enum FigureForm {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

function trianglePossible(a:number, b:number, c:number) : boolean {
  if (a === 0 || b === 0 || c === 0) {
    return true;
  }

  const arr = [a, b, c];
  const sortArr: number[] = arr.sort((prev, next) => prev - next);

  if (sortArr[2] >= arr[0] + arr[1]) {
    return true;
  }

  return false;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (trianglePossible(this.a, this.b, this.c)) {
      throw new Error('its not triangle');
    }
  }

  getArea(): number {
    const halfP: number = (this.a + this.b + this.c) / 2;
    const S : number = Math.sqrt(halfP
      * ((halfP - this.a) * (halfP - this.b) * (halfP - this.c)));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('its not circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('its not rectangle');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case FigureForm.Circle:
      return `A ${figure.color} circle - ${figure.getArea()}`;
    case FigureForm.Triangle:
      return `A ${figure.color} triangle - ${figure.getArea()}`;
    case FigureForm.Rectangle:
      return `A ${figure.color} rectangle - ${figure.getArea()}`;
    default:
      return '';
  }
}
