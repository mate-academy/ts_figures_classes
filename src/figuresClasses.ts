type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public readonly color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0|| b <= 0 ||  c <= 0) {
      throw new Error('your error message');
    }

    const maxTriangle = Math.max(a, b, c);

    if (maxTriangle >= a + b + c - maxTriangle) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const areaTriangle = (this.a + this.b + this.c) / 2;

    return Math.sqrt(areaTriangle * (areaTriangle - this.a) * (areaTriangle - this.b) * (areaTriangle - this.c));
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const radiusCircle = Math.PI * this.radius ** 2;

    return Math.floor(radiusCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  let area = figure.getArea();
  area = Math.round(area * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
