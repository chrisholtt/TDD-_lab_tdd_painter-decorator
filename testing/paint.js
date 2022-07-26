const Paint = function (litres, empty = false) {
    this.litres = litres;
    this.empty = empty;
};



Paint.prototype.emptyPaint = function () {
    this.empty = true;
}



module.exports = Paint;
