// Override CoalescedHTML methods
function initStyle() {
	if(null == document.getElementById("heading")){
		document.getElementsByTagName('body').item(0).style.marginTop = "5px";
	}

	if(!coalescedHTML) {
		coalescedHTML = new CoalescedHTML();
	}

	coalescedHTML.setAppendElementMethod(function (elem) {
		document.getElementById("Chat").appendChild(elem);
		
		if(!coalescedHTML.isConsecutive) {
			var node = document.getElementById("Chat").lastElementChild;
			
			move(node)
				.set("-webkit-transform", "perspective( 500px ) rotateY(15deg)")
			.end();
				
				
			
			move(node)
				.set("-webkit-transform", "perspective( 500px ) rotateY(0)")
			.end();
			
			
			
		}
		alignChat(coalescedHTML.shouldScroll);
	});
}