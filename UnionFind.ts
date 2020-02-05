const dots = [
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
]

interface IUnionFind {
    union(p: number, q: number): void;
    find(p: number): number;
    connected(p: number, q: number): boolean;
    count(): number;
}

class UnionFind implements IUnionFind {
    private n: number;
    private pointSets: number[];

    public UnionFind(n: number) {
        this.n = n;
        this.pointSets = [n];
        // for (let i: number = 0; i < n; i++) this.pointSets[i] = i;
        for (let i: number = 0; i < n; i++) this.pointSets[i] = Math.round(Math.random() * 100);

    }

    getPointset() {
        return this.pointSets;
    }

    union(p: number, q: number): number[] {
        let setOfp: number = this.pointSets[p];
        let setOfq: number = this.pointSets[q];

        for (let i: number = 0; i < this.pointSets.length; i++) {
            if (this.pointSets[i] == setOfp) this.pointSets[i] = setOfq;
            this.n--;
        }
        return this.pointSets;
    }

    find(p: number): number {
        return this.pointSets[p];
    }

    connected(p: number, q: number): boolean {
        return this.find(p) == this.find(q);
    }

    count(): number {
        return this.n;
    }
}

// UnionFind.prototype.UnionFind(100);
let ojago = new UnionFind();
ojago.UnionFind(10);

console.log("Untouched set = " + ojago.getPointset())
console.log("Union = " + ojago.union(0,9));
console.log("Find = " + ojago.find(9));
console.log("Connected = " + ojago.connected(1, 1));
console.log("Count = " + ojago.count());