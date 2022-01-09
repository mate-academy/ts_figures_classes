export interface Figure {
  shape:string;
  color:string;
  getArea():number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color:string,
    public a:number,
    public b:number,
    public c:number,
  ) {
    const longest = Math.max(this.a, this.b, this.c);

    if (a <= 0 || b <= 0 || c <= 0 || longest >= a + b + c - longest) {
      throw new Error('Sides must be appropriate for creation of triangle');
    }

    this.color = color;
  }

  getArea():number {
    const halfOfPerimetr:number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      halfOfPerimetr
      * (halfOfPerimetr - this.a)
      * (halfOfPerimetr - this.b)
      * (halfOfPerimetr - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color:string,
    public radius:number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius must be more than 0');
    }
    this.color = color;
  }

  getArea():number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color:string,
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be more than 0');
    }
    this.color = color;
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
