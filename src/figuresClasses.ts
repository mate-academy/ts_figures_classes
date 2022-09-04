export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a >= b + c || b >= a + c || c >= a + b || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error: can not create triangle with such data!!!');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a)
     * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error: radius must be greater than 0!!!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error: width && height must be greater then 0!!!');
    }
  }

  getArea(): number {
    return (this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
