export interface Figure {
  shape: string;
  color: string;
  getArea(): void;
}

function checkFigure(figureType: string, ...sides: number[]): void {
  sides.forEach((side: number) => {
    if (side <= 0) {
      throw new Error('Any side cant be less 0');
    }
  });

  if (figureType === 'triangle') {
    const longestSide = Math.max.apply(null, sides);
    const longestSideIndex = sides.indexOf(longestSide);
    const sumTwoOthersSides = sides
      .reduce((acc: number, el: number, i: number) => {
        if (i !== longestSideIndex) {
          return acc + el;
        }

        return acc;
      });

    if (longestSide >= sumTwoOthersSides) {
      throw new Error(
        'Longest side of a triangle cant be more than a sum of two others',
      );
    }
  }
}

function roundedArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkFigure(this.shape, this.a, this.b, this.c);
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );

    return roundedArea(area);
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    checkFigure(this.shape, radius);
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return roundedArea(area);
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    checkFigure(this.shape, this.width, this.height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
