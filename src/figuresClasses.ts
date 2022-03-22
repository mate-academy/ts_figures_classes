type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape:Shape;
  color:Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape:Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (this.a >= (this.b + this.c)
    || this.b >= (this.a + this.c)
    || this.c >= (this.b + this.a)) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('one of sides === 0');
    }
  }

  getArea():number {
    const s:number = (this.a + this.b + this.c) / 2;
    const area:number = Math.sqrt(s * ((s - this.a)
    * (s - this.b)
    * (s - this.c)));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape:Shape = 'circle';

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius < 0) {
      throw new Error('Radius cant be less then 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Args cant be less then 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
