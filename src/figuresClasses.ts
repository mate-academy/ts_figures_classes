export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    const arr = [a, b, c];

    const sorted = arr.sort((el, el2) => el - el2);

    if (sorted[2] >= sorted[0] + sorted[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea = (): number => {
    const semi = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semi * (semi - this.a) * (semi - this.b) * (semi - this.c),
    );

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`${radius} is not positive`);
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} should be positive`);
    }
  }

  getArea = (): number => {
    return Math.floor(this.height * this.width * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
