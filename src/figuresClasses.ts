type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function checkNumbers(args: number[]):void {
  if (args.find((el:number) => el <= 0) !== undefined) {
    throw new Error('Number values must not be zero or negative');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    public color: Color,
    ...args: [number, number, number]
  ) {
    checkNumbers(args);
    Triangle.checkLongestSide(args);

    [this.a, this.b, this.c] = args;
  }

  static checkLongestSide(args: number[]):void {
    const copy = [...args];
    const max = Math.max(...copy);

    copy.splice(copy.indexOf(max), 1);

    if (max >= copy[0] + copy[1]) {
      throw new Error(`Sides ${args[0]},`
        + `${args[1]} and ${args[2]} cannot form a triangle`);
    }
  }

  getArea(): number {
    const semiPer = 0.5 * (this.a + this.b + this.c);
    const formula = Math.sqrt(semiPer
      * (semiPer - this.a)
      * (semiPer - this.b)
      * (semiPer - this.c));

    return +formula.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  radius: number;

  constructor(
    public color: Color,
    ...args: [number]
  ) {
    checkNumbers(args);

    [this.radius] = args;
  }

  getArea(): number {
    const formula = Math.PI * (this.radius ** 2);

    return +formula.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  constructor(public color: Color, ...args: [number, number]) {
    checkNumbers(args);

    [this.width, this.height] = args;
  }

  getArea(): number {
    const formula = this.width * this.height;

    return +formula.toFixed(2);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
