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
			var mess = node.getElementsByClassName("messages")[0];
			
			mess.style.marginLeft = "40px";
			mess.style.opacity = "0.5";
			avi.style.left = "0";
			avi.style.opacity = "0.5";

			move(mess)
				.ease('out')
				.add('margin-left', 20)
				.set('opacity', 1)
				.end();
				
			move(avi)
				.duration('0s')
				.scale('0.5')
				.end();
					
			move(avi)
				.duration('0.4s')
				.ease('out')
				.add('left', 10)
				.set('opacity', 1)
				.scale('1')
				.end();
		}
		alignChat(coalescedHTML.shouldScroll);
	});
}