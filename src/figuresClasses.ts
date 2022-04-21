type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';
type AreaFunc = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: AreaFunc;
}

function roundToHundreds(num: number): number {
  const stringifyed: string = String(num);

  if (stringifyed.indexOf('.') === -1) {
    return num;
  }

  return Number(stringifyed.slice(0, stringifyed.indexOf('.') + 3));
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
      throw new Error('Oly positve lenght sides accepted');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error('Not a triangle');
    }
  }

  getArea: AreaFunc = () => {
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToHundreds(area);
  };
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Positive value of radius required');
    }
  }

  getArea: AreaFunc = () => {
    const area = Math.PI * this.radius ** 2;

    return roundToHundreds(area);
  };
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Only positive lenght sides accepted');
    }
  }

  getArea: AreaFunc = () => {
    const area = this.width * this.height;

    return roundToHundreds(area);
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
