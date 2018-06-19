(function sudokuValidator(arr){

    // check for unique values in each row
    for(let i = 0; i < arr.length; i++){
        let tempArr = [];
        for(let j = 0; j < arr[i].length; j++){
            if(tempArr.indexOf(arr[i][j]) == -1){
                tempArr.push(arr[i][j])
            } else {
                return false
            }
        }
    }

    // check for unique values in each col
    for(let i = 0; i < arr.length; i++){
        let tempArr = [];
        for(let j = 0; j < arr[i].length; j++){
            if(tempArr.indexOf(arr[j][i]) == -1){
                tempArr.push(arr[j][i])
            } else {
                return false
            }
        }
    }

    // check 3x3 squares
    for(let row = 0; row < 9; row += 3){
        for(let col = 0; col < 9; col += 3){
            let subGrid = [];
            for(let i = row; i < row + 3; i++){
                for(let j = col; j < col + 3; j++){
                    if(subGrid.indexOf(arr[i][j]) == -1){
                        subGrid.push(arr[i][j])
                    } else {
                        return false
                    }
                }
            }
        }
    }
    
    return true;
    
})();

// [
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]