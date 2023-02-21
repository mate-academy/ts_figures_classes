type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
}

function validSquare(square: number): number {
  return Math.trunc(square * 100) / 100;
}

function negativeCheck(value: number): void {
  if (value <= 0) {
    throw new Error('The figure`s values should be more than 0');
  }
}
export class Triangle implements Figure {
  constructor(
    public color: Color,
    public firstSide: number,
    public secondSide: number,
    public thirdSide: number,
    public shape = Shape.Triangle,
  ) {
    negativeCheck(firstSide);
    negativeCheck(secondSide);
    negativeCheck(thirdSide);

    const maxValue = Math.max(firstSide, secondSide, thirdSide);
    const sumWithoutmaxValue = firstSide + secondSide + thirdSide - maxValue;

    if (maxValue >= sumWithoutmaxValue) {
      throw new Error(`The longest side of a triangle 
        shouldn't be less than a sum of two others`);
    }
  }

  getArea(): number {
    const halfPerimeter
      = (this.firstSide + this.secondSide + this.thirdSide) / 2;
    const doubleValue
      = halfPerimeter * (halfPerimeter - this.firstSide)
      * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide);

    return validSquare(Math.sqrt(doubleValue));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape = Shape.Circle,
  ) {
    negativeCheck(radius);
  }

  getArea(): number {
    return validSquare(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.Rectangle,
  ) {
    negativeCheck(width);
    negativeCheck(height);
  }

  getArea(): number {
    return validSquare(this.width * this.height);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
