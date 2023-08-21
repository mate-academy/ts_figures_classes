export interface Figure {
    shape: 'triangle' | 'circle' | 'rectangle';
    color: 'red' | 'green' | 'blue';
    getArea(): number;
  }
  
  export class Triangle implements Figure {
    constructor(
      public color: Figure['color'],
      public a: number, 
      public b: number,
      public c: number,
      public shape: Figure['shape'] = 'triangle') {
      if (a >= b + c || b >= a + c || c >= a + b
          || a <= 0 || b <= 0 || c <= 0) {
        throw new Error('Sides must be greater than 0');
          }}

    getArea() {
      const s = (this.a + this.b + this.c) / 2;
      return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100; 
        }
  }
        
  export class Circle implements Figure {
    constructor(
      public color: Figure['color'],
      public r: number, 
      public shape: Figure['shape'] = 'circle') {
      if (r <= 0) {
        throw new Error('Radius must be greater than 0');
      }
    }
    getArea() {
        return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
      }  
  }

  export class Rectangle implements Figure {
    constructor(
      public color: Figure["color"],
      public a: number, 
      public b: number,
      public shape: Figure['shape'] = 'rectangle') {
      if (a <= 0 || b <= 0) {
        throw new Error('Width and height must be greater than 0');
      }
  }
  
  getArea() {
       return this.a * this.b;
     }
  }

  export function getInfo(figure: Figure): string {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }
