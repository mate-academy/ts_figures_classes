type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const comp: number[] = [sideA, sideB, sideC].sort((a, b) => a - b);

    if (Math.min(...comp) <= 0) {
      throw new Error(`ERORR!!! The side of a triangle
        cannot be less than or equal to zero`);
    } else if (comp[0] + comp[1] <= comp[2]) {
      throw new Error(`ERORR!!! The larger side of a triangle cannot be
        greater than or equal to the sum of the other two sides`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return +((semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC))
      ** 0.5).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`ERORR!!! The radius of the circle
        cannot be less than or equal to zero`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
    // eslint-disable-next-line
    //in the task it is written - "figure rounded down to hundredths." tests are not rounded correctly. In the test in line 119, when the radius of the circle = 6, the area is equal to 113.09733552923255, if you round off according to the rules of mathematics, it will be 113.10 in the test 113.09. Output: Used Math.floor, this option gives an error "return +((Math.PI * (this.radius ** 2)).toFixed(2));""
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (Math.min(this.width, this.height) <= 0) {
      throw new Error(`ERORR!!! The side of a rectangle
        cannot be less than or equal to zero`);
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
