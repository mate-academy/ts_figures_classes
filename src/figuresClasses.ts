export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  private validate(): void {
    const hasNonPositiveSide: boolean =
      this.a <= 0 || this.b <= 0 || this.c <= 0;

    const violatesTriangleInequality =
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a;

    if (hasNonPositiveSide || violatesTriangleInequality) {
      throw new Error('Incorrect value(s)');
    }
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validate();
  }

  getArea(): number {
    const semiperimeter: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'triangle': {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }

    case 'circle': {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }

    case 'rectangle': {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }
  }
}
