export interface Figure {
  color: 'red' | 'green' | 'blue',
  shape: string, // 'triangle' | 'circle' | 'rectangle'
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
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

    const triangleArea: number = Math.round(areaWithoutRounding * 100) / 100;

    return triangleArea;
  }
}

export class Circle {
  shape: string = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more then 0');
    }
  }

  getArea(): number {
    const circleArea: number
      = (Math.round((Math.PI * this.radius * this.radius) * 100)) / 100;

    return circleArea;
  }
}

export class Rectangle {
  shape: string = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length should be more then 0');
    }
  }

  getArea(): number {
    const rectangleArea: number
      = Math.round(this.width * this.height * 100) / 100;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
