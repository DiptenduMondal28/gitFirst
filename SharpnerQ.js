var colorG=document.querySelector('.list-group-item:nth-child(3)');
colorG.style.visibility="hidden";
var colorG2=document.querySelector('.list-group-item:nth-child(2)');
colorG2.style.backgroundColor='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
