type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error('Sides of the triangle must be > 0');
    }

    const sides = [this.side1, this.side2, this.side3];
    const longestSide = Math.max(...sides);
    const perimeter = this.side1 + this.side2 + this.side3;
    const isValidTriangle = perimeter - longestSide <= longestSide;

    if (isValidTriangle) {
      throw new Error('Side1 + Side2 should be greater than Side3');
    }
  }

  getArea(): number {
    const p = (this.side1 + this.side2 + this.side3) / 2;

    return Math.floor(
      Math.sqrt(p * (p - this.side1)
      * (p - this.side2) * (p - this.side3)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be > 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('width and height should be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
