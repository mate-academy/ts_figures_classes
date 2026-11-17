export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('one of the sides is non-existent!');
    }

    let longest: number = this.a;
    let sumOthers: number = this.b + this.c;

    if (this.a < this.b && this.c < this.b) {
      longest = this.b;
      sumOthers = this.a + this.c;
    } else if (this.b < this.c && this.a < this.c) {
      longest = this.c;
      sumOthers = this.a + this.b;
    }

    if (longest >= sumOthers) {
      throw new Error('cannot happen');
    }
  }

  getArea(): number {
    const semip: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semip * (semip - this.a) * (semip - this.b) * (semip - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius is non-existent!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('one of the sides is non-existent!');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
