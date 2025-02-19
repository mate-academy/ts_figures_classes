export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect implementation of parameter a, b or c');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Incorrect implementation of parameter a, b or c');
    }
  }

  getArea(): number {
    const s: number = (1 / 2) * (this.a + this.b + this.c);
    const areaOfTriangle: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(areaOfTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    this.shape = 'circle';

    if (a <= 0) {
      throw new Error('Incorrect implementation of parameter a');
    }
  }

  getArea(): number {
    const areaOfCircle: number = Math.PI * Math.pow(this.a, 2);

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Incorrect implementation of parameter a, b or c');
    }
  }

  getArea(): number {
    const areaOfRectangle: number = this.a * this.b;

    return Math.floor(areaOfRectangle * 100) / 100;
  }
}

export function getInfo(figure): string {
  const message: string = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return message;
}
