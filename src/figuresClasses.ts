export interface Figure {
  shape: string
  color: string;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error('Invalid side');
    }

    if (this.side1 + this.side2 <= this.side3
      || this.side3 + this.side2 <= this.side1
      || this.side3 + this.side1 <= this.side2) {
      throw new Error('Invalid side');
    }
  }

  getArea(): number {
    const p = (this.side1 + this.side2 + this.side3) / 2;

    return Math.round(
      Math.sqrt(p
      * (p - this.side1)
      * (p - this.side2)
      * (p - this.side3))
      * 100,
    ) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (height <= 0) {
      throw new Error('Invalid height');
    }

    if (width <= 0) {
      throw new Error('Invalid width');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
