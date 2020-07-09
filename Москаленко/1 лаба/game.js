var count=0;var count_vershin = 0; count_ravno = 0;count1=0;
var command,command1;
var matrica_div = []; question=[];copy_question = [];ravno_tree = [];final_tree = [];index_razvetvleniya =[]; vershini = []; matrica_tree = [];
var block;
var answer =[]; //[1,2,3,8,0,4,7,6,5];
var tree = [];
var vetki, copy;
var zevershenie = 0; ir =0;
var weight = []; ravno = [];
for(var i=0;i<100;i++){
	weight[i] = 0;
	ravno[i] = 0;
}

window.onload = function(){
	block = document.createElement('div');
	document.body.appendChild(block);
	
	for(var i=0;i<3;i++){
	text1=document.createElement('textarea');
	document.body.appendChild(text1);
	br=document.createElement('br');
	br.id = 'i'+i;
	document.body.appendChild(br);
	text1.id=i;
	}
	for(var i=0;i<1;i++){
		input = document.createElement('input');
		document.body.appendChild(input);
		input.type = 'button';
		input.value="	Ввод 	 ";
	}
	br1 = document.createElement('br');
		document.body.appendChild(br1);	
	
	input.onclick=function(){
		count=0; count1++;
		for(var i=0;i<3;i++){
			
			t=document.getElementById(i).value;
			for(let int of t){
				//alert(int);
				if(count1 == 1){
				question[count]=int;
				}
				if(count1 == 2){
					answer[count] =int;
				}
				count++;			
			}
			if(count1 == 2){
			document.getElementById(i).style.display = 'none';
			input.style.display = 'none';
			br1.style.display = 'none';
			document.getElementById('i'+i).style.display = 'none';
			}
			
		}
		if(count1 == 2)
		matrix();
			
	}
	
}

	
function matrix(){
		count=0;
	for(var i = 0;i<3;i++){	
			matrica_div[i] = [];
			
		for (var j = 0;j<3;j++){
			div = document.createElement('div');		
			document.body.appendChild(div);	
			matrica_div[i][j] = div;
			matrica_div[i][j].style.width='30px';
			matrica_div[i][j].style.height='30px';
			matrica_div[i][j].style.background='red';
			matrica_div[i][j].style.outline = '1px solid #000';
			matrica_div[i][j].style.display = 'inline-block';
		
			matrica_div[i][j].innerHTML = question[count];
			
			count++;
		}
		br1 = document.createElement('br');
		document.body.appendChild(br1);			
	}
	
	br1 = document.createElement('br');
	document.body.appendChild(br1);	
	vershina();
	return;
}

function vershina(){
	count = 0;
	for(var i =0;i<9;i++){
		if(question[i] == answer[i]) count++;
		copy_question[i] = question[i];
	}
	count = 0;
	
	if(count == 9)alert("Уже победа");
	else if(question[0]==0){
		tree[0] = [];tree[1] = [];
		copy = question[0]; question[0] = question[1];question[1] = copy; alert(question[0]);
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[0]; question[0] = question[3]; question[3] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		}
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 2;
		work();
		return;
	}
	else if(question[1]==0){
		tree[0] = [];tree[1] = [];tree[2] = [];
		copy = question[1]; question[1] = question[0];question[0] = copy; 
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[1]; question[1] = question[2]; question[2] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		}
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[1]; question[1] = question[4]; question[4] = copy;
		for(var i=0;i<9;i++){
			tree[2][i] = question[i];
		}
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 3;
		work();
		return;
	}
	else if(question[2]==0){
		tree[0] = [];tree[1] = [];
		copy = question[2]; question[2] = question[1]; question[1] = copy; 		
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[2]; question[2] = question[5]; question[5] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 2;
		work();
		return;
	}
	else if(question[3]==0){
		tree[0] = [];tree[1] = [];tree[2] = [];
		copy = question[3]; question[3] = question[0]; question[0] = copy;
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[3]; question[3] = question[4]; question[4] = copy; 
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[3]; question[3] = question[6]; question[6] = copy;
		for(var i=0;i<9;i++){
			tree[2][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 3;
		work();
		return;
	}
	else if(question[4]==0){
		tree[0] = [];tree[1] = [];tree[2] = [];tree[3] = [];
		copy = question[4]; question[4] = question[3]; question[3] = copy;
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[4]; question[4] = question[1]; question[1] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[4]; question[4] = question[5]; question[5] = copy;
		for(var i=0;i<9;i++){
			tree[2][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[4]; question[4] = question[7]; question[7] = copy;
		for(var i=0;i<9;i++){
			tree[3][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 4;
		work();
		return;
	}
	else if(question[5]==0){
		tree[0] = [];tree[1] = [];tree[2] = [];
		copy = question[5]; question[5] = question[4]; question[4] = copy;
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[5]; question[5] = question[2]; question[2] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[5]; question[5] = question[8]; question[8] = copy;
		for(var i=0;i<9;i++){
			tree[2][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 3;
		work();
		return;
	}
	else if(question[6]==0){
		tree[0] = [];tree[1] = [];
		copy = question[6]; question[6] = question[3]; question[3] = copy;
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[6]; question[6] = question[7]; question[7] = copy; 
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 2;
		work();
		return;
	}
	else if(question[7]==0){
		tree[0] = [];tree[1] = [];tree[2] = [];
		copy = question[7]; question[7] = question[6]; question[6] = copy; 
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[7]; question[7] = question[4]; question[4] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[7]; question[7] = question[8]; question[8] = copy;
		for(var i=0;i<9;i++){
			tree[2][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 3;
		work();
		return;
	}
	else if(question[8]==0){
		tree[0] = [];tree[1] = [];
		copy = question[8]; question[8] = question[5]; question[5] = copy;
		for(var i=0;i<9;i++){
			tree[0][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		copy = question[8]; question[8] = question[7]; question[7] = copy;
		for(var i=0;i<9;i++){
			tree[1][i] = question[i];
		} 
		for(var i=0;i<9;i++){
			question[i] = copy_question[i] ;
		}
		vetki = 2;
		work();
		return;
	}
	
	return;
}
function work(){
	//alert(tree);
	for(var i=0;i<tree.length;i++){
		count_ravno = 0;
		for(var j=0;j<9;j++){
			if(tree[i][j]==answer[j]) count_ravno++;
		}
		if(count_ravno == 9){
			count_ravno = i;
			
			tree.splice(i+1, 10);
			end();
			break;
			return false;
			
		}
	}
	 
	
	
	if(vetki == 1){
		count = tree.length - 1;
		where_zero();		
	}
	else if(vetki == 2){
		count = tree.length - 2;
		weight[count] = weight[count+1] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i]) weight[count]++;
			if(answer[i] != tree[count+1][i]) weight[count+1]++;
		}
		if(weight[count] < weight[count+1]){
			tree.splice(count+1,10);
			where_zero();		
		}
		else if(weight[count] == weight[count+1]){	
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] < weight[count]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		
		
	}
	else if(vetki == 3){
		
		count = tree.length - 3;
		weight[count] = weight[count+1] = weight[count+2] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
		}
		
		if(weight[count] < weight[count+1] && weight[count] < weight[count+2]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2] < weight[count] && weight[count+2] < weight[count+1]){
		 for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] == weight[count+2]){
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		
		else if(weight[count]< weight[count+2] && weight[count]== weight[count+1]){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count]< weight[count+1] && weight[count]== weight[count+2]){
			for(var i=0;i<9;i++){
				tree[tree.length-2][i] = tree[tree.length-1][i];
			}
			tree.splice(tree.length-1,10);
			if2vershin();		
			count_vershin = 2;
			vetki = work_ravno();
			work();
		
		}
		else if(weight[count+1]< weight[count] && weight[count+1]== weight[count+2]){
			for(var i=0;i<9;i++){
				tree[tree.length-3][i] = [tree.length-2][i];
				tree[tree.length-2][i] = [tree.length-1][i];
			}
			tree.splice(tree.length-1,10);
			if2vershin();
			vetki = work_ravno();
			work();		
		}

		else if(weight[count+1] < weight[count] && weight[count+1] < weight[count+2]){
		//	alert('повтор');
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			where_zero();
		}		
		
	}
	else if(vetki == 4){
		count = tree.length - 4;
		weight[count] = weight[count+1] = weight[count+2] = weight[count+3] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
			if(answer[i] != tree[count+3][i])weight[count+3]++;
		}
			
		
		if(weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3]){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] && weight[count]<weight[count+1] && weight[count]< weight[count+3]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+2][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+3] && weight[count]<weight[count+1] && weight[count]< weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+3][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
			
		}
		else if(weight[count+1] == weight[count+2] && weight[count+1]<weight[count] && weight[count+1]< weight[count+3]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		
		}
		else if(weight[count+2] == weight[count+3] && weight[count+2]<weight[count] && weight[count+2]< weight[count+1]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		
		}
		else if(weight[count] == weight[count+1] == weight[count+2] && weight[count]< weight[count+3]){
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3] && weight[count]< weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+3][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3] && weight[count]< weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+3][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+1] == weight[count+3] && weight[count+1]< weight[count]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+1] == weight[count+3] == weight[count]){
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}

		
	}
	else if(vetki == 5){
		count = tree.length - 5;
		weight[count] = weight[count+1] = weight[count+2] = weight[count+3] = weight[count+4] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
			if(answer[i] != tree[count+3][i])weight[count+3]++;
			if(answer[i] != tree[count+4][i])weight[count+4]++;		
		}
		if(weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3]&&weight[count]<weight[count+4]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]&&weight[count+1]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3]&&weight[count+2]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2]&&weight[count+3]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4]){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+2][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+3] && weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+3][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+4] && weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+4][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+3] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+4]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+3][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+4][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+4][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+1]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+4][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
			}
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2]  && weight[count]<weight[count+3] && weight[count]<weight[count+4]){
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3]  && weight[count]<weight[count+2] && weight[count]<weight[count+4]){
			for(var i=0;i<9;i++){			
				tree[count+2][i] = tree[count+3][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+4]  && weight[count]<weight[count+2] && weight[count]<weight[count+3]){
			for(var i=0;i<9;i++){			
				tree[count+2][i] = tree[count+4][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+1] == weight[count+3]  && weight[count+2]<weight[count+4] && weight[count+2]<weight[count]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+4] == weight[count+3]  && weight[count+2]<weight[count+1] && weight[count+2]<weight[count]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
			}
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] && weight[count]<weight[count+4]){
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] == weight[count+3] == weight[count+4] && weight[count]<weight[count+1]){
			for(var i=0;i<9;i++){			
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4] && weight[count+1]<weight[count]){
			for(var i=0;i<9;i++){			
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4] == weight[count]){
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}	
	}
	else if(vetki == 6){
		count = tree.length - 6;
		weight[count] = weight[count+1] = weight[count+2] = weight[count+3] = weight[count+4] = weight[count+5] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
			if(answer[i] != tree[count+3][i])weight[count+3]++;
			if(answer[i] != tree[count+4][i])weight[count+4]++;	
			if(answer[i] != tree[count+4][i])weight[count+5]++;	
		}
		
		if(weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3]&&weight[count]<weight[count+4]&&weight[count]<weight[count+5]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]&&weight[count+1]<weight[count+4]&&weight[count+1]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3]&&weight[count+2]<weight[count+4]&&weight[count+2]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+3]<weight[count] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+1]&&weight[count+3]<weight[count+4]&&weight[count+3]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+4]<weight[count] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3]&&weight[count+4]<weight[count+1]&&weight[count+4]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+5]<weight[count] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3]&&weight[count+5]<weight[count+4]&&weight[count+5]<weight[count+1]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] ){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+3] && weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+4] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+5] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+3] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+4] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+5] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5]){	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+3][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+4][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+5] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+3]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+5][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+4] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+4][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+5] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+5][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+5] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+5][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
			}	
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3]  && weight[count]<weight[count+4] && weight[count]<weight[count+5]){	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+4] && weight[count]<weight[count+3] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+4][i];	
			}	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+5] && weight[count]<weight[count+3] && weight[count]<weight[count+4]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+5][i];	
			}	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];				
			}	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+5][i];				
			}	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];				
			}	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4]  && weight[count]<weight[count+5]){	
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count]<weight[count+4]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+5][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count+1]<weight[count]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
				
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4]){	
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
	}
	else if(vetki == 7){
		count = tree.length - 7;
		weight[count] = weight[count+1] = weight[count+2] = weight[count+3] = weight[count+4] = weight[count+5] = weight[count+6] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
			if(answer[i] != tree[count+3][i])weight[count+3]++;
			if(answer[i] != tree[count+4][i])weight[count+4]++;	
			if(answer[i] != tree[count+4][i])weight[count+5]++;
			if(answer[i] != tree[count+4][i])weight[count+6]++;
		}
		
		if(weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3]&&weight[count+1]<weight[count+4]&&weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3]&&weight[count+2]<weight[count+4]&&weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+3]<weight[count] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+1]&&weight[count+3]<weight[count+4]&&weight[count+3]<weight[count+5] && weight[count+3]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+4]<weight[count] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3]&&weight[count+4]<weight[count+1]&&weight[count+4]<weight[count+5] && weight[count+4]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+5]<weight[count] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3]&&weight[count+5]<weight[count+1]&&weight[count+5]<weight[count+4] && weight[count+5]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+6]<weight[count] && weight[count+6]<weight[count+2] && weight[count+6]<weight[count+3]&&weight[count+6]<weight[count+1]&&weight[count+6]<weight[count+4] && weight[count+6]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+6][i];
			}
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+3] && weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+4] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+5] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+6] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+3] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+6] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+2]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+6] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+4] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+5] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+4] && weight[count+3]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+6] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+4]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+6] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+5] == weight[count+6] && weight[count+5]<weight[count] && weight[count+5]<weight[count+1] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3] && weight[count+5]<weight[count+4] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){					
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+3][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+5] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+6] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+4] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+5] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+6] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+5] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+6] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+4]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count] && weight[count+3]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+6] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count] && weight[count+3]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+6] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count] && weight[count+4]<weight[count+3]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3]  && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+4]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+5]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+6]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+6] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] == weight[count+6] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4]  && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count]<weight[count+4] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+5][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6]  && weight[count]<weight[count+4] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+6][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count+1]<weight[count] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6]  && weight[count+1]<weight[count] && weight[count]<weight[count+5]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+6][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4] && weight[count]<weight[count+6] ){
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}		
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] == weight[count+4] && weight[count]<weight[count+5] ){
			for(var i=0;i<9;i++){
				tree[count+5][i] = tree[count+6][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] == weight[count+4] == weight[count+5] ){
			tree.splice(count+7,10);
			if7vershin();
			vetki = work_ravno();
			work();
		}
	}
	else if(vetki == 8){
		count = tree.length - 8;
		weight[count] = weight[count+1] = weight[count+2] = weight[count+3] = weight[count+4] = weight[count+5] = weight[count+6] = weight[count+7] = [];
		
		for(var i=0;i<9;i++){
			if(answer[i] != tree[count][i])weight[count]++;
			if(answer[i] != tree[count+1][i])weight[count+1]++;
			if(answer[i] != tree[count+2][i])weight[count+2]++;
			if(answer[i] != tree[count+3][i])weight[count+3]++;
			if(answer[i] != tree[count+4][i])weight[count+4]++;	
			if(answer[i] != tree[count+4][i])weight[count+5]++;
			if(answer[i] != tree[count+4][i])weight[count+6]++;
			if(answer[i] != tree[count+4][i])weight[count+7]++;
		}
		
		if(weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+4] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+6] && weight[count+3]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+4]<weight[count] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3]&&weight[count+4]<weight[count+1]&&weight[count+4]<weight[count+5] && weight[count+4]<weight[count+6] && weight[count+4]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+5]<weight[count] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3]&&weight[count+5]<weight[count+1]&&weight[count+5]<weight[count+4] && weight[count+5]<weight[count+6] && weight[count+5]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+6]<weight[count] && weight[count+6]<weight[count+2] && weight[count+6]<weight[count+3]&&weight[count+6]<weight[count+1]&&weight[count+6]<weight[count+4] && weight[count+6]<weight[count+5] && weight[count+6]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+6][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count+7]<weight[count] && weight[count+7]<weight[count+2] && weight[count+7]<weight[count+3]&&weight[count+7]<weight[count+1]&&weight[count+7]<weight[count+4] && weight[count+7]<weight[count+5] && weight[count+7]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+7][i];
			}
			
			tree.splice(count+1,10);
			where_zero();
		}
		else if(weight[count] == weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+2] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+3] && weight[count]<weight[count+1] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+4] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+5] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+6] && weight[count]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+6] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+5] && weight[count]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+7] && weight[count]<weight[count+1] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+5] && weight[count]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+3] && weight[count+1]<weight[count] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+6] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+7] && weight[count+1]<weight[count] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+2] && weight[count+1]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+6] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+7] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+3] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+6] && weight[count+3]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+5] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+4] && weight[count+3]<weight[count+6] && weight[count+3]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+6] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+4] && weight[count+3]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+7] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+4] && weight[count+3]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+6] && weight[count+4]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+6] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+5] && weight[count+4]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+7] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+5] && weight[count+4]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+5] == weight[count+6] && weight[count+5]<weight[count] && weight[count+5]<weight[count+1] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3] && weight[count+5]<weight[count+4] && weight[count+5]<weight[count+7]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
				tree[count+1][i] = tree[count+6][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+5] == weight[count+7] && weight[count+5]<weight[count] && weight[count+5]<weight[count+1] && weight[count+5]<weight[count+2] && weight[count+5]<weight[count+3] && weight[count+5]<weight[count+4] && weight[count+5]<weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+5][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+6] == weight[count+7] && weight[count+6]<weight[count] && weight[count+6]<weight[count+1] && weight[count+6]<weight[count+2] && weight[count+6]<weight[count+3] && weight[count+6]<weight[count+4] && weight[count+6]<weight[count+5]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+6][i];
				tree[count+1][i] = tree[count+7][i];
			}		
			tree.splice(count+2,10);
			if2vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){					
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+3] && weight[count]<weight[count+2] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+3][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+4] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+5] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+6] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+7] && weight[count]<weight[count+2] && weight[count]<weight[count+3] && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+2][i] = tree[count+7][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+4] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+5] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+6] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+7] && weight[count+1]<weight[count+3] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+7][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+5] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+6] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+7] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+4] && weight[count+2]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+7][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count] && weight[count+3]<weight[count+6] && weight[count+3]<weight[count+7] ){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+6] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+7] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count] && weight[count+3]<weight[count+5] && weight[count+3]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+7][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+6] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
				tree[count+2][i] = tree[count+6][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+7] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count] && weight[count+4]<weight[count+3] && weight[count+4]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
				tree[count+2][i] = tree[count+7][i];
			}		
			tree.splice(count+3,10);
			if3vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3]  && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+4]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+5]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+6]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+7]  && weight[count]<weight[count+3] && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+3][i] = tree[count+7][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4] && weight[count+1]<weight[count] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+6] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7] && weight[count+1]<weight[count] && weight[count+1]<weight[count+4] && weight[count+1]<weight[count+5] && weight[count+1]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+7][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+5] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+6] && weight[count+2]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+6] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+2] == weight[count+3] == weight[count+4] == weight[count+7] && weight[count+2]<weight[count] && weight[count+2]<weight[count+1] && weight[count+2]<weight[count+5] && weight[count+2]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+7][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] == weight[count+6] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
				tree[count+3][i] = tree[count+6][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+3] == weight[count+4] == weight[count+5] == weight[count+7] && weight[count+3]<weight[count] && weight[count+3]<weight[count+1] && weight[count+3]<weight[count+2] && weight[count+3]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
				tree[count+3][i] = tree[count+7][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+6] == weight[count+7] && weight[count+4]<weight[count] && weight[count+4]<weight[count+1] && weight[count+4]<weight[count+2] && weight[count+4]<weight[count+3]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+4][i];
				tree[count+1][i] = tree[count+5][i];
				tree[count+2][i] = tree[count+6][i];
				tree[count+3][i] = tree[count+7][i];
			}
			tree.splice(count+4,10);
			if4vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+4]  && weight[count]<weight[count+5] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count]<weight[count+4] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+5][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6]  && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+6][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7]  && weight[count]<weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count+4][i] = tree[count+7][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5]  && weight[count+1]<weight[count] && weight[count]<weight[count+6] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6]  && weight[count+1]<weight[count] && weight[count]<weight[count+5] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+6][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7]  && weight[count+1]<weight[count] && weight[count]<weight[count+5] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+7][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+2] == weight[count+3] == weight[count+6]  && weight[count+2]<weight[count] && weight[count]<weight[count+1] && weight[count]<weight[count+7]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];
				tree[count+4][i] = tree[count+6][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+2] == weight[count+3] == weight[count+7]  && weight[count+2]<weight[count] && weight[count]<weight[count+1] && weight[count]<weight[count+6]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];
				tree[count+4][i] = tree[count+7][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+4] == weight[count+5] == weight[count+3] == weight[count+6] == weight[count+7]  && weight[count+3]<weight[count] && weight[count]<weight[count+1] && weight[count]<weight[count+2]){	
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+3][i];
				tree[count+1][i] = tree[count+4][i];
				tree[count+2][i] = tree[count+5][i];
				tree[count+3][i] = tree[count+6][i];
				tree[count+4][i] = tree[count+7][i];
			}
			tree.splice(count+5,10);
			if5vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4] && weight[count]<weight[count+6] && weight[count]<weight[count+7] ){
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] == weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count+5][i] = tree[count+6][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7] == weight[count+4] && weight[count]<weight[count+5] && weight[count]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count+5][i] = tree[count+7][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+6] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4] && weight[count]<weight[count] && weight[count]<weight[count+7] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
				tree[count+5][i] = tree[count+6][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+7] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4] && weight[count]<weight[count] && weight[count]<weight[count+6] ){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
				tree[count+5][i] = tree[count+7][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+7] == weight[count+6] == weight[count+2] == weight[count+3] == weight[count+5] == weight[count+4] && weight[count]<weight[count] && weight[count]<weight[count+1]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+2][i];
				tree[count+1][i] = tree[count+3][i];
				tree[count+2][i] = tree[count+4][i];
				tree[count+3][i] = tree[count+5][i];
				tree[count+4][i] = tree[count+6][i];
				tree[count+5][i] = tree[count+7][i];
			}
			tree.splice(count+6,10);
			if6vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+6] == weight[count+4] == weight[count+5] && weight[count] < weight[count+7]){
			tree.splice(count+7,10);
			if7vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7] == weight[count+4] == weight[count+5] && weight[count] < weight[count+6]){
			for(var i=0;i<9;i++){
				tree[count+6][i] = tree[count+7][i];
			}
			tree.splice(count+7,10);
			if7vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+6] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7] == weight[count+4] == weight[count+5] && weight[count+1] < weight[count]){
			for(var i=0;i<9;i++){
				tree[count][i] = tree[count+1][i];
				tree[count+1][i] = tree[count+2][i];
				tree[count+2][i] = tree[count+3][i];
				tree[count+3][i] = tree[count+4][i];
				tree[count+4][i] = tree[count+5][i];
				tree[count+5][i] = tree[count+6][i];
				tree[count+6][i] = tree[count+7][i];
			}
			tree.splice(count+7,10);
			if7vershin();
			vetki = work_ravno();
			work();
		}
		else if(weight[count+6] == weight[count+1] == weight[count+2] == weight[count+3] == weight[count+7] == weight[count+4] == weight[count+5] == weight[count]){
			tree.splice(count+8,10);
			if8vershin();
			vetki = work_ravno();
			work();
		}
	}
	return;
}


function work_ravno(){
	vetki = 0;
	
	for(var k=0;k<count_vershin;k++){
		count = tree.length-1;
		
		if(ravno_tree[k][0]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = ravno_tree[k][i];
					tree[count+2][i] = ravno_tree[k][i];
				}
				tree[count+1][1] = ravno_tree[k][0]; tree[count+1][0] = ravno_tree[k][1];
				tree[count+2][3] = ravno_tree[k][0]; tree[count+2][0] = ravno_tree[k][3];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-2;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-2][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-2;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-1][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){				
					if(ravno[2]==9 || ravno[3]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+1;
						continue;
					}
				}
				else if(ravno[2]==9 || ravno[3]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+1;
					continue;
				}
				else{
					vetki = vetki+2;
					continue;
				}
			}
			if(ravno_tree[k][1]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = ravno_tree[k][i];
					tree[count+2][i] = ravno_tree[k][i];
					tree[count+3][i] = ravno_tree[k][i];
				}
				tree[count+1][0] = ravno_tree[k][1]; tree[count+1][1] = ravno_tree[k][0];
				tree[count+2][2] = ravno_tree[k][1]; tree[count+2][1] = ravno_tree[k][2];
				tree[count+3][4] = ravno_tree[k][1]; tree[count+3][1] = ravno_tree[k][4];
							
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-3;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-3][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-2][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-1][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}				
					else if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
					
				}
				else if(ravno[2]==9 || ravno[3]==9){				
					if(ravno[4]==9 || ravno[5]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
				}
				else if(ravno[4]==9 || ravno[5]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+2;
					continue;
				}
				else{
						vetki = vetki+3;
						continue;
				}
			}
			if(ravno_tree[k][2]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = ravno_tree[k][i];
					tree[count+2][i] = ravno_tree[k][i];
				}
				tree[count+1][1] = ravno_tree[k][2]; tree[count+1][2] = ravno_tree[k][1];
				tree[count+2][5] = ravno_tree[k][2]; tree[count+2][2] = ravno_tree[k][5];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-2;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-2][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-2;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-1][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){				
					if(ravno[2]==9 || ravno[3]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+1;
						continue;
					}
				}
				else if(ravno[2]==9 || ravno[3]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+1;
					continue;
				}
				else{
					vetki = vetki+2;
					continue;
				}
			}
			if(ravno_tree[k][3]==0){				
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = ravno_tree[k][i];
					tree[count+2][i] = ravno_tree[k][i];
					tree[count+3][i] = ravno_tree[k][i];
				}
				tree[count+1][0] = ravno_tree[k][3]; tree[count+1][3] = ravno_tree[k][0];
				tree[count+2][4] = ravno_tree[k][3]; tree[count+2][3] = ravno_tree[k][4];
				tree[count+3][6] = ravno_tree[k][3]; tree[count+3][3] = ravno_tree[k][6];
				
							
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-3;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-3][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-2][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-1][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}				
					else if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
					
				}
				else if(ravno[2]==9 || ravno[3]==9){				
					if(ravno[4]==9 || ravno[5]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
				}
				else if(ravno[4]==9 || ravno[5]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+2;
					continue;
				}
				else{
						vetki = vetki+3;
						continue;
				}
			}
			if(ravno_tree[k][4]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];tree[count+4] = [];
				tree.splice(count+5,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
					tree[count+4][i] = tree[count][i];
				}
				tree[count+1][3] = ravno_tree[k][4]; tree[count+1][4] = ravno_tree[k][3];
				tree[count+2][1] = ravno_tree[k][4]; tree[count+2][4] = ravno_tree[k][1];
				tree[count+3][5] = ravno_tree[k][4]; tree[count+3][4] = ravno_tree[k][5];
				tree[count+4][7] = ravno_tree[k][4]; tree[count+4][4] = ravno_tree[k][7];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-4;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-4][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-4][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-3][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-2][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[6]=ravno[7]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[6]++;
						if(tree[tree.length-1][j] == question[j])ravno[7]++;
					}
					if(ravno[6]==9 || ravno[7]==9){
						break;
					}
				}
				if(ravno[0] ==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						if(ravno[4]==9 || ravno[5]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-3,10);
							vetki = vetki+1;
							continue;
						}
						else if(ravno[6]==9 || ravno[7]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-2][i];
							}
							tree.splice(tree.length-3,10);
							vetki = vetki+1;
							continue;
						}
						else{
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-2][i];
							tree[tree.length-3][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-2,10);
							vetki = vetki+2;
							continue;
						}
							
					}						
					else if(ravno[4]==9 || ravno[5]==9){
						if(ravno[6]==9 || ravno[7]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							}
							tree.splice(tree.length-3,10);
							vetki = vetki+1;
							continue;
						}
						else{
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							tree[tree.length-3][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-2,10);
							vetki = vetki+2;
							continue;					
						}
					}
					else if(ravno[6]==9 || ravno[7]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
					}
				}				
				if(ravno[2]==9 || ravno[3]==9){
					if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+2;
						continue;
					}				
					else if(ravno[6]==9 || ravno[7]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+2;
						continue;
					}
					else{
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+3;
						continue;
					}
					
				}
				else if(ravno[4]==9 || ravno[5]==9){				
					if(ravno[6]==9 || ravno[7]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki+2;
						continue;
					}
					else{
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+3;
						continue;
					}
				}
				else if(ravno[6]==9 || ravno[7]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+3;
					continue;
				}
				else{
						vetki = vetki+4;
						continue;
				}		
			}
			if(ravno_tree[k][5]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = ravno_tree[k][i];
					tree[count+2][i] = ravno_tree[k][i];
					tree[count+3][i] = ravno_tree[k][i];
				}
				tree[count+1][4] = ravno_tree[k][5]; tree[count+1][5] = ravno_tree[k][4];
				tree[count+2][2] = ravno_tree[k][5]; tree[count+2][5] = ravno_tree[k][2];
				tree[count+3][8] = ravno_tree[k][5]; tree[count+3][5] = ravno_tree[k][8];
							
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-3;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-3][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-2][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-1][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}				
					else if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}						
				}
				else if(ravno[2]==9 || ravno[3]==9){				
					if(ravno[4]==9 || ravno[5]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
				}
				else if(ravno[4]==9 || ravno[5]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+2;
					continue;
				}
				else{
					vetki = vetki+3;
					continue;
				}				
			}
			if(ravno_tree[k][6]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][3] = ravno_tree[k][6]; tree[count+1][6] = ravno_tree[k][3];
				tree[count+2][7] = ravno_tree[k][6]; tree[count+2][6] = ravno_tree[k][7];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-2;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-2][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-2;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-1][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){				
					if(ravno[2]==9 || ravno[3]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+1;
						continue;
					}
				}
				else if(ravno[2]==9 || ravno[3]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+1;
					continue;
				}
				else{
					vetki = vetki+2;
					continue;
				}
			}
			if(ravno_tree[k][7] == 0){
				tree[count+1] = [];tree[count+2]=[];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
				}
				tree[count+1][6] = ravno_tree[k][7]; tree[count+1][7] = ravno_tree[k][6];
				tree[count+2][4] = ravno_tree[k][7]; tree[count+2][7] = ravno_tree[k][4];
				tree[count+3][8] = ravno_tree[k][7]; tree[count+3][7] = ravno_tree[k][8];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-3;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-3][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-2][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-1][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}				
					else if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}						
				}
				else if(ravno[2]==9 || ravno[3]==9){				
					if(ravno[4]==9 || ravno[5]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki+1;
						continue;
					}
					else if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+2;
						continue;
					}
				}
				else if(ravno[4]==9 || ravno[5]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+2;
					continue;
				}
				else{
					vetki = vetki+3;
					continue;
				}
			}
			if(ravno_tree[k][8]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][7] = ravno_tree[k][8]; tree[count+1][8] = ravno_tree[k][7];
				tree[count+2][5] = ravno_tree[k][8]; tree[count+2][8] = ravno_tree[k][5];
				
				ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-2;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-2][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-2;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-1][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){				
					if(ravno[2]==9 || ravno[3]==9){
						tree.splice(tree.length-2,10);
						vetki=vetki;
						continue;
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=vetki+1;
						continue;
					}
				}
				else if(ravno[2]==9 || ravno[3]==9){
					tree.splice(tree.length-1,10);
					vetki=vetki+1;
					continue;
				}
				else{
					vetki = vetki+2;
					continue;
				}			
			}
		
	}
	//alert(vetki);
	return vetki;
}

function where_zero(){
	
			if(tree[count][0]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][1] = tree[count][0]; tree[count+1][0] = tree[count][1];
				tree[count+2][3] = tree[count][0]; tree[count+2][0] = tree[count][3];
			//	alert("дерево" + tree)
				
				vetki2();
				return false;
				

			}
			else if(tree[count][1]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
				}
				tree[count+1][0] = tree[count][1]; tree[count+1][1] = tree[count][0];
				tree[count+2][2] = tree[count][1]; tree[count+2][1] = tree[count][2];
				tree[count+3][4] = tree[count][1]; tree[count+3][1] = tree[count][4];
							
				
				vetki3();
				return false;
				
			}
			else if(tree[count][2]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][1] = tree[count][2]; tree[count+1][2] = tree[count][1];
				tree[count+2][5] = tree[count][2]; tree[count+2][2] = tree[count][5];
				
				vetki2();
				return false;
			}
			else if(tree[count][3]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
				}
				tree[count+1][0] = tree[count][3]; tree[count+1][3] = tree[count][0];
				tree[count+2][4] = tree[count][3]; tree[count+2][3] = tree[count][4];
				tree[count+3][6] = tree[count][3]; tree[count+3][3] = tree[count][6];
							
				vetki3();
				return false;
				
			}
			else if(tree[count][4]==0){
				//alert('нолик в середине');
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];tree[count+4] = [];
				tree.splice(count+5,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
					tree[count+4][i] = tree[count][i];
				}
				tree[count+1][3] = tree[count][4]; tree[count+1][4] = tree[count][3];
				tree[count+2][1] = tree[count][4]; tree[count+2][4] = tree[count][1];
				tree[count+3][5] = tree[count][4]; tree[count+3][4] = tree[count][5];
				tree[count+4][7] = tree[count][4]; tree[count+4][4] = tree[count][7];
				
				vetki4();	
				return false;
			}
			else if(tree[count][5]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
				}
				tree[count+1][4] = tree[count][5]; tree[count+1][5] = tree[count][4];
				tree[count+2][2] = tree[count][5]; tree[count+2][5] = tree[count][2];
				tree[count+3][8] = tree[count][5]; tree[count+3][5] = tree[count][8];
							
				vetki3();
				return false;
				
			}
			else if(tree[count][6]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][3] = tree[count][6]; tree[count+1][6] = tree[count][3];
				tree[count+2][7] = tree[count][6]; tree[count+2][6] = tree[count][7];
				
				vetki2();
				return false;
				
			}
			else if(tree[count][7]==0){
				tree[count+1] = [];tree[count+2] = [];tree[count+3] = [];
				tree.splice(count+4,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
					tree[count+3][i] = tree[count][i];
				}
				tree[count+1][6] = tree[count][7]; tree[count+1][7] = tree[count][6];
				tree[count+2][4] = tree[count][7]; tree[count+2][7] = tree[count][4];
				tree[count+3][8] = tree[count][7]; tree[count+3][7] = tree[count][8];
							
				vetki3();
				return false;
				
			}
			else if(tree[count][8]==0){
				tree[count+1] = [];tree[count+2] = [];
				tree.splice(count+3,10);
				for(var i=0;i<9;i++){
					tree[count+1][i] = tree[count][i];
					tree[count+2][i] = tree[count][i];
				}
				tree[count+1][7] = tree[count][8]; tree[count+1][8] = tree[count][7];
				tree[count+2][5] = tree[count][8]; tree[count+2][8] = tree[count][5];
				
				vetki2();
				return false;
				
			}
}


function vetki2(){
	ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-2;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-2][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-2;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-1][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){				
					if(ravno[2]==9 || ravno[3]==9){
						tree.splice(tree.length-2,10);
						vetki=0;
						count=count+vetki;
						work();
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=1;
						count=count+vetki;
						work();
					}
				}
				else if(ravno[2]==9 || ravno[3]==9){
					tree.splice(tree.length-1,10);
					vetki=1;
					count=count+vetki;
					work();
				}
				else{
					vetki = 2;
					count=count+vetki;
					work();
				}
	return;
}
function vetki3(){
	ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-3;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-3][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-2][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-3;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-1][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				if(ravno[0]==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=1;
						count = count+vetki;
						work();
					}				
					else if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=1;
						count = count+vetki;
						work();
					}
					else if(ravno[0]==9 || ravno[1]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=2;
						count = count+vetki;
						work();
					}						
				}
				else if(ravno[2]==9 || ravno[3]==9){				
					if(ravno[4]==9 || ravno[5]==9){
						tree.splice(tree.length-2,10);
						vetki=1;
						count = count+vetki;
						work();
					}
					else if(ravno[2]==9 || ravno[3]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=2;
						count = count+vetki;
						work();
					}
				}
				else if(ravno[4]==9 || ravno[5]==9){
					tree.splice(tree.length-1,10);
					vetki=2;
					count = count+vetki;
					work();
				}
				else{
					vetki = 3;
					count = count+vetki;
					work();
				}
				return;
}
function vetki4(){
	ravno = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<tree.length-4;i++){
					ravno[0]=ravno[1]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-4][j] == tree[i][j])ravno[0]++;
						if(tree[tree.length-4][j] == question[j])ravno[1]++;
					}
					if(ravno[0]==9 || ravno[1]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[2]=ravno[3]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-3][j] == tree[i][j])ravno[2]++;
						if(tree[tree.length-3][j] == question[j])ravno[3]++;
					}
					if(ravno[2]==9 || ravno[3]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[4]=ravno[5]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-2][j] == tree[i][j])ravno[4]++;
						if(tree[tree.length-2][j] == question[j])ravno[5]++;
					}
					if(ravno[4]==9 || ravno[5]==9){
						break;
					}
				}
				for(var i=0;i<tree.length-4;i++){
					ravno[6]=ravno[7]=0;
					for(var j=0;j<9;j++){
						if(tree[tree.length-1][j] == tree[i][j])ravno[6]++;
						if(tree[tree.length-1][j] == question[j])ravno[7]++;
					}
					if(ravno[6]==9 || ravno[7]==9){
						break;
					}
				}
				if(ravno[0] ==9 || ravno[1]==9){
					if(ravno[2]==9 || ravno[3]==9){
						if(ravno[4]==9 || ravno[5]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-3,10);
							vetki = 1;
							count = count+vetki;
							work();	
						}
						else if(ravno[6]==9 || ravno[7]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-2][i];
							}
							tree.splice(tree.length-3,10);
							vetki = 1;
							count = count+vetki;
							work();	
						}
						else{
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-2][i];
							tree[tree.length-3][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-2,10);
							vetki = 2;
							count = count+vetki;
							work();	
						}
							
					}						
					else if(ravno[4]==9 || ravno[5]==9){
						if(ravno[6]==9 || ravno[7]==9){
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							}
							tree.splice(tree.length-3,10);
							vetki = 1;
							count = count+vetki;
							work();	
						}
						else{
							for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							tree[tree.length-3][i] = tree[tree.length-1][i];
							}
							tree.splice(tree.length-2,10);
							vetki = 2;
							count = count+vetki;
							work();					
						}
					}
					else if(ravno[6]==9 || ravno[7]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-4][i] = tree[tree.length-3][i];
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
							vetki = 2;
							count = count+vetki;
							work();	
					}
				}				
				if(ravno[2]==9 || ravno[3]==9){
					if(ravno[4]==9 || ravno[5]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-2,10);
						vetki=2;
						count = count+vetki;
						work();	
					}				
					else if(ravno[6]==9 || ravno[7]==9){
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
						}
						tree.splice(tree.length-2,10);
						vetki=2;
						count = count+vetki;
						work();	
					}
					else{
						for(var i=0;i<9;i++){
							tree[tree.length-3][i] = tree[tree.length-2][i];
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=3;
						count = count+vetki;
						work();	
					}
					
				}
				else if(ravno[4]==9 || ravno[5]==9){				
					if(ravno[6]==9 || ravno[7]==9){
						tree.splice(tree.length-2,10);
						vetki=2;
						count = count+vetki;
						work();	
					}
					else{
						for(var i=0;i<9;i++){
							tree[tree.length-2][i] = tree[tree.length-1][i];
						}
						tree.splice(tree.length-1,10);
						vetki=3;
						count = count+vetki;
						work();	
					}
				}
				else if(ravno[6]==9 || ravno[7]==9){
					tree.splice(tree.length-1,10);
					vetki=3;
					count = count+vetki;
					work();	
				}
				else{
					vetki = 4;
					count = count+vetki;
					work();	
				}	
				return;
}

function if2vershin(){
	ravno_tree[0] = [];ravno_tree[1] = [];
			ravno_tree.splice(2,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-2][i];
				ravno_tree[1][i] = tree[tree.length-1][i];
			}
			count_vershin = 2;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if3vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = [];
			ravno_tree.splice(3,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-3][i];
				ravno_tree[1][i] = tree[tree.length-2][i];
				ravno_tree[2][i] = tree[tree.length-1][i];
				
			}
			count_vershin = 3;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if4vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = []; ravno_tree[3] =[];
			ravno_tree.splice(4,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-4][i];
				ravno_tree[1][i] = tree[tree.length-3][i];
				ravno_tree[2][i] = tree[tree.length-2][i];
				ravno_tree[3][i] = tree[tree.length-1][i];
				
			}
			count_vershin = 4;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if5vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = []; ravno_tree[3] =[]; ravno_tree[4] =[];
	ravno_tree.splice(5,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-5][i];
				ravno_tree[1][i] = tree[tree.length-4][i];
				ravno_tree[2][i] = tree[tree.length-3][i];
				ravno_tree[3][i] = tree[tree.length-2][i];
				ravno_tree[4][i] = tree[tree.length-1][i];
				
			}
			count_vershin = 5;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if6vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = []; ravno_tree[3] =[]; ravno_tree[4] =[];ravno_tree[5] =[];
	ravno_tree.splice(6,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-6][i];
				ravno_tree[1][i] = tree[tree.length-5][i];
				ravno_tree[2][i] = tree[tree.length-4][i];
				ravno_tree[3][i] = tree[tree.length-3][i];
				ravno_tree[4][i] = tree[tree.length-2][i];
				ravno_tree[5][i] = tree[tree.length-1][i];
			}
			count_vershin = 6;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if7vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = []; ravno_tree[3] =[]; ravno_tree[4] =[];ravno_tree[5] =[];ravno_tree[6] =[];
	ravno_tree.splice(7,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-7][i];
				ravno_tree[1][i] = tree[tree.length-6][i];
				ravno_tree[2][i] = tree[tree.length-5][i];
				ravno_tree[3][i] = tree[tree.length-4][i];
				ravno_tree[4][i] = tree[tree.length-3][i];
				ravno_tree[5][i] = tree[tree.length-2][i];
				ravno_tree[6][i] = tree[tree.length-1][i];
			}
			count_vershin = 7;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}
function if8vershin(){
	ravno_tree[0] = [];ravno_tree[1] = []; ravno_tree[2] = []; ravno_tree[3] =[]; ravno_tree[4] =[];ravno_tree[5] =[];ravno_tree[6] =[];ravno_tree[7] =[];
	ravno_tree.splice(8,10);
			for(var i =0;i<9;i++){
				ravno_tree[0][i] = tree[tree.length-8][i];
				ravno_tree[1][i] = tree[tree.length-7][i];
				ravno_tree[2][i] = tree[tree.length-6][i];
				ravno_tree[3][i] = tree[tree.length-5][i];
				ravno_tree[4][i] = tree[tree.length-4][i];
				ravno_tree[5][i] = tree[tree.length-3][i];
				ravno_tree[6][i] = tree[tree.length-2][i];
				ravno_tree[7][i] = tree[tree.length-1][i];
			}
			count_vershin = 8;
			index_razvetvleniya[ir] = count;
			vershini[ir] = count_vershin;ir++;
			return;
}

function end(){
	var nn =999;
	if(zevershenie ==0){
		for(var i=0;i<tree.length;i++){
			final_tree[i] = [];
			for(var j=0;j<9;j++){
				final_tree[i][j]=tree[i][j];
			}
		}
		zevershenie++;
		
		
		
		for(var i = 0;i<final_tree.length;i++){	
			
			br1 = document.createElement('br');
			document.body.appendChild(br1);	
			for(var k=0;k<index_razvetvleniya.length;k++){
				if(index_razvetvleniya[k] == i){
					for(var n=0;n<3;n++){
						br1 = document.createElement('br');
						document.body.appendChild(br1);	
						for(var m=0;m<vershini[k];m++){
							matrica_div[i+m] = [];
							if(n == 0){
								for(var j=0; j<3;j++){
									div = document.createElement('div');		
									document.body.appendChild(div);			
									matrica_div[i+m][j] = div;
									matrica_div[i+m][j].style.width='30px';
									matrica_div[i+m][j].style.height='30px';
									matrica_div[i+m][j].style.background='red';
									matrica_div[i+m][j].style.outline = '1px solid #000';
									matrica_div[i+m][j].style.display = 'inline-block';
			
									matrica_div[i+m][j].innerHTML = final_tree[i+m][j];
								}
							}
							else if(n == 1){
								for(var j=3;j<6;j++){
									div = document.createElement('div');		
									document.body.appendChild(div);	
									matrica_div[i+m][j] = div;
									matrica_div[i+m][j].style.width='30px';
									matrica_div[i+m][j].style.height='30px';
									matrica_div[i+m][j].style.background='red';
									matrica_div[i+m][j].style.outline = '1px solid #000';
									matrica_div[i+m][j].style.display = 'inline-block';
			
									matrica_div[i+m][j].innerHTML = final_tree[i+m][j];
								}
							}	
							else if(n == 2){	
								for(var j=6;j<9;j++){
									div = document.createElement('div');		
									document.body.appendChild(div);	
									matrica_div[i+m][j] = div;
									matrica_div[i+m][j].style.width='30px';
									matrica_div[i+m][j].style.height='30px';
									matrica_div[i+m][j].style.background='red';
									matrica_div[i+m][j].style.outline = '1px solid #000';
									matrica_div[i+m][j].style.display = 'inline-block';
			
									matrica_div[i+m][j].innerHTML = final_tree[i+m][j];
									
								}
							}
							
						}
					}
					i=i+vershini[k];
					br1 = document.createElement('br');
					document.body.appendChild(br1);	
				}
			}
			matrica_div[i] = [];
			//alert(i);
			
			for (var j = 0;j<9;j++){
				if(j%3 == 0){
					br1 = document.createElement('br');
					document.body.appendChild(br1);			
				}
				div = document.createElement('div');		
				document.body.appendChild(div);	
				matrica_div[i][j] = div;
				matrica_div[i][j].style.width='30px';
				matrica_div[i][j].style.height='30px';
				matrica_div[i][j].style.background='red';
				matrica_div[i][j].style.outline = '1px solid #000';
				matrica_div[i][j].style.display = 'inline-block';
			
				matrica_div[i][j].innerHTML = final_tree[i][j];
			}
						
		}
		alert("Раскрыто " +final_tree.length+" вершин");
		
	}
	
	return;
}