"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figuresClasses_1 = require("./figuresClasses");
describe('Class "Triangle"', function () {
    test('should be declared', function () {
        expect(figuresClasses_1.Triangle)
            .toBeInstanceOf(Function);
    });
    test('should create an instance of class Triangle', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(triangle)
            .toBeInstanceOf(figuresClasses_1.Triangle);
    });
    test('should have a public property "shape"', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(triangle)
            .toHaveProperty('shape');
    });
    test('should have a public property "color"', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(triangle)
            .toHaveProperty('color');
    });
    test('should check whether all sides are positive numbers', function () {
        expect(function () {
            new figuresClasses_1.Triangle('green', 0, 2, 2);
        }).toThrow(Error);
    });
    test('should check whether it is a triangle', function () {
        expect(function () {
            new figuresClasses_1.Triangle('green', 5, 10, 15);
        }).toThrow(Error);
    });
    test('should have a method "getArea"', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(triangle.getArea)
            .toBeInstanceOf(Function);
    });
});
describe('Method "getArea" of class "Triangle"', function () {
    test('should return a number', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(typeof triangle.getArea())
            .toBe('number');
    });
    test('should return a correct square of a triangle', function () {
        var triangle = new figuresClasses_1.Triangle('green', 3, 4, 5);
        expect(triangle.getArea())
            .toBe(6);
    });
});
describe('Class "Circle"', function () {
    test('should be declared', function () {
        expect(figuresClasses_1.Circle)
            .toBeInstanceOf(Function);
    });
    test('should create an instance of class Circle', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(circle)
            .toBeInstanceOf(figuresClasses_1.Circle);
    });
    test('should have a public property "shape"', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(circle)
            .toHaveProperty('shape');
    });
    test('should have a public property "color"', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(circle)
            .toHaveProperty('color');
    });
    test('should check whether radius is a positive number', function () {
        expect(function () {
            new figuresClasses_1.Circle('red', -3);
        }).toThrow(Error);
    });
    test('should have a method "getArea"', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(circle.getArea)
            .toBeInstanceOf(Function);
    });
});
describe('Method "getArea" of class "Circle"', function () {
    test('should return a number', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(typeof circle.getArea())
            .toBe('number');
    });
    test('should return a correct square of a circle', function () {
        var circle = new figuresClasses_1.Circle('red', 6);
        expect(circle.getArea())
            .toBe(113.09);
    });
});
describe('Class "Rectangle"', function () {
    test('should be declared', function () {
        expect(figuresClasses_1.Rectangle)
            .toBeInstanceOf(Function);
    });
    test('should create an instance of class Rectangle', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(rectangle)
            .toBeInstanceOf(figuresClasses_1.Rectangle);
    });
    test('should have a public property "shape"', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(rectangle)
            .toHaveProperty('shape');
    });
    test('should have a public property "color"', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(rectangle)
            .toHaveProperty('color');
    });
    test('should check whether all sides are positive numbers', function () {
        expect(function () {
            new figuresClasses_1.Rectangle('blue', 5, -1);
        }).toThrow(Error);
    });
    test('should have a method "getArea"', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(rectangle.getArea)
            .toBeInstanceOf(Function);
    });
});
describe('Method "getArea" of class "Rectangle"', function () {
    test('should return a number', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(typeof rectangle.getArea())
            .toBe('number');
    });
    test('should return a correct square of a rectangle', function () {
        var rectangle = new figuresClasses_1.Rectangle('blue', 8, 10);
        expect(rectangle.getArea())
            .toBe(80);
    });
});
describe('Function "getInfo"', function () {
    test('should be declared', function () {
        expect(figuresClasses_1.getInfo)
            .toBeInstanceOf(Function);
    });
    test('should return a string', function () {
        var blueTriangle = new figuresClasses_1.Triangle('blue', 6, 7, 8);
        expect(typeof (0, figuresClasses_1.getInfo)(blueTriangle))
            .toBe('string');
    });
    test('should return correct information about a triangle', function () {
        var redTriangle = new figuresClasses_1.Triangle('red', 10, 12, 15);
        expect((0, figuresClasses_1.getInfo)(redTriangle))
            .toBe('A red triangle - 59.81');
    });
    test('should return correct information about a circle', function () {
        var greenCircle = new figuresClasses_1.Circle('green', 13.31);
        expect((0, figuresClasses_1.getInfo)(greenCircle))
            .toBe('A green circle - 556.55');
    });
    test('should return correct information about a rectangle', function () {
        var blueRectangle = new figuresClasses_1.Rectangle('blue', 9, 17);
        expect((0, figuresClasses_1.getInfo)(blueRectangle))
            .toBe('A blue rectangle - 153');
    });
});
