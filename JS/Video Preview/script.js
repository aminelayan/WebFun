let list = document.getElementsByClassName("myVid")
for(let i=0; i<list.length; i++){
	list[i].addEventListener("mouseover", function() {
		this.play();
	});
}

let lis = document.getElementsByClassName("myVid")
for(let i=0; i<lis.length; i++){
	lis[i].addEventListener("mouseout", function() {
		this.pause();
	});
}

// }
// console.log(list)
// list = Array.from(list)

// list.forEach(element => {
// 	// console.log(element)
// 	element.addEventListener("mouseover", function () {
// 		console.log(this)
// 			this.play();
// 		}
// 	)
// });