type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arr = [a, b, c].sort((prev, next) => next - prev);

    if (a <= 0 || b <= 0 || c <= 0 || arr[0] >= arr[1] + arr[2]) {
      throw new Error('your error message');
    }
  }

  shape: Shape = 'triangle';

  getArea = ():number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return +area.toFixed(2);
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  shape: Shape = 'circle';

  getArea = ():number => {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  shape: Shape = 'rectangle';

  getArea = ():number => {
    return this.height * this.width;
  };
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
