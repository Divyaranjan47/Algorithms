function isSumInArray(n, list) {
    let isSum = false;
    let items = {};

    list.forEach((val, i) => {
        console.log(items[val]);
        if(items[val]) {
            items[val].push(i)
        } else {
            items[val] = [i];
        }
    });

    for(let i = 0; i < list.length; i++) {
        for(j=i+1; j < list.length; j++) {
            let val = n - list[i] - list[j];
            let valList = items[val];
            if(!valList) {
                continue;
            }
            if(valList.length > 1) {
                let len = valList.length;
                console.log(len);
                if(valList.indexOf(i) !== -1) {
                    len--;
                }
                if(valList.indexOf(j) !== -1) {
                    len--;
                }
                if(len > 0) {
                    return true;
                }
            } else if(valList[0] !== i && valList[0] !== j) {
                return true;
            }
        }
    }
    return isSum;
}
console.log(isSumInArray(6, [2,2,4,6,2]));
