function stringChop(str, size) {
  // your code here
	if(!str || typeof str!="string")
		return[];
	let empty = [];
	for(let i=0;i<str.length;i=i+size){
		empty.push(str.slice(i,size+i));
	}
	return empty;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


