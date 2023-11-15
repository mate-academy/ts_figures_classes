export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color:string,
    public a: number,
    public b:number,
    public c:number,
  ) {
    if (Math.max(a, b, c) >= Math.min(a, b, c)
    + [a, b, c].filter((item) => item !== Math.max(a, b, c)
    && item !== Math.min(a, b, c))[0]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color:string,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error(`Radius ${a} can't form a circle`);
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.a * this.a) * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color:string,
    public a: number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Sides ${a} and ${b} can't form a rectangle`);
    }
  }

  getArea():number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
