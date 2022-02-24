function sortSquares(arr)
    {
        let n = arr.length;
        for (let i = 0; i < n; i++)
            arr[i] = Math.pow(arr[i],2);
 
        let arrSort = arr.reverse();
		let newArr = arr.reverse();
		console.log(newArr);
    }
	
array = [1, 2, 3, 5, 6, 8, 9];
sortSquares(array);