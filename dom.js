var item=document.getElementsByClassName('list-group-item');
console.log(item);
// item[1].style.fontWeight='bold';
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
    if(i==3){
        item[i].style.backgroundColor='green';
    }
}