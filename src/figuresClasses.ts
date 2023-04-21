export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue'
  getArea: () => number;
}

const lengthValidator: (...args: number[]) => void = (...params: number[]) => {
  params.forEach((parm) => {
    if (parm <= 0) {
      throw new Error('Length should be > 0! Thank you!');
    }
  });
};

const shapeValidator: (...args: number []) => void = (...params: number[]) => {
  if (params.length === 3) {
    if (params[0] + params[1] <= params[2]
      || params[0] + params[2] <= params[1]
      || params[1] + params[2] <= params[0]) {
      throw new Error(`The longest side of a triangle has to be'
      + '<= than a sum of two others`);
    }
  }
};

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    lengthValidator(a, b, c);
    shapeValidator(a, b, c);
    this.shape = 'triangle';
  }

  getArea = (): number => {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.floor(Math.sqrt((semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c))) * 100) / 100;

    return area;
  };
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    lengthValidator(radius);
    this.shape = 'circle';
  }

  getArea = (): number => {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
  };
}

export class Rectangle {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    lengthValidator(width, height);
    this.shape = 'rectangle';
  }

  getArea = (): number => {
    return this.width * this.height;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
