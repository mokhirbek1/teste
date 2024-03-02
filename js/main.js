let myForm = document.getElementById('myForm')
let name = document.getElementById('name')
let ship = document.getElementById('ship')
let Phone = document.getElementById('phone')
let contacts = document.getElementById('contacts')
let contact__info = document.getElementById('contact__info')

myForm.addEventListener('submit', function () {
    let userName = name.value
    let userShip = ship.value
    let userPhone = Phone.value

    let contact = document.createElement('div')
    contact.innerHTML = `
   <h1 class="title__name">${userName}</h1>
   <h1 class="title__ship">${userShip}</h1>
   <h1 class="title__number">${userPhone}</h1>
   <button class="delete__btn">delete</button>
   <button class="update__btn">update</button>`

    contact.classList.add('contact__info')


    contacts.append(contact)
    myForm.reset()
    
})




contacts.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete__btn')) {
        let contactRemove = event.target.parentNode;
        contacts.removeChild(contactRemove);
    }

    if (event.target.classList.contains('update__btn')) {
        let contactUpdate = event.target.parentNode;
        let userName = prompt('Ismni kiriting:');
        let userShip = prompt('Shaxsini kiriting:');
        let userPhone = prompt('Rqamini kiriting:');

        contactUpdate.querySelector('.title__name').textContent = userName;
        contactUpdate.querySelector('.title__ship').textContent = userShip;
        contactUpdate.querySelector('.title__number').textContent = userPhone;
    }
});
