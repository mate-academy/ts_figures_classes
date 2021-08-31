enum ShapeTypes {
  triangle,
  circle,
  rectangle,
}

enum ColorTypes {
  red,
  green,
  blue,
}

export interface Figure {
  shape: ShapeTypes;
  color: ColorTypes;
  getArea(): number,
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a + this.b <= this.c
      || this.c + this.b <= this.a
      || this.c + this.a <= this.b
    ) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const peremeter: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          peremeter
          * (peremeter - this.a) * (peremeter - this.b) * (peremeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Math.floor(3.14 * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const infoAboutFigure = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${infoAboutFigure}`;
}
