let display = document.getElementById('display');

function appendValue(num){
  if (display.value === '0'|| display.value ==='Error'){
    display.value = num;
  }else{
    display.value +=num;
  }
  console.log(num);
}


function clearDisplay(){
  display.value = '0';
}

function deleteLast(){
  if (display.value.length>1){
    display.value = display.value.slice(0,-1);
  }else{
    display.value = '0';
  }
}

function calculate(){
  display.value = eval(display.value);
}