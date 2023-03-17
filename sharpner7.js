var itemList=document.querySelector('#items');
//parent element
console.log(itemList.parentElement);
//lastElementChild
console.log(itemList.lastElementChild);
//first element child
console.log(itemList.firstElementChild);
//first child
console.log(itemList.firstChild);
//next sibling
console.log(itemList.nextSibling);
//next element sibling
console.log(itemList.nextElementSibling);
//previous sibling
console.log(itemList.previousSibling);
//previous element sibling
console.log(itemList.previousElementSibling);
//create-element,set-attribute,create-next-node,append-child
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello';
newDiv.setAttribute('title','hello div');

var newDivtext=document.createTextNode("hello world");
newDiv.appendChild(newDivtext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);


var parentNode=document.getElementById('items');
parentNode.innerHTML='<li class="list-group-item">hello wold</li>'+parentNode.innerHTML;
