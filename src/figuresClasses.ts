type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;

  getArea: ()=> number | Error
}

export class Triangle implements Figure {
  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
    public shape: ShapeType = 'triangle',
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || c + b <= a
    ) {
      throw new Error('The parameters for building the figure are not correct');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const aSemi = (semiP - this.a);
    const bSemi = (semiP - this.b);
    const cSemi = (semiP - this.c);
    const areaTriangle = (semiP * aSemi * bSemi * cSemi) ** 0.5;

    return Math.round((areaTriangle) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorType,
    public radius: number,
    public shape: ShapeType = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('The parameters for building the figure are not correct');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
    public shape: ShapeType = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The parameters for building the figure are not correct');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
