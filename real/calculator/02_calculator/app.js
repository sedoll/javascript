var inp = document.forms['cal'];  // 변수 선언
var input = inp.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];

function clr(){  inp['result'].value = 0; } // 계산기에 처음부터 보여지는 값 초기화(clear)

function calc(value){  // 계산기 입력 처리 함수
  if(inp['result'].value == 0){     inp['result'].value = '';  }  // 입력이 들어가면 0을 지움
  inp['result'].value += value; // 입력값을 결과창에 출력
}

function my_result(){  // 계산 결과 처리 함수
  var result = document.forms['cal']['result'];
  var calc = eval(result.value); 
  inp['result'].value = calc;    //결과창에 표시
}

for(var i = 0; i < input.length;i++){  // 숫자 및 사칙연산 버튼
  if(input[i].value != '=' && input[i].value !='clear'){ // 숫자와 사칙 연산자만 입력 처리
    input[i].onclick = function(){      calc(this.value);    }
  } // end if
} // end for

cls_btn.onclick = function(){  clr(); }  // 초기화  버튼
result_btn.onclick = function(){  // 결과 버튼
  try{    my_result();    }
  catch(err){    var result = inp['result'];    result.value = '입력오류';  }
}