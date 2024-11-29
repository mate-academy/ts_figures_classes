type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} must be greater than zero`);
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea = (): number => {
    const s: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.round(triangleArea * 100) / 100;
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`radius must be greater than zero`);
    }
  }

  public getArea = (): number => {
    const circleArea = Math.PI * Math.pow(this.radius, 2);

    return Math.trunc(circleArea * 100) / 100;
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`width and height must be greater than zero`);
    }
  }

  public getArea = (): number => {
    const rectangleArea = this.width * this.height;

    return Math.round(rectangleArea * 100) / 100;
  };
}

export function getInfo({ shape, color, getArea }: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
