var dots = [
    1, 0,
    4, 3,
    3, 8,
    6, 5,
    9, 4,
    2, 1,
    8, 9,
    5, 0,
    7, 2,
    6, 1,
    1, 0,
    6, 7,
];
var UnionFind = /** @class */ (function () {
    function UnionFind() {
    }
    UnionFind.prototype.UnionFind = function (n) {
        this.n = n;
        this.pointSets = [n];
        for (var i = 0; i < n; i++)
            this.pointSets[i] = i;
    };
    UnionFind.prototype.union = function (p, q) {
        var setOfp = this.pointSets[p];
        var setOfq = this.pointSets[q];
        for (var i = 0; i < this.pointSets.length; i++) {
            if (this.pointSets[i] == p)
                this.pointSets[i] = setOfq;
        }
    };
    UnionFind.prototype.find = function (p) {
        return this.pointSets[p];
    };
    UnionFind.prototype.connected = function (p, q) {
        return this.find(p) == this.find(q);
    };
    UnionFind.prototype.count = function () {
        throw new Error("Method not implemented.");
    };
    return UnionFind;
}());
UnionFind.prototype.UnionFind(9);
console.log("Find = " + UnionFind.prototype.find(1));
