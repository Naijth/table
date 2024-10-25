function renderTable(personArray){
    const tbody = document.getElementById('personTbody')
    tbody.innerHTML = "";
    for(const pers of personArray){
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
function createHTMLElement(tag, id, parent){
    const a = document.createElement(tag)
    a.id = id
    parent.appendChild(a)
}
function createHTMLElementWithParentId(tag, id, parentId){
    const parentElement = document.getElementById(parentId)
    if (parentElement != undefined){
        createHTMLElement(tag, id, parentElement)
    }
}
function createTableCell(tagName, innerHTML, parentElement){
    const a = document.createElement(tagName)
    a.innerHTML = innerHTML
    parentElement.appendChild(a)
    return a
}
function createTableHeaderElements(){
    const parentElement = document.getElementById('personTr1')
    createTableCell('th', 'Vezetéknév', parentElement)
    const asd = createTableCell('th', 'Keresztnév', parentElement)
    asd.colSpan = 2
    createTableCell('th', 'Házassági státusz', parentElement)
    createTableCell('th', 'Háziállat', parentElement)
}