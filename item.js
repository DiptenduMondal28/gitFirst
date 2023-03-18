var form=document.getElementById('addForm');//from where it comes
var itemList=document.getElementById('items');//to where it goes
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;
    //create new li element 
    var li=document.createElement('li');
    //add item
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newItem2));
    //create deletebutton
    var deletebutton=document.createElement('button');
    //add class to del button
    deletebutton.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deletebutton.appendChild(document.createTextNode('X'));
    //append to li
    li.appendChild(deletebutton);
    //edit button.
    itemList.appendChild(li);
}
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    //console.log(items);
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else if(itemName2.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });

}