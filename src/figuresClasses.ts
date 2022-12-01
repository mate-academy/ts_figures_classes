type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'green' | 'red' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error(
        'Check the size of sides, they must be positive'
        + 'or sides don\'t satisfy the triagle condition',
      );
    }
  }

  getArea(): number {
    const s:number = (this.a + this.b + this.c) / 2;
    const square: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(square.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius:number,
  ) {
    this.shape = 'circle';

    if ((radius <= 0)) {
      throw new Error('Check the size of the radius, it must be positive');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width:number,
    public height:number,
  ) {
    this.shape = 'rectangle';

    if ((width <= 0 || height <= 0)) {
      throw new Error('Check the size of the sides, they must be positive');
    }
  }

  getArea(): number {
    const square:number = this.width * this.height;

    return Number(square.toFixed(2));
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
