function format(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'triangle',
  ) {
    const sides: number[] = [this.a, this.b,
      this.c].sort((current, prev) => current - prev);

    if (this.a === 0 || this.b === 0 || this.c === 0
      || sides[2] >= (sides[0] + sides[1])) {
      throw new Error(`sides ${this.a}, ${this.b}
       and ${this.c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return format(Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error(`radius ${this.radius} can't form a circle`);
    }
  }

  getArea(): number {
    return format(Math.PI * (this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`sides ${this.width}
       and ${this.height} can't form a rectangle`);
    }
  }

  getArea(): number {
    return format(this.width * this.height);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
