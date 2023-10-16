type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
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
      throw new Error('invalid length');
    }

    if (Math.max(x, y, z) * 2 >= x + y + z) {
      throw new Error(' sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const sp = (this.x + this.y + this.z) / 2;

    return Math.floor(Math
      .sqrt(sp * (sp - this.x) * (sp - this.y) * (sp - this.z)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid length');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    public x: number,
    public y: number,
  ) {
    if (x <= 0 || y <= 0) {
      throw new Error('invalid length');
    }
  }

  getArea(): number {
    return +Math.floor(this.x * this.y).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
