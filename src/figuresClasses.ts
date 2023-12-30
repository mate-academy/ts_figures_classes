export interface Figure {
  shape: string;
  color:string;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: string = 'triangle',
    public color: string,
    public a: number,
    public b: number,
    public c: number) {
      if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error('All sides of the triangle must be greater than 0');
      }

      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Invalid triangle sides: the sum of any two sides'
         + 'must be greater than the third side');
      }
    }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    return Math.sqrt(semiperimeter
       * (semiperimeter - this.a)
       * (semiperimeter - this.b)
       * (semiperimeter - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public shape: string = 'circle',
    public color: string,
    public radius: number) {
      if (radius <= 0) {
        throw new Error('Radius of the circle must be greater than 0');
      }
    }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

}

export class Rectangle implements Figure {
  constructor(
    public shape: string = 'rectangle',
    public color: string,
    public width: number,
    public height: number) {
      if (width <= 0 || height <= 0) {
        throw new Error('Width and height of the rectangle must be greater than 0');
      }
    }

    getArea(): number {
      return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
