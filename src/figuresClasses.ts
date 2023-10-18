type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public z: number,
  ) {
    const isLessthenOne = x <= 0 || y <= 0 || z <= 0;
    const isUnvalidX = x >= y + z;
    const isUnvalidY = y >= x + z;
    const isUnvalidZ = z >= x + y;

    if (isLessthenOne || isUnvalidX || isUnvalidY || isUnvalidZ) {
      throw new Error('Some of the values is not valid');
    }
  }

  getArea(): number {
    const s = (this.x + this.y + this.z) / 2;
    const result = Math.sqrt(s * ((s - this.x) * (s - this.y) * (s - this.z)));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public x: number,
  ) {
    const isLessthenOne = x <= 0;

    if (isLessthenOne) {
      throw new Error('Some of the values is not valid');
    }
  }

  getArea(): number {
    return Math.floor((this.x * this.x * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public x: number,
    public y: number,
  ) {
    const isLessthenOne = x <= 0 || y <= 0;

    if (isLessthenOne) {
      throw new Error('Some of the values is not valid');
    }
  }

  getArea(): number {
    return (this.x * this.y);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
