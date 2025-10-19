type Colors = 'blue' | 'red' | 'green';
type Shapes = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error(
        `Triangle sides must be > 0; received a=${x}, b=${y}, c=${z}`,
      );
    }

    if (z + y <= x || x + y <= z || x + z <= y) {
      throw new Error(`Sides ${x}, ${y} and ${z} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = 0.5 * (this.x + this.y + this.z);
    const exp = s * (s - this.x) * (s - this.y) * (s - this.z);

    return Math.floor(Math.sqrt(exp) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Circle radius must be > 0; received ${radius}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(
        `Rectangle width and height, must be > 0, received next values: width=${this.width} and height=${this.height}`,
      );
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
