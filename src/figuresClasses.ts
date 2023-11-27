function roundedUp(area: number): number {
  return Math.floor(area * 100) / 100;
}

function handleError(...lengths:number[]): void {
  const values = [...lengths];

  if (!values.every((value) => value > 0)) {
    throw new Error("Length can't be less than 0");
  }
}

type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sumTwoSides = (a + b + c) - longestSide;

    if (longestSide >= sumTwoSides) {
      throw new Error("Sides 1, 2 and 3 can't form a triangle");
    }

    handleError(this.a, this.b, this.c);
  }

  getArea = ():number => {
    const per : number = (this.a + this.b + this.c) / 2;
    const area : number
    = Math.sqrt(per * (per - this.a) * (per - this.b) * (per - this.c));

    return roundedUp(area);
  };
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    handleError(this.radius);
  }

  getArea = ():number => {
    const area = Math.PI * this.radius ** 2;

    return roundedUp(area);
  };
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public heigth: number,
  ) {
    handleError(this.width, this.heigth);
  }

  getArea = ():number => {
    const area = this.width * this.heigth;

    return roundedUp(area);
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
