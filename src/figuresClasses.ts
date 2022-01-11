export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arrOfSides = [];
    let longest = 0;

    arrOfSides.push(this.a, this.b, this.c);

    for (let i = 0; i < arrOfSides.length; i += 1) {
      if (arrOfSides[i] > longest) {
        longest = arrOfSides[i];
      }
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of triangle must be non-negative');
    }

    if (longest >= (a + b + c) - longest) {
      throw new Error('The longest side of triangle'
      + 'can not be bigger than a sum of two others');
    }
  }

  public getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of circle must be non-negative');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height must be non-negative');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
