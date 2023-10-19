export interface Figure {
  shape:string,
  color:string,
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: string,
    public color: string,
    public a:number,
    public b:number,
    public c:number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Invalid triangle: sides ${a},`
      + `${b}, and ${c} cannot form a ${shape}`);
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semi * (semi - this.a)
    * (semi - this.b) * (semi - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public shape: string,
    public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle: radius must be greater than 0');
    }
  }

  getArea(): number {
    const square = Math.PI * (2 * this.radius);

    return Math.round(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public shape: string,
    public width: number,
    public height: number) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle:'
      + 'width and height must be greater than 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
