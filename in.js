let button = document.getElementById('button');
let buttonn = document.getElementById('buttonn');
let que = document.getElementById('que');
let ans = document.getElementsByName('ong');
let aa =document.getElementById('aa');
let bb =document.getElementById('bb');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let reset =document.getElementById('reset');
let tyui = document.getElementById('tyui');
let len = ans.length;
let times = 1;
let bunki = 0;
let mori = document.getElementById('mori2');
let morikirikae = 1;
function a() {
  window.location.href = "index2.html";
}
if(button)button.addEventListener('click',a);

function b() {
  tyui.style.opacity=0;
  let checkvalue='';
  let handan="";
  for(let i=0;i<len;i++){
    if(ans.item(i).checked){
      checkvalue=ans.item(i).value;
      handan =checkvalue+','+times+','+bunki;
    }
  }
  switch(handan){
    case'aru,1,0':
      que.textContent='Q2.記述を除いた自己採点結果は？';
      aa.textContent='120点以上';
      bb.textContent='120点未満';
      yes.checked=false;
      no.checked=false;
      times = 2;
      bunki = 1;
      break;
    case'nai,1,0':
      que.textContent='Q2.過去2年以内の受験経験は？';
      aa.textContent='あり';
      bb.textContent='なし';
      yes.checked=false;
      no.checked=false;
      times = 2;
      bunki = -1;
      break;
    case'nai,2,1':
    case'nai,2,-1':
    case'aru,3,1':
    case'nai,3,-1':
      localStorage.setItem("courseType", "normal");
      window.location.href = "index3.html";
      break;
    case'aru,2,1':
      que.textContent='Q3.大きな知識の抜け・\n苦手科目がある';
      aa.textContent='ある';
      bb.textContent='ない';
      yes.checked=false;
      no.checked=false;
      times = 3;
      bunki = 1;
      break;
    case'aru,2,-1':
      que.textContent='Q3.その際の記述込みの点数は？';
      aa.textContent='120点以上';
      bb.textContent='120点未満';
      yes.checked=false;
      no.checked=false;
      times = 3;
      bunki = -1;
      break;
    case'nai,3,1':
      localStorage.setItem("courseType", "special");
      window.location.href = "index3.html";
      break;
    case'aru,3,-1':
      que.textContent= 'Q4.大きな知識の抜け・\n苦手科目がある';
      aa.textContent='ある';
      bb.textContent='ない';
      yes.checked=false;
      no.checked=false;
      times = 3;
      bunki = 1;
      break;
    default:
      tyui.style.opacity=1;
      morikirikae = morikirikae+2;
  }
  if (morikirikae===1){
    mori.src = "morit3.png";
    morikirikae=0;
  }
  else if (morikirikae===0) {
    mori.src = "morit2.png";
    morikirikae=1;
  }
  else {
    morikirikae = morikirikae-2;
  }
}
if(buttonn)buttonn.addEventListener('click',b);
function c(){
  window.location.href="index.html";
  times = 1;
  bunki = 0;
  localStorage.removeItem('corseType');
}
if(reset)reset.addEventListener('click',c);