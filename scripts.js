	$(document).ready(function(){
		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for(var i=0; i<6; i++){
				color += letters[Math.round(Math.random()*15)];
			}
			return color;
		}
	
		var createdTime;
		var clickedTime;
		var reactionTime;
	
		function makeBox() {
			var x = Math.random()*3000;
			document.getElementById("box").style.backgroundColor=getRandomColor();
			
			if(Math.random()>0.5){
				document.getElementById("box").style.borderRadius="50%";
			} else{
				document.getElementById("box").style.borderRadius="0%";
			}
			
			var top = Math.random()*400;
			var left = Math.random()*450;
			
			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";
			
			setTimeout(function(){
				
				document.getElementById("box").style.display="block";
				createdTime = Date.now();
			},x);
		}
	
		document.getElementById("box").onclick=function() {
			clickedTime = Date.now();
			reactionTime = (clickedTime - createdTime)/1000;
			document.getElementById("time").innerHTML=reactionTime;

			this.style.display="none";
			makeBox();
		}
		
		makeBox();
	});