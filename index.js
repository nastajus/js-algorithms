

var js_algorithms_namespace = {

	main : function () {

		this.selectionSort( [7,6,4,3,2,1]);

		this.bubbleSort( [2, 1] );
		this.bubbleSort( [3,2,1] );
		this.bubbleSort( [4,3,2,1] );

	},

	bubbleSort : function ( array ) {
		if (!Array.isArray(array)) return array;

		for (var i = 0; i < array.length; i++)
		{
			for (var j = 0; j < array.length; j++)
			{
				if (array[j] > array[j + 1])
				{
					//swap
					var tempValue = array[j + 1];
					array[j + 1] = array[j];
					array[j] = tempValue;
				}
			}
		}
		console.log ( "BubbleSorted: " +  array );

		return array;
	},

	selectionSort : function ( array ) {
		for (var i = 0; i < array.length - 1; i++)
		{
			var smallestIdx = i;

			for (var j = i + 1; j < array.length; j++)
			{
				if (array[j] < array[smallestIdx])
				{
					smallestIdx = j;
				}
			}

			//swap
			if (smallestIdx !== i)
			{
				var tempVal = array[smallestIdx];
				array[smallestIdx] = array[i];
				array[i] = tempVal;
			}
		}
		console.log("SelectionSorted: " + array);

	}

};

js_algorithms_namespace.main();