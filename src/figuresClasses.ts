export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',

  getArea(): number
}

const anError = 'Invalid data.Value can\'t be less than 1.';
let area:number;

export class Triangle implements Figure {
  public shape: Figure.shape;

  constructor(
    public color: Figure.color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const isInvalidValue:boolean = this.a <= 0 && this.b <= 0 && this.c <= 0;

    if (isInvalidValue || this.a + this.b <= this.c
            || this.b + this.c <= this.a
            || this.c + this.a <= this.b) {
      throw new Error(anError);
    }
  }

  getArea():number {
    const sum = (this.a + this.b + this.c) / 2;

    area = Math.sqrt(sum * (sum - this.a)
          * (sum - this.b) * (sum - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Figure.shape;

  constructor(
    public color: Figure.color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error(anError);
    }
  }

  getArea():number {
    area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Figure.shape;

  constructor(
    public color: Figure.color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.height <= 0
            || this.width <= 0) {
      throw new Error(anError);
    }
  }

  getArea():number {
    area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
