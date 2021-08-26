export interface Figure {
  shape: string;
  color: string
  getArea(): number;
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
      throw new Error('Error');
    }

    if (this.x + this.y <= this.z
        || this.x + this.z <= this.y
        || this.z + this.y <= this.x
    ) {
      throw Error('Error');
    }
  }

  getArea(): number {
    const figurePerimeter = (this.x + this.y + this.z) / 2;
    const figureArea = Math.sqrt(
      figurePerimeter
      * (figurePerimeter - this.x)
      * (figurePerimeter - this.y)
      * (figurePerimeter - this.z),
    );

    return Number(figureArea.toFixed(2));
  }
}

export class Circle {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return +((this.radius ** 2) * 3.14).toFixed(2);
  }
}

export class Rectangle {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public x: number,
    public y: number,
  ) {
    this.shape = 'rectangle';

    if (this.x <= 0 || this.y <= 0) {
      throw Error('Error');
    }
  }

  getArea(): number {
    return this.x * this.y;
  }
}

export function getInfo(shape: Figure): string {
  return `A ${shape.color} ${shape.shape} - ${shape.getArea()}`;
}
