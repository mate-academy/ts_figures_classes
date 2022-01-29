export interface Figure {
  shape:string;
  color:string;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides can`t be equal or less then zero');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('sides parameters are not valid');
    }
  }

  getArea(): number {
    const summ = this.a + this.b + this.c;

    return +Math.sqrt(summ / 2
      * (summ / 2 - this.a)
      * (summ / 2 - this.b)
      * (summ / 2 - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is not valid');
    }
  }

  getArea():number {
    return Math.floor((this.radius ** 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width or height can not be 0 or negative');
    }
  }

  getArea():number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
