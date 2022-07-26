const Painter = function () {
    this.stock = [];
};


Painter.prototype.addPaint = function (paint) {
    this.stock.push(paint)
}

// Painter.prototype.calculateLitres = function () {
//     let total = 0;
//     for (let i = 0; i > this.stock.length; i++) {
//         total += this.stock[i].litres
//     }
//     return total;
// }

Painter.prototype.calculateLitres = function () {
    let total = 0;
    this.stock.forEach((paint) => {
        total += paint.litres
    })

    return total;
}

Painter.prototype.canPaintRoom = function (room) {

    const totalLitres = this.calculateLitres()

    if (totalLitres >= room.metersSquared) {
        room.painted = true;
        this.usePaint(room)

        return true;
    }

    return false;
}



Painter.prototype.usePaint = function (room) {

    let totalpaint = this.calculateLitres()
    let roomSqM = room.metersSquared

    this.stock.forEach((paint) => {
        if (paint.litres <= roomSqM) {
            roomSqM -= paint.litres
            paint.emptyPaint()

        } else if (paint.litres > roomSqM) {
            paint.litres -= roomSqM;
        }
    })



}



// Painter.prototype.isPaintEmpty = function() {
//     for (var i = 0; i < this.stock.length; i++) {
//         if (this.stock[i].litres == 0) {

//         }

//     }
// }


module.exports = Painter;