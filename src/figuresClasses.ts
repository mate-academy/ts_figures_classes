type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error('Dimension must be > 0');
    }

    const max = Math.max(x, y, z);
    const sumOther = x + y + z - max;

    if (max >= sumOther) {
      throw new Error(`Sides ${x}, ${y} and ${z} can't form a triangle`);
    }
  }

  public getArea(): number {
    const s = (this.x + this.y + this.z) / 2;
    const area = Math.sqrt(s * (s - this.x) * (s - this.y) * (s - this.z));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be > 0');
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
