let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
const table = document.createElement('table')
document.body.appendChild(table)
const thead = document.createElement('thead')
table.appendChild(thead)
const tr1 = document.createElement('tr')
thead.appendChild(tr1)
createTableCell('th', 'Vezetéknév', tr1)
const asd = createTableCell('th', 'Keresztnév', tr1) 
asd.colSpan = 2
createTableCell('th', 'Házassági státusz', tr1)
createTableCell('th', 'Háziállat', tr1)
const tbody = document.createElement('tbody')
table.appendChild(tbody)
const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById('lastname')
    const firstname1 = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const married = document.getElementById('married')
    const pet = document.getElementById('pet')
    const lastnameValue = lastname.value
    const firstname1Value = firstname1.value
    let firstname2Value = firstname2.value
    const marriedValue = married.checked
    const petValue = pet.value
    if (validateFields(firstname1, lastname, pet) == true){
        if (firstname2Value == '')
            firstname2Value = undefined;
        const newPerson = {
            firstname1: firstname1Value,
            firstname2: firstname2Value,
            lastname: lastnameValue,
            married: marriedValue,
            pet: petValue
        }
        array.push(newPerson)
        renderTable()
        form.reset()
    }
})
renderTable()
function renderTable(){
    tbody.innerHTML = "";
    for(const pers of array){
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
    tr2.addEventListener('click', function(e){
        selected = tbody.querySelector('.selected')
        if(selected != 'undefined'){
            e.currentTarget.classList.add('selected')
            selected.classList.remove('selected')
        }
    })
    createTableCell('td', pers.lastname, tr2)
    if(pers.firstname2 == undefined){
        const wah = createTableCell('td', pers.firstname1, tr2)
        wah.colSpan = 2
    }else{
        createTableCell('td', pers.firstname1, tr2)
        createTableCell('td', pers.firstname2, tr2)
    }
    if(pers.married == true){
        createTableCell('td', 'Házas', tr2)
    }else{
        createTableCell('td', 'Nem házas', tr2)
    }
    createTableCell('td', pers.pet, tr2)
    }
}
function validateFields(firstname1, lastname, pet){
    let result = true;
    if (firstname1.value == ''){
        const father = firstname1.parentElement
        const error = father.querySelector('.error');
        error.innerHTML = 'kötelező'
        result = false
    }
    if (lastname.value == ''){
        const father = lastname.parentElement
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }
    if (pet.value == ''){
        const father = pet.parentElement
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező';
        result = false
    }
    return result
}
function createTableCell(tagName, innerHTML, parentElement){
    const tag = document.createElement(tagName)
    tag.innerHTML = innerHTML
    parentElement.appendChild(tag)
    return tag
}