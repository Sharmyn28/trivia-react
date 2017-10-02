//set default degree (360*5)
let degree = 1800;
//number of clicks = 0
let clicks = 0;

/*$(document).ready(function(){
	//WHEEL SPIN FUNCTION
	$('#spin').click(function(){
		//add 1 every click
		clicks ++;
		
		//multiply the degree by number of clicks generate random number between 1 - 360, 
    	//then add to the new degree
		let newDegree = degree*clicks;
		let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		//let's make the spin btn to tilt every time the edge of the section hits 
		//the indicator
		$('#wheel .sec').each(function(){
			let t = $(this);
			let noY = 0;
			
			let c = 0;
			let n = 700;	
			let interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				let aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);
				
				//23.7 is the minumum offset number that each section can get, in a 30 angle degree.
				//So, if the offset reaches 23.7, then we know that it has a 30 degree angle and therefore, 
				//exactly aligned with the spin btn
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
		});
	});
	
});//DOCUMENT READY*/


//let spin = document.getElementById('spin');

function spinning(event){
	let t = this;
	//console.log(event.target);
	let noY = 0;
	
	let c = 0;
	let n = 700;	
	let interval = setInterval(function () {
		c++;				
		if (c === n) { 
			clearInterval(interval);				
		}	

		let aoY = t.offsetTop;
		document.getElementById('txt').innerHTML = aoY;
		console.log(aoY);
		
		//23.7 is the minumum offset number that each section can get, in a 30 angle degree.
		//So, if the offset reaches 23.7, then we know that it has a 30 degree angle and therefore, 
		//exactly aligned with the spin btn
		if(aoY < 23.89){
			console.log('<<<<<<<<');
			document.getElementById('spin').classList.add('spin');
			setTimeout(function () {
				document.getElementById('spin').classList.remove('spin');
			}, 100);	
		}
	}, 10);
	
	let inner_wheel = document.getElementById('inner-wheel'); 
	inner_wheel.style.transform = "rotate(' + totalDegree + 'deg)";
	noY = t.offsetTop;
	//a.innerHTML='foo';
}
//WHEEL SPIN FUNCTION
function click (){
	clicks ++;
	
	//multiply the degree by number of clicks generate random number between 1 - 360, then add to the new degree
	let newDegree = degree * clicks;
	//Math.floor((Math.random() * 10) + 1);
	let extraDegree = Math.floor((Math.random() * 360) + 1);
	totalDegree = newDegree + extraDegree;
	
	//let's make the spin btn to tilt every time the edge of the section hits the indicator
					
	/*Array.from(document.body.getElementsByClassName("sec")).forEach(function(){
		spinning(this);
	})*/
	let sec = document.getElementsByClassName("sec");
	
	for(var i in sec){
		let t = this;
		//console.log(event.target);
		let noY = 0;
		
		let c = 0;
		let n = 700;	
		let interval = setInterval(function () {
			c++;				
			if (c === n) { 
				clearInterval(interval);				
			}	
	
			let aoY = t.offsetTop;
			document.getElementById('txt').innerHTML = aoY;
			console.log(aoY);
			
			//23.7 is the minumum offset number that each section can get, in a 30 angle degree.
			//So, if the offset reaches 23.7, then we know that it has a 30 degree angle and therefore, 
			//exactly aligned with the spin btn
			if(aoY < 23.89){
				console.log('<<<<<<<<');
				document.getElementById('spin').classList.add('spin');
				setTimeout(function () {
					document.getElementById('spin').classList.remove('spin');
				}, 100);	
			}
		}, 10);
		
		let inner_wheel = document.getElementById('inner-wheel'); 
		inner_wheel.style.transform = "rotate(' + totalDegree + 'deg)";
		noY = t.offsetTop;
	}
}




window.onload = function() {
	console.log('window - onload'); // 4th
	spin.onclick = function(){
		click();
	}
}