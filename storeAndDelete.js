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
showandDelete(myObj);
}
function showandDelete(myObj){
    const parentElement=document.getElementById('users');
    //
    const childElement=document.createElement('li');
    childElement.textContent='name:  '+myObj.name+' email: '+myObj.emailobj+' number: '+myObj.no;

    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    // childElement.appendChild(deleteButton);
    // parentElement.appendChild(childElement);
    deleteButton.onclick=()=>{
        localStorage.removeItem(myObj.name);
        parentElement.removeChild(childElement);
    }
    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);


}