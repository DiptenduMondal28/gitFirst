var item=document.getElementsByClassName('list-group-item');
// console.log(item);
// item[1].style.fontWeight='bold';
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
    if(i==3){
        item[i].style.backgroundColor='green';
    }
}
var itemx=document.getElementsByClassName('job-title');
itemx[0].style.backgroundColor='yellow';

var itemy=document.getElementsByTagName('li');
console.log(itemy[4]);
itemy[4].style.fontWeight='bold';