export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

const commonCheck: (args:Array<number>) => boolean = (args) => args
  .every((item) => item <= 0);

const triangleCheck: (args:Array<number>) => boolean = (args) => {
  const sortedArgs = args.sort((a, b) => b - a);

  return sortedArgs[0] < sortedArgs[1] + sortedArgs[2];
};

export class Triangle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  getArea: Figure['getArea'];

  constructor(color: Figure['color'], a:number, b:number, c:number) {
    this.shape = 'triangle';
    this.color = color;

    this.getArea = function getArea():number {
      const semiPer:number = (a + b + c) / 2;
      const square:number
        = +(Math.sqrt(semiPer * (semiPer - a)
        * (semiPer - b) * (semiPer - c)).toFixed(2));

      return square;
    };

    if (!commonCheck([a, b, c]) && !triangleCheck([a, b, c])) {
      throw new Error('Checks failed');
    }
  }
}

export class Circle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  getArea: Figure['getArea'];

  constructor(color: Figure['color'], radius:number) {
    this.shape = 'circle';
    this.color = color;

    this.getArea = function getArea():number {
      return Math.floor(Math.PI * (radius ** 2) * 100) / 100;
    };

    if (commonCheck([radius])) {
      throw new Error('Checks failed');
    }
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  getArea: Figure['getArea'];

  constructor(color: Figure['color'], width:number, height: number) {
    this.shape = 'rectangle';
    this.color = color;

    this.getArea = function getArea():number {
      return width * height;
    };

    if (width <= 0 || height <= 0) {
      throw new Error('Checks failed');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
