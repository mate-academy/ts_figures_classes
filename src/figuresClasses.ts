export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    const numbers: number[] = Array.from([this.a, this.b, this.c]).sort(
      (numA: number, numB: number) => {
        return numB - numA;
      },
    );

    if (
      numbers.some((num: number) => num <= 0) ||
      numbers[0] >= numbers[1] + numbers[2]
    ) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * ((s - this.a) * (s - this.b) * (s - this.c)),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error(`radius ${a} can't form a circle`);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.a * this.a;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error(
        `sides ${a <= 0 ? a : b <= 0 ? b : { a, b }} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    const area: number = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
