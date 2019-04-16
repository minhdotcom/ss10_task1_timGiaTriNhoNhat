function find_min (array) {
    let min = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    return min;
}