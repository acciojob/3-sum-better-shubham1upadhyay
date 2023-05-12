function threeSum(arr, target) {

	let sum = 0;
	
	for(let i=0; i<arr.length; i++)
		{
			
			for(let j=i+1; j<=3; j++)
				{
					if(arr[i] + arr[j] <= target)
					{
						sum = arr[i] + arr[j];
					}
				}
		}
  return sum;
}

module.exports = threeSum;
