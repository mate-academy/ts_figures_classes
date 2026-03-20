export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';
  color: 'red' | 'blue' | 'green';

  private a: number;
  private b: number;
  private c: number;

  constructor (
    a: number,
    b: number,
    c: number,
    color :'red' | 'blue' | 'green',
  )
  {
    if (a <= 0 || b <= 0 || c <= 0){
        throw new Error('All sides must be > 0');
    }
    if (Math.max(a , b ,c ) >= a + b + c - Math.min(a , b ,c )){
       throw new Error('Invalid triangle');
    }
    this.a = a ;
    this.b = b;
    this.c = c;
    this.color = color;
  }
  getArea(): number {
    const p = (this.a + this.b + this.c) / 2 ;
    const area = Math.sqrt(p * (p- this.a ) * (p - this.b) * (p -this.c));
    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle'
   color: 'red' | 'blue' | 'green';

   private radius : number ;

   constructor(
    radius : number,
    color: 'red' | 'blue' | 'green';
   )
   {
    if (radius <= 0) {``
      throw new Error('Radius must be > 0');
    }

    this.radius = radius;
    this.color = color;
   }
   getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Number(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';
  color: 'red' | 'green' | 'blue';

  private width: number;
  private height: number;

   constructor(
    width: number,
    height: number,
    color: 'red' | 'green' | 'blue'
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be > 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;
    return Number(area.toFixed(2));
  }
}


export function getInfo(figure: Figure): string {
  return `${figure.shape} - ${figure.color} - area: ${figure.getArea()}`;
}

