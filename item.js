var form=document.getElementById('addForm');//from where it comes
var itemList=document.getElementById('items');//to where it goes
//form submit event
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    //create new li element 
    var li=document.createElement('li');
    //add item
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create deletebutton
    var deletebutton=document.createElement('button');
    //add class to del button
    deletebutton.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deletebutton.appendChild(document.createTextNode('X'));
    //append to li
    li.appendChild(deletebutton);
    //edit button.
    var editB=document.createElement('button');
    editB.className='btn btn-warning btn-sm float-right edit';
    editB.appendChild(document.createTextNode('edit'));
    li.appendChild(editB);
    //append li to list
    itemList.appendChild(li);
}
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
var editButton=document.createElement('button');
editButton.className='btn btn-warning btn-sm float-right edit';
editButton.appendChild(document.createTextNode('edit'));
var createEdit=document.createElement('li');
createEdit.appendChild(editButton);
itemList.appendChild('li');