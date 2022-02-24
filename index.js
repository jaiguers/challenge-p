function nonConstChange(coins)
{
    let n = 0;
	coins.sort((a,b)=>a-b);
        for (const coin of coins){
			if(coin > n+1){
				return n+1;
			}
		n+=coin;
		}
 
        return n+1;
    }
	
coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstChange(coins));