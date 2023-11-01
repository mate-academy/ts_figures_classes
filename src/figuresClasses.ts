export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type ColorType = 'red' | 'green' | 'blue';
type ShapeType = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  color: ColorType;

  constructor(
    color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides');
    }

    const perimeter = a + b + c;
    const biggestSide = Math.max(a, b, c);

    if (perimeter - biggestSide <= biggestSide) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return parseFloat(Math
      .sqrt(halfPerimeter
        * (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  color: ColorType;

  constructor(color: ColorType, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    return +(
      Math.floor(Math.PI * this.radius * this.radius * 100) / 100
    ).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  color: ColorType;

  constructor(
    color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
    this.color = color;
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
