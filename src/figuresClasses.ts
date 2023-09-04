type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';
type AreaCallback = () => number;

export interface Figure {
  shape: FigureShape,
  color: FigureColor,
  getArea: AreaCallback,
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a * b * c <= 0) {
      throw new Error('You have entered incorrect data');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`sides ${a} ${b} ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const sp = (this.a + this.b + this.c) / 2;
    const aDifference = sp - this.a;
    const bDiffernece = sp - this.b;
    const cDifference = sp - this.c;
    const area = Math.sqrt(sp * aDifference * bDiffernece * cDifference);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('You have entered incorrect data');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('You have entered incorrect data');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
