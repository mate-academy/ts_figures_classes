type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Error message');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) * 0.5;
    const area = Math.floor(Math.sqrt(s
      * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape= 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const area = Math.floor((this.width * this.height) * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const information = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return information;
}
