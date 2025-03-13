export interface Figure {
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public oneSide: number,
    public secondSide: number,
    public thirdSide: number,
  ) {
    if (this.oneSide <= 0 || this.secondSide <= 0 || this.thirdSide <= 0) {
      throw new Error('Sides must be greater than 0.');
    }

    if (
      this.oneSide + this.secondSide <= this.thirdSide ||
      this.oneSide + this.thirdSide <= this.secondSide ||
      this.secondSide + this.thirdSide <= this.oneSide
    ) {
      throw new Error('These sides cannot form a triangle.');
    }
  }

  getArea(): number {
    const s = (this.oneSide + this.secondSide + this.thirdSide) / 2;
    const area = Math.sqrt(
      s * (s - this.oneSide) * (s - this.secondSide) * (s - this.thirdSide),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
