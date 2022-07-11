export interface Figure {
  shape:string,
  color:string,
  getArea():number,
}

export class Triangle implements Figure {
  a:number;

  b:number;

  c:number;

  shape:string;

  color:string;

  constructor(
    color:string,
    a:number,
    b:number,
    c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Zero value argument');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Invalid triangle sides');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea():number {
    const p:number = (this.a + this.b + this.c) / 2;

    return +Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle {
  radius:number;

  shape:string;

  color:string;

  constructor(color:string, radius:number) {
    if (radius <= 0) {
      throw new Error('Zero value argument');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea():number {
    const area = (this.radius ** 2) * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  width:number;

  height:number;

  shape:string;

  color:string;

  constructor(
    color:string,
    width:number,
    height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Zero value argument');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea():number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
