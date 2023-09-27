type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
    public shape: Shape = 'triangle',
  ) {
    const bigestSide: number[] = [a, b, c];

    bigestSide.sort((x, y) => y - x);

    if (a < 1 || b < 1 || c < 1) {
      throw new Error('The radius length can\'t be less than 1');
    }

    if (bigestSide[0] >= bigestSide[1] + bigestSide[2]) {
      throw new Error('Sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const firstSide: number = this.a;
    const secondSide: number = this.b;
    const thirdSide: number = this.c;

    const semiPerimetr: number = (firstSide + secondSide + thirdSide) / 2;
    const firstSideDif: number = semiPerimetr - firstSide;
    const secondSideDif: number = semiPerimetr - secondSide;
    const thirdSideDif: number = semiPerimetr - thirdSide;

    const area: number = Math.sqrt(
      semiPerimetr * firstSideDif * secondSideDif * thirdSideDif,
    );

    if (area % 1 === 0) {
      return area;
    }

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    private radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius < 1) {
      throw new Error('The radius length an\'t be less than 1');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    if (area % 1 === 0) {
      return area;
    }

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    private width: number,
    private height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width < 1 || height < 1) {
      throw new Error('The side length an\'t be less than 1');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    if (area % 1 === 0) {
      return area;
    }

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
