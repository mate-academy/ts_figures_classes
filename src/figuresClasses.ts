export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea():number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ){}

  getArea(): number {
    if(this.a <=0 || this.b <= 0 || this.c <= 0) { 
      throw new Error('Each side of triangle should be > 0')
    }
    if((this.a + this.b) <= this.c || (this.a + this.c) <= this.b || (this.b + this.c) <= this.a){
      throw new Error('It\'s not triangle');
    }
    let s = (this.a+this.b+this.c)/2
    let area= Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
    return Math.floor(area*100)/100;
  }
}

export class Circle implements Figure {
  shape: 'circle'= 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number
  ){} 

  getArea(): number{
    if(this.radius <=0 ) { 
      throw new Error('Radius should be > 0')
    }
    let circleRadius = Math.PI * this.radius **2;

    return Math.floor(circleRadius*100)/100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle'= 'rectangle';
  constructor (
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number
  ){}

  getArea(): number{

    if(this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    return Math.floor((this.width * this.height)*100)/100;
  }
}

export function getInfo(figure: Figure): string {
  return 'A '+ figure.color +' '+ figure.shape + ' - '+ figure.getArea();
}
