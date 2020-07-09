var pressC = true; // индикатор отработки анимации
var pastCard = document.createElement('div'); // элемент первой открытой в паре карты
var clickCard = false; // инидикатор 1-го клика
var chekEnd = 5; // счёт открытых карт


window.onload = function ()
 {
    var cards = new Array();
    cards[0] = 'cat1.jpg';
    cards[1] = 'cat2.jpg';
    cards[2] = 'cat3.jpg';
    cards[3] = 'cat4.jpg';
    cards[4] = 'cat5.jpg';


    cards = cards.concat(cards);

    for (var i = 0; i < 10; i++) 
	{
        var imgInd = Math.floor(Math.random() * (cards.length));
		var IDentification = document.getElementById(i);
		IDentification.src = cards[imgInd];
	//	alert(IDentification.src);
		
		
        cards.splice(imgInd, 1);
    }
	
	var rotate = document.getElementsByClassName('rotate');
	
	for (var i = 0; i < rotate.length; i++)
	{
		//	alert(rotate[i].className);
		//	var rotate1 = document.getElementById('d'i)
		
		rotate[i].onclick = function()
		{
		
		clickC(this);
		};
	};

}


function clickC(elem) {
//	alert(typeof elem);

    var arrRot = document.getElementsByClassName('rotate');

    var indSame = findSame(elem, arrRot);



    if (elem.style.transform === '') {

        elem.style.transform = 'rotateY(180deg)';

       if (!clickCard) {
           pastCard = elem;
        }

        if (clickCard) {

            if (arrRot[indSame].style.transform === '') {

                setTimeout(
                    function () {
                        elem.style.transform = '';
                        pastCard.style.transform = '';
                        pastCard = document.createElement('div');
                    }, 500);
            } else {

                chekEnd--;

                if (chekEnd == 0) {

                    setTimeout(
                        function () {
                            if (confirm("повторим?")) {
                                location.reload();
                            } else {
                                alert("лол");
                            }
                        }, 1000);

                }

            }


        }

       
		clickCard=!clickCard;
		
    }
}

function findSame(elem, arr) {
	//alert(elem); 
	
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== elem && arr[i].childNodes[1].src  === elem.childNodes[1].src)
		   { 
            return i;
        }
    }
}