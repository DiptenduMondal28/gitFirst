function myFunc(event){
    event.preventDefault();

    var fullName=document.getElementById('name').value;
    var number=document.getElementById('Number').value;
    var email=document.getElementById('email').value;

    localStorage.setItem('name',fullName);
    localStorage.setItem('email',email);
    localStorage.setItem('number',number);
}
