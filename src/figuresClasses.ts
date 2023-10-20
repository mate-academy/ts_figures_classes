type Color = 'blue' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArr = [this.a, this.b, this.c];
    const maxValue = Math.max(...sidesArr);
    const maxValueIndex = sidesArr.indexOf(maxValue);

    sidesArr.splice(maxValueIndex, 1);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || maxValue >= sidesArr.reduce((acc, curr) => acc + curr, 0)) {
      throw new Error('open your eyes');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('open your eyes');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
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
      throw new Error('open your eyes');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Circle | Rectangle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
