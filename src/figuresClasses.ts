export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function errorChecking({ ...sides }): Error | void {
  const keys: string[] = Object.keys(sides);
  const values: number[] = Object.values(sides);

  const indexSideLessOne: number = Object.values(values).findIndex(
    (number): number => (number <= 0 ? 1 : 0),
  );

  if (indexSideLessOne >= 0) {
    throw new Error(
      `length or width is <= 0 for this element ${keys[indexSideLessOne]}:${values[indexSideLessOne]}`,
    );
  }

  if (values.length > 2) {
    const IndexBigSide: number = Object.values(values).findIndex(
      (number: number, index: number): number => {
        let result = 0;

        values.forEach((num, i): void => {
          if (index !== i) {
            result += num;
          }
        });

        if (number >= result) {
          return 1;
        }

        return 0;
      },
    );

    if (IndexBigSide >= 0) {
      throw new Error(
        `the side of a triangle is >= than a sum of two others ${keys[IndexBigSide]}:${values[IndexBigSide]}`,
      );
    }
  }
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape = Shape.Triangle,
  ) {
    errorChecking({ a, b, c });
  }

  getArea({ a, b, c } = this): number {
    const p = (a + b + c) / 2;
    const area = +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);

    return area;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape = Shape.Circle,
  ) {
    errorChecking({ radius });
  }

  getArea({ radius } = this): number {
    const area = Math.trunc(Math.PI * radius ** 2 * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.Rectangle,
  ) {
    errorChecking({ width, height });
  }

  getArea({ width, height } = this): number {
    const area = width * height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
