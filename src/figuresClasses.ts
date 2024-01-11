type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea():number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid figure. (side <= 0 )');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Invalid figure.(the longest side >= sum of two others)');
    }
  }

  getArea(): number {
    const p:number = 1 / 2 * (this.a + this.b + this.c);
    const area:number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle. (radius <= 0 )');
    }
  }

  getArea(): number {
    const area:number = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid figure. (side <= 0 )');
    }
  }

  getArea(): number {
    const area:number = Math.floor(this.a * this.b * 100) / 100;

    return area;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
