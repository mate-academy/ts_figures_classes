type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("One of the figure's sides is less than or equal to 0");
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter * ((semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)),
    );
    const aroundArea = Math.floor(area * 100) / 100;

    return aroundArea;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public a: number) {
    if (a <= 0) {
      throw new Error("One of the figure's sides is less than or equal to 0");
    }
  }

  getArea(): number {
    const area = this.a * this.a * Math.PI;
    const aroundArea = Math.floor(area * 100) / 100;

    return aroundArea;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(public color: Color, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error("One of the figure's sides is less than or equal to 0");
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
