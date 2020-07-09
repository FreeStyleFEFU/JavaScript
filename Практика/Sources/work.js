var count = 0;


window.onload = function ()
{
	
	
	question1();
	question2();
	question3();
	question4();
	question5();
	question6();
	question7();
	question8();
	question9();
	question10();
	question11();
	question12();
	question13();
	question14();
	question15();
	question16();
	question17();
	question18();
	
	var end = document.getElementById('i0');
	var flag = true;
	
	 
		end.onclick = function()
		{ 
			if(flag==true)
			{
				flag=false;
				if (confirm("Ваш результат: "+count+" правильных ответов из 18 вопросов. Пройти тест заново?")) 
				{
					location.reload();
				} 
				else 
				{
					document.getElementById("0").style.display = 'none';
					end.value = ('');
					end.value = ('Ваш результат: '+count+' правильных ответов из 18 ');
		
				}
			}
		}
	
}

function question1()
{
	var button1 = document.getElementById('option1');
	var button2 = document.getElementById('option2');
	var button3 = document.getElementById('option3');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question2()
{
	var button1 = document.getElementById('option4');
	var button2 = document.getElementById('option5');
	var button3 = document.getElementById('option6');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question3()
{
	var button1 = document.getElementById('option7');
	var button2 = document.getElementById('option8');
	var button3 = document.getElementById('option9');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question4()
{
	var button1 = document.getElementById('option10');
	var button2 = document.getElementById('option11');
	var button3 = document.getElementById('option12');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question5()
{
	var button1 = document.getElementById('option13');
	var button2 = document.getElementById('option14');
	var button3 = document.getElementById('option15');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question6()
{
	var button1 = document.getElementById('option16');
	var button2 = document.getElementById('option17');
	var button3 = document.getElementById('option18');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question7()
{
	var button1 = document.getElementById('option19');
	var button2 = document.getElementById('option20');
	var button3 = document.getElementById('option21');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question8()
{
	var button1 = document.getElementById('option22');
	var button2 = document.getElementById('option23');
	var button3 = document.getElementById('option24');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question9()
{
	var button1 = document.getElementById('option25');
	var button2 = document.getElementById('option26');
	var button3 = document.getElementById('option27');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question10()
{
	var button1 = document.getElementById('option28');
	var button2 = document.getElementById('option29');
	var button3 = document.getElementById('option30');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question11()
{
	var button1 = document.getElementById('option31');
	var button2 = document.getElementById('option32');
	var button3 = document.getElementById('option33');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question12()
{
	var button1 = document.getElementById('option34');
	var button2 = document.getElementById('option35');
	var button3 = document.getElementById('option36');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question13()
{
	var button1 = document.getElementById('option37');
	var button2 = document.getElementById('option38');
	var button3 = document.getElementById('option39');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question14()
{
	var button1 = document.getElementById('option40');
	var button2 = document.getElementById('option41');
	var button3 = document.getElementById('option42');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question15()
{
	var button1 = document.getElementById('option43');
	var button2 = document.getElementById('option44');
	var button3 = document.getElementById('option45');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question16()
{
	var button1 = document.getElementById('option46');
	var button2 = document.getElementById('option47');
	var button3 = document.getElementById('option48');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question17()
{
	var button1 = document.getElementById('option49');
	var button2 = document.getElementById('option50');
	var button3 = document.getElementById('option51');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}
function question18()
{
	var button1 = document.getElementById('option52');
	var button2 = document.getElementById('option53');
	var button3 = document.getElementById('option54');
	var flag = 0;
	
	button1.onclick = function()
	{
		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', 'b1');
			button2.setAttribute('class', '');
			button3.setAttribute('class', '');
		}
	}
	button2.onclick = function()
	{

		if(flag==1)
		{
			flag = 1;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
		}
		if(flag==0)
		{
			flag = 1;
			count++;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', 'b1');
			button3.setAttribute('class', '');
			/*alert(count);*/
		}
	}
	button3.onclick = function()
	{

		
		if(flag==1)
		{
			flag = 0;
			count--;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		if(flag==0)
		{
			flag = 0;
			
			button1.setAttribute('class', '');
			button2.setAttribute('class', '');
			button3.setAttribute('class', 'b1');
		}
		
	}
}