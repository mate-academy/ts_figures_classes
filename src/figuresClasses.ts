export interface Figure {
  color: 'red' | 'green' | 'blue',
  shape: 'triangle' | 'circle' | 'rectangle',
  getArea: Function,
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side can`t be 0 size');
    }

    const sideList = [this.a, this.b, this.c].sort((el1, el2) => el2 - el1);

    if (sideList[0] >= sideList[1] + sideList[2]) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea():number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius can`t be 0 or less');
    }
  }

  getArea():number {
    // не розумію як змусити не округляти останні 2 цифри, тому так.
    const area = String((Math.PI * (this.radius * this.radius)));

    return +area.slice(0, (area.indexOf('.') + 3));
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('side can`t be 0 size');
    }
  }

  getArea():number {
    return (this.a * this.b);
  }
}

export function getInfo(figure: Figure):string {
  const res:number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${res}`;
}
