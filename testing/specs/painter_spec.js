const assert = require("assert");
const Room = require("../room");
const Paint = require("../paint");
const Painter = require("../painter");


describe("Room", function () {
    let room;
    let paint;
    let painter;


    beforeEach(function () {
        room = new Room(120)
    });

    beforeEach(function () {
        paint = new Paint(40)
    })

    beforeEach(function () {
        painter = new Painter()
    })

    it("Should have meters squared", function () {
        const actual = room.metersSquared
        assert.strictEqual(actual, 120)
    });

    it("Should start not painted", function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    });

    it("Should be able to be painted", function () {
        room.paint()
        const actual = room.painted
        assert.strictEqual(actual, true)
    });


    describe("Paint", function () {

        it("should have litres", function () {
            const actual = paint.litres
            assert.strictEqual(actual, 40)
        })

        it("should start not empty", function () {
            const actual = paint.empty
            assert.strictEqual(actual, false)
        })

        it("should be able to be emptied", function () {
            paint.emptyPaint()
            const actual = paint.empty
            assert.strictEqual(actual, true)
        })
    })



    describe("Painter", function () {

        it("Should start with no stock", function () {
            const actual = painter.stock
            assert.deepEqual(actual, [])
        })

        it("Should be able to add paint to paint stock", function () {
            painter.addPaint(paint)
            const actual = painter.stock

            assert.deepEqual(actual, [paint])
        })

        it("Should be able to calculate total litres of paint in stock", function () {
            const paint1 = new Paint(50)
            painter.addPaint(paint)
            painter.addPaint(paint1)
            const actual = painter.calculateLitres()

            assert.deepEqual(actual, 90)
        })

        it("Should have enough paint to paint a room", function () {
            const paint1 = new Paint(50)
            painter.addPaint(paint)
            painter.addPaint(paint1)
            const actual = painter.canPaintRoom(room)

            assert.deepEqual(actual, false)
        })

        it("Should have enough paint to paint a room", function () {
            const paint1 = new Paint(50)
            painter.addPaint(paint)
            painter.addPaint(paint1)
            painter.addPaint(paint1)
            const actual = painter.canPaintRoom(room)

            assert.deepEqual(actual, true)
        })

        it("Should be able to paint a room", function () {
            const paint1 = new Paint(50)
            painter.addPaint(paint)
            painter.addPaint(paint1)
            painter.addPaint(paint1)
            painter.canPaintRoom(room)
            const actual = room.painted

            assert.deepEqual(actual, true)
        })

        it("Should be able to paint a room and change paint stock", function () {
            const paint1 = new Paint(50)
            painter.addPaint(paint)
            painter.addPaint(paint1)
            painter.addPaint(paint1)
            painter.canPaintRoom(room)
            const actual = room.painted
            const actual1 = painter.calculateLitres()
            assert.deepEqual(actual, true)
            assert.deepEqual(actual1, 20)
        })







    })
})