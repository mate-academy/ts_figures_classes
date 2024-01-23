export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color:'red' | 'green' | 'blue',
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Invalid values: must be greater than 0',
      );
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'Invalid triangle sides',
      );
    }
  }

  getArea():number {
    const s: number = (this.a + this.b + this.c) / 2;

    return parseFloat((
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color:'red' | 'green' | 'blue',
    public a:number,
  ) {
    if (a <= 0) {
      throw new Error(
        'Invalid radius: must be greater than 0',
      );
    }
  }

  getArea():number {
    const resValue:number = Math.floor(100 * Math.PI * this.a ** 2) / 100;

    return resValue;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color:'red' | 'green' | 'blue',
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(
        'Invalid values: must be greater than 0',
      );
    }
  }

  getArea():number {
    const resValue:number = this.a * this.b;

    return resValue;
  }
}

export function getInfo(figure:Figure): string {
  const result: string
   = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
