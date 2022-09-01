function MathFloor(value: number): number {
  return Math.floor(value * 100) / 100;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public SideA: number,
    public SideB: number,
    public SideC: number,
  ) {
    if (this.SideA <= 0 || this.SideB <= 0 || this.SideC <= 0) {
      throw new Error('Side length can`t be 0');
    }

    if (this.SideA + this.SideB <= this.SideC
      || this.SideB + this.SideC <= this.SideB
      || this.SideC + this.SideB <= this.SideA) {
      throw new Error('Longest side can`t be less than sum of two other sides');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.SideA + this.SideB + this.SideC) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.SideA)
      * (semiPerimeter - this.SideB)
      * (semiPerimeter - this.SideC),
    );

    return MathFloor(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius of circle can`t be 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return MathFloor(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side length can`t be 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return MathFloor(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
