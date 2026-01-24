
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;

}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ) {


    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers');
    }

    const maxSide = Math.max(a, b, c);
    if (maxSide >= (a + b + c - maxSide)) {
      throw new Error('The provided sides cannot form a valid triangle.');
    }
    }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c)
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor (
    public color: 'red' | 'green' | 'blue',
    public radius: number) {

      if (radius <= 0) {
         throw new Error('The radius must be a positive number.');
      }
  }

  getArea(): number {
     const area = this.radius ** 2 * Math.PI;
     return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:  "rectangle" = 'rectangle';

  constructor (
   public color: 'red' | 'green' | 'blue',
   public width: number,
   public height: number,
  ) {
     if (width <= 0 ||  height <= 0) {
      throw new Error('All rectangle sides must be positive numbers');
    }

  }

  getArea(): number {
    const area = this.height * this.width;
    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
