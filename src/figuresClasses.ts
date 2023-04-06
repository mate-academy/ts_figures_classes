type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
    shape: Shape = 'triangle';

    constructor(
      public color: Color,
      public a: number,
      public b: number,
      public c: number,
    ) {
        if (a <= 0
          || b <= 0
          || c <= 0
          || a >= b + c
          || b >= a + c
          || c >= a + b) {
          throw new Error('Invalid params');
        }
  
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getArea(): number {
      const semiperimeter: number = (this.a + this.b + this.c) / 2;
      const area: number = Math.sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c));
  
      return Number(area.toFixed(2));
    }
  }
  
  export class Circle implements Figure {
    shape: Shape = 'circle';
  
    constructor(
      public color: Color,
      public radius: number,
    ) {
  
      if (radius <= 0) {
        throw new Error('Invalid params');
      }
    }
  
    getArea(): number {
        return Math.floor((Math.PI * (this.radius * this.radius)) * 100) / 100;
    }
  }
  
  export class Rectangle implements Figure {
    shape: Shape = 'rectangle';
  
    constructor(
      public color: Color,
      public width: number,
      public height: number,
    ) {
      if (width <= 0 || height <= 0) {
        throw new Error('Invalid params');
      }
    }
  
    getArea(): number {
      return this.height * this.width;
    }
  }
  
  export function getInfo(figure: Figure): string {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }