enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    private aSide: number,
    private bSide: number,
    private cSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('Incorrect triangles sides');
    }

    const maxValue = Math.max(aSide, bSide, cSide);

    if (maxValue >= (aSide + bSide + cSide - maxValue)) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const sideLength = (this.aSide + this.bSide + this.cSide) / 2;
    const area = Math.sqrt(sideLength
      * (sideLength - this.aSide)
      * (sideLength - this.bSide)
      * (sideLength - this.cSide));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect circles radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect values sides');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
