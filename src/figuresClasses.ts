type Shape = 'rectangle' | 'circle' | 'triangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides can`t be under 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side can`t be bigger, than sum of other 2 sides');
    }
  }

  getArea(): number {
    const side = (this.a + this.b + this.c) / 2;
    const sqrt = Math.sqrt(side * (side - this.a) * (side - this.b)
     * (side - this.c));

    return Math.floor(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can`t be under 0');
    }
  }

  getArea(): number {
    const sqrt:number = Math.PI * (this.radius * this.radius);

    return Math.floor(sqrt * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Sides can`t be under 0');
    }
  }

  getArea(): number {
    const sqrt:number = this.height * this.width;

    return Math.floor(sqrt * 100) / 100;
  }
}

export function getInfo(figure: Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
