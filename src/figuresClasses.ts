export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    _color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = _color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of sides is <= 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error("This isn't a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(
    _color: 'red' | 'green' | 'blue',
    private a: number,
  ) {
    this.color = _color;

    if (this.a <= 0) {
      throw new Error('One of sides is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a * this.a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    _color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
  ) {
    this.color = _color;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('One of sides is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.constructor.name.toLowerCase()} - ${figure.getArea()}`;
}
