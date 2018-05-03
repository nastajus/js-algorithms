

var js_algorithms_namespace = {

	main : function () {

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
		console.log ( array );

		return array;
	},

	selectionSort : function () {

	}

};

js_algorithms_namespace.main();