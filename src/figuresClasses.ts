export interface Figure {
  shape: string;
  color: string;
  getArea(): number | string;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b
    ) {
      throw new Error('woops, set correct sides lengths');
    }
  }

  getArea(): number | string {
    const hp = (this.a + this.b + this.c) / 2;

    const result: number = (Math.sqrt(hp
      * (hp - this.a) * (hp - this.b) * (hp - this.c)));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('woops, set correct radius length');
    }
  }

  getArea(): number | string {
    const result: number = (Math.PI * (this.radius * this.radius));

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('woops, set correct sides lengths');
    }
  }

  getArea(): number | string {
    const result: number = (this.width * this.height);

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
