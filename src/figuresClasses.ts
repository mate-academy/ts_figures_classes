type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `All sides of a triangle must be greater than zero. ` +
          `Given sides: a=${a}, b=${b}, c=${c}`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The sides ${a}, ${b}, and ${c} cannot form a valid triangle`,
      );
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
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `The radius of a circle must be greater than zero. ` +
          `Given radius: ${radius}`,
      );
    }
  }

  public getArea = (): number => {
    const circleArea = Math.PI * Math.pow(this.radius, 2);

    return Math.trunc(circleArea * 100) / 100;
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
      throw new Error(
        `The width and height of a rectangle must be greater than zero. ` +
          `Given width: ${width}, height: ${height}`,
      );
    }
  }

  public getArea = (): number => {
    const rectangleArea = this.width * this.height;

    return Math.round(rectangleArea * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  const area = parseFloat(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
