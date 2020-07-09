
window.onload = function()
{		
	setTimeout(
		function () {
        if (confirm("У тебя минута, поехали?")) {
			start();
        } else {
            alert("лол");
            }
	},0);
}

function start() {
	var kill = 3;
    var block = 0;
    var points = 0;
    var alb;
    var anim;
	var time = 55;
	playAudio1();
	setInterval(function(){
		
	playAudio1();
		
	},28000);
	
	setInterval(function(){
		
		document.getElementById('ti').value = 'осталось '+ time + ' секунд';
		document.getElementById('kill').value = 'осталось '+ kill + ' жизней';
		time--;
		if(time ===0)
		{
			window.location = 'Кроты1.html';
		}
		
	},1000);
	
    setInterval(function () {
		
        anim = 0;
		died = rand(1, 13);
        alb = 'i' + died;
		

        setTimeout(function () {

            document.getElementById(alb).setAttribute('class', 'krot pullUp active');
            document.getElementsByClassName('active')[0].onclick = function () {
                if (block == 0) {
                  playAudio();
                    points++;
					block = 1;
                    anim = 1;
                    document.getElementsByTagName('textarea')[0].value = 'Попал:' + points + ' раз';
					
					
					document.getElementById(died).setAttribute('src','7.png');
					setTimeout(function()
					{
						document.getElementById(alb).setAttribute('class', 'krot');
						document.getElementById(died).setAttribute('src','6.png')						
					},100);
					
                  /*  alert(";jbhnjkmnjpby");*/
                   
                }
            }

        }, 0);
		
		
		setTimeout(function () {
            if (anim == 0)
			{				
		document.getElementById(died).setAttribute('src','8.png');
		playAudio2();
		document.getElementsByClassName('main')[0].style.backgroundImage = 'url("10.jpg")';
		kill--;
			}
		document.getElementById('kill').value = 'осталось '+ kill + ' жизней';
			
        }, 1300);
				
		
			setTimeout(function () {
            if (kill === 0)	
			{				
                alert(" Ю ДИЕД");
				location.reload();
			}

        }, 1500);

        setTimeout(function () {
            if (anim == 0)
                document.getElementById(alb).setAttribute('class', 'krot slideDown');

        }, 1300);

        setTimeout(function () {
            if (anim == 0)
			{
                document.getElementById(alb).setAttribute('class', 'krot');
				document.getElementById(died).setAttribute('src','6.png');
				document.getElementsByClassName('main')[0].style.backgroundImage = 'url("5.jpg")';
			}
            block = 0;
        }, 1500);


    }, 3000);
}

function playAudio(){
var myAudio = new Audio;
myAudio.src = "1.mp3";
myAudio.play();
}

function playAudio1(){
var mAudio = new Audio;
mAudio.src = "2.mp3";
mAudio.play();
}
function playAudio2(){
var mAudio = new Audio;
mAudio.src = "3.mp3";
mAudio.play();
}
function rand(min, max) {
    if (max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min + 1));
    }
}


