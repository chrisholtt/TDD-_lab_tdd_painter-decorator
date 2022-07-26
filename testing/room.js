const Room = function (metersSquared, painted = false) {
    this.metersSquared = metersSquared;
    this.painted = painted;
};


Room.prototype.paint = function () {
    this.painted = true
}

module.exports = Room;