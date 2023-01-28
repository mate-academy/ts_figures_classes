enum Shape {
  triangle = 'triangle',
  rectangle = 'rectangle',
  circle = 'circle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export function rounded(area: number): number {
  let areaFixed = area;

  if (areaFixed !== +areaFixed.toFixed(3)) {
    areaFixed = +areaFixed.toFixed(3).slice(0, -1);
  }

  return areaFixed;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public firstSide: number,
    public secondSide: number,
    public thirdSide: number,
  ) {
    const sortSide = [firstSide, secondSide, thirdSide].sort((a, b) => a - b);
    const [a, b, c] = sortSide;

    if (a + b <= c) {
      throw new Error(
        `throws an error: sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const pArea = (this.firstSide
      + this.secondSide + this.thirdSide) / 2;
    const area: number = Math.sqrt(pArea * (pArea - this.firstSide)
    * (pArea - this.secondSide) * (pArea - this.thirdSide));

    return rounded(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public firstSide: number,
    public secondSide: number,
  ) {
    if (firstSide <= 0 || secondSide <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    const area = this.firstSide * this.secondSide;

    return rounded(area);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public hight: number,
  ) {
    if (hight <= 0) {
      throw new Error(`throws an error: hight cant be ${hight}`);
    }
  }

  getArea(): number {
    const area = this.hight * this.hight * Math.PI;

    return rounded(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
