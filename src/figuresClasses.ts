type FigureColor = 'red' | 'green' | 'blue';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: FigureColor,
  shape: FigureShape,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side length should be more then 0');
    }

    if (
      this.a >= (this.b + this.c)
      || this.b >= (this.a + this.c)
      || this.c >= (this.a + this.b)) {
      throw new Error('One should be less then sum of others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const areaWithoutRounding = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a) * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.round(areaWithoutRounding * 100) / 100;
  }
}

export class Circle {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more then 0');
    }
  }

  getArea(): number {
    return Math.round((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length should be more then 0');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
