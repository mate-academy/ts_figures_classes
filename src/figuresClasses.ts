type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';


export interface Figure {
  shape:  Shape,
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('any length can not be lower or equal zero');
    }

    if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
      throw new Error('the longest side can not be bigger or equal a sum of two other')
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(Math.sqrt(s *(s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100
    ); 
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('`radius` can not be lower or equal zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  constructor(
    public color: Color,
    private width: number,
    private height: number
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('any length can not be lower or equal zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
