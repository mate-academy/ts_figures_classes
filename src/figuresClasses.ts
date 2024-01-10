export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.b <= 0) {
      throw new Error(
        'one or more of the sides equals 0, can not build the triangle',
      );
    }

    const arrTriangleSides = [];

    arrTriangleSides.push(this.a, this.b, this.c);
    arrTriangleSides.sort((side1, side2) => side2 - side1);

    if (arrTriangleSides[0] >= arrTriangleSides[1] + arrTriangleSides[2]) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const arrTriangleSides = [];

    arrTriangleSides.push(this.a, this.b, this.c);

    const semiP = arrTriangleSides.reduce((acc, side) => acc + side, 0) / 2;

    const areaOfCircle = Math.sqrt(semiP * (semiP - this.a)
      * (semiP - this.b) * (semiP - this.c));

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,

  ) {
    if (this.radius <= 0) {
      throw new Error('incorrect radius length, not existing circle');
    }
  }

  getArea(): number {
    const areaOfCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public heigth: number,

  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('incorrect side(s) length, can not build rectangle');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.heigth * this.width;

    return Math.floor(areaOfRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
