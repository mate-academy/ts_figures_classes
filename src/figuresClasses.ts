type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: 'red' | 'green' | 'blue',
  // width: number;
  // height: number;
  // radius: number;
  // a: number;
  // b: number;
  // c: number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a < 0) || (b < 0) || (c < 0)
    || (a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);
    const heronsFormula = (semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c)) ** 0.5;

    return Math.floor(heronsFormula * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * (Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if ((width < 0) || (height < 0)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Number(this.width * this.height);
  }
}
// export class Rectangle implements Figure {
//   shape: Shape = 'rectangle';

//   constructor(
//     public color: 'red' | 'green' | 'blue',
//     public width: number,
//     public height: number,
//   ) {
//     if ((width < 0) || (height < 0)) {
//       throw new Error('your error message');
//     }
//   }

//   getArea(): number {
//     return Number(this.width * this.height);
//   }
// }

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
