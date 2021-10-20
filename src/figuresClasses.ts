export interface Figure {
  color: string;
  square: number;
  shape: string,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  public square: number;

  constructor(
    public color: string,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (this.x <= 0 || this.y <= 0 || this.z <= 0) {
      throw new Error('this is not a figure');
    }

    if (this.x + this.y <= this.z) {
      throw new Error('your error message');
    }

    const p: number = (this.x + this.y + this.z) / 2;

    this.square = (p * (p - this.x) * (p - this.y) * (p - this.z)) ** (1 / 2);

    this.square = Math.round(this.square * 100) / 100;
  }

  getArea(): number {
    return this.square;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  public square: number;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('sdfasdf');
    }

    this.square = Math.PI * this.radius ** 2;

    this.square = +this.square.toFixed(3).replace(/.$/, '');
  }

  getArea(): number {
    return this.square;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  public square: number;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }

    this.square = this.width * this.height;

    this.square = Math.round(this.square * 100) / 100;
  }

  getArea(): number {
    return this.square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.square}`;
}
