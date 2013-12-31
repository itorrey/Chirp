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
			var avi = node.getElementsByClassName("avatar")[0];
			var avimg = avi.getElementsByTagName("img")[0];
			var mess = node.getElementsByClassName("messages")[0];
			/*
			mess.style.marginLeft = "40px";
			avi.style.left = "0";

			move(mess)
				.duration('0.3s')
				.ease('out')
				.add('margin-left', 20)
				.end();
			
			move(avi)
				.duration('0s')
				.ease('snap')
				.scale('0.75')
				.end();
					
			move(avi)
				.duration('0.25s')
				.ease('in')
				.add('left', 10)
				.scale('1')
				.end();
			*/
			
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