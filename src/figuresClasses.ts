export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    const maxSide = Math.max(this.a, this.b, this.c);
    const perimeter = this.a + this.b + this.c;
    const sumOthersSides = perimeter - maxSide;

    if (this.a <= 0 || this.b <= 0
      || this.c <= 0 || maxSide >= sumOthersSides) {
      throw new Error('side cannot be 0 or less');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const expression = semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c);

    return Math.floor(Math.sqrt(expression) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'circle' = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('radius cannot be 0 or less');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('side cannot be 0 or less');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Circle | Triangle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
