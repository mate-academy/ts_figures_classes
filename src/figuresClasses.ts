export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    if (!(this.a || this.b || this.c)) {
      throw new Error('triangle is not specified');
    } else {
      const sortArray: number[] = [this.a, this.b, this.c].sort(
        (x, y) => x - y,
      );

      if (sortArray[2] >= sortArray[1] + sortArray[0]) {
        throw new Error('not a valid parameter');
      }
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('not a valid radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2 * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('not a valid value');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `${figure.shape} ${figure.color} ${figure.getArea()}`;
}
