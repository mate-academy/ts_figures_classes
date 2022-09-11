type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea: Function,
  message: Function,
}

export function approx(number: number):number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color:Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (arguments.length < 4) {
      throw new Error('Wrong argument amount');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side should be bigger than 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(`the longest side of a triangle 
      is >= than a sum of two others`);
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return approx(Math.sqrt(
      s * (s - this.a)
      * (s - this.b)
      * (s - this.c),
    ));
  }

  message(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Circle {
  shape:Shapes = 'circle';

  constructor(public color: Colors, public radius: number) {
    if (arguments.length < 2) {
      throw new Error('wrong argument length');
    }

    if (radius <= 0) {
      throw new Error('radius should be bigger than 0');
    }
  }

  getArea():number {
    return approx(Math.PI * (this.radius ** 2));
  }

  message(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  constructor(public color: Colors, public a: number, public b: number) {
    if (arguments.length < 3) {
      throw new Error('Wrong argument amount');
    }

    if (a <= 0 || b <= 0) {
      throw new Error('Each side should be bigger than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }

  message(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export function getInfo(figure: Figure): string {
  return figure.message();
}
