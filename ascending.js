// Declare and initialize an Array
    var marks = [12, 25, 31, 23, 75, 8, 100];
         
// Print Before sorting array
    console.log("Original Array");
    console.log(marks);
         
// Sort elements using compare method
    marks.sort(function(a, b){return a - b});
     
    console.log("After sorting in Ascending order");
    console.log(marks);        

    marks.sort(function(a, b){return b - a});
	
	console.log("After sorting in descending order");
	console.log(marks);	
