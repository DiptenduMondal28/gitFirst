function myFunc(event){
    event.preventDefault();

  var fullName=document.getElementById('name').value;
  // var number=document.getElementById('Number').value;
  // var email=document.getElementById('email').value;

var myObj={
  name:document.getElementById('name').value,
  emailobj:document.getElementById('Number').value,
  no:document.getElementById('email').value
};
let myObjSerial=JSON.stringify(myObj);
localStorage.setItem(myObj.name,myObjSerial);
// edit(myObj);
showandDelete(myObj);
//edit(myObj);
}
function showandDelete(myObj){
    const parentElement=document.getElementById('users');
    //
    const childElement=document.createElement('li');
    childElement.textContent='name:  '+myObj.name+' number: '+myObj.no+' email: '+myObj.emailobj;

    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    
    deleteButton.onclick=()=>{
        localStorage.removeItem(myObj.name);
        parentElement.removeChild(childElement);
    }
    const editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    
    editButton.onclick=()=>{
        // localStorage.removeItem(myObj.name);
        // parentElement.removeChild(childElement);
        document.getElementById('name').value=myObj.name;
        //document.getElementById('Number').value=myObj.no;
        document.getElementById('email').value=myObj.emailobj;
        localStorage.removeItem(myObj.name);
        parentElement.removeChild(childElement);
    }
    
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);


}
