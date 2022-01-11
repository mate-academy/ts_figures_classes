enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
export interface Figure {
  shape : Shapes;
  color : Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color : Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || this.checkIsTriangle()) {
      throw new Error('There is no such triangle');
    }
  }

  checkIsTriangle():boolean {
    if (this.a >= (this.b + this.c)
    || this.b >= (this.a + this.c)
    || this.c >= (this.a + this.b)) {
      return true;
    }

    return false;
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(semiPerimeter
    * (semiPerimeter - this.a)
    * (semiPerimeter - this.b)
    * (semiPerimeter - this.c))
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('This is not a valid radius');
    }
  }

  getArea(): number {
    return Math.floor(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('This is not a valid width and height');
    }
  }

  getArea():number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure:Figure) :string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
