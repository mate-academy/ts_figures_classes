type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
 
export interface Figure {
  color: Color;
  shape: Shape;
  

  getArea(): number;
} 

export class Triangle implements Figure {
  public shape : Shape = 'triangle'
  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    
    if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
      throw new Error("sides 1, 2 and 3 can't form a trianglealid triangle sides");
    }
    
    if (a <= 0 || b <= 0 || c <= 0) { 
      throw new Error('Triangle sides must be positive numbers.'); 

    } 
    }
  
  getArea(): number {
    const s: number = +((this.a + this.b + this.c) / 2).toFixed(2);
    return parseFloat((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(2));
  } 
}

export class Circle implements Figure {
  public shape: Shape = 'circle'
  constructor(
    public color: Color,
    public radius: number = 0,
    ) { 
    if (radius <=0 ) { 
      throw new Error();
    }
    }
  
  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle'
  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
    ) { 
    if (width <= 0 || height <= 0 ) { 
      throw new Error();
    }
    }
  
  getArea(): number {
    return  +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
