enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): Object;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (this.x <= 0 || this.y <= 0 || this.z <= 0) {
      throw new Error('size less than 0');
    }

    if (
      (this.x >= this.y + this.z)
      || (this.y >= this.x + this.z)
      || (this.z >= this.y + this.x)
    ) {
      throw new Error('such a triangle does not exist');
    }
  }

  getArea(): number {
    const halfArea: number = (this.x + this.y + this.z) / 2;
    const area: number = (
      halfArea
      * (halfArea - this.x)
      * (halfArea - this.y)
      * (halfArea - this.z)
    ) ** (1 / 2);

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('size less than 0');
    }
  }

  getArea(): number {
    return +(3.14 * (this.radius) ** 2).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('size less than 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
