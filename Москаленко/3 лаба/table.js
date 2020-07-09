window.onload = function(){
table = document.createElement('table');
document.body.appendChild(table);
var count=0;
var n=3;m=3;
var th1=[];

for(var i=0;i<n;i++){
	tr = document.createElement('tr');
	table.appendChild(tr);
	th1[i]=[];
	for(var j=0;j<m;j++){
		th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = j +' столбец '+ i +' строка ';
		th.id = count;
		th.style.border = '30px solid #800';
		th1[i][j]=th;
		count++;
		
		this.onclick = function(){
			var th1 = this;
			div = document.createElement('div');
			text1 = document.createElement('textarea');
			but  = document.createElement('input');
			table.appendChild(div);
			div.appendChild(text1);
			div.appendChild(but);
			but.value = 'OK';
			but.type = 'button';
			this.style.display = 'none';
		}
	}
}



}