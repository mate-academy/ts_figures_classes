export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error('Side length has to be grater than 0');
    }

    const longestSide = Math.max(this.x, this.y, this.z);
    const sumOfSides = this.x + this.y + this.z;

    if (sumOfSides - longestSide === longestSide) {
      throw new Error('These three sides cannot make a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.x + this.y + this.z) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.x)
      * (semiPerimeter - this.y)
      * (semiPerimeter - this.z),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius has to be grater than 0');
    }
  }

  getArea(): number {
    return Number(
      (Math.PI * this.r ** 2).toFixed(2),
    );
  }
}

export class Rectangle {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public h: number,
    public w: number,
  ) {
    if (h <= 0 || w <= 0) {
      throw new Error('Side length has to be grater than 0');
    }
  }

  getArea(): number {
    return Number(
      (this.h * this.w).toFixed(2),
    );
  }
}

export function getInfo(shape: Figure): string {
  return `A ${shape.color} ${shape.shape} - ${shape.getArea()}`;
}
