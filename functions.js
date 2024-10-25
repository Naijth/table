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