type Color = 'red' | 'blue' | 'green';
type Shape = 'circle' | 'rectangle' | 'triangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundNum(num : number) :number {
  return Math.floor(num * 100) / 100;
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cant be 0 or less');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundNum(area);
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
      throw new Error('side cant be 0 or less');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundNum(area);
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side cant be less, than 0');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('One side cant be bigger than sum of other 2');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
    * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return roundNum(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
