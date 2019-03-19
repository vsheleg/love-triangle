
module.exports = function getLoveTrianglesCount(arr) {
    arr = arr.map((x) => x-1);

    let loveTriangleCount=0

    for(var i = 0; i < arr.length; i++) {
        var next = arr[i];

        if(next < 0 || next == i) {
            continue;
        }

        var nextnext = arr[next];

        if(nextnext < 0 || nextnext == next || nextnext == i) {
            arr[i] = -1;
            continue;
        }

        if(arr[nextnext] < 0) {
            arr[next] = -1;
            arr[i] = -1;
            continue;
        }

        if(arr[nextnext] === i) {
            loveTriangleCount++;
        }

        arr[i] = -1;
    }
    return loveTriangleCount;
}