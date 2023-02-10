type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green ' | 'blue';

const errorMessage = 'Invalid value';

export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shapes = 'triangle',
  ) {
    const isTriangle = (): boolean => {
      const maxSide = Math.max(a, b, c);
      const sumSides = a + b + c;

      return maxSide >= (sumSides - maxSide);
    };

    if (Math.min(a, b, c) <= 0 || isTriangle()) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const actionOne = (a + b + c) / 2;
    const actionTwo = actionOne * (actionOne - a)
      * (actionOne - b) * (actionOne - c);

    return +(Math.sqrt(actionTwo)).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public radius: number,
    public shape: Shapes = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return +((Math.PI * (this.radius ** 2))
      .toFixed(3)
      .slice(0, -1));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
    public shape: Shapes = 'rectangle',
  ) {
    if ((width <= 0 || height <= 0)) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
