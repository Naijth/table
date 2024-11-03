//What this does basically is it creates the entirety of the table using the createTableCell function and adds an eventlistener which applies the selected group to the things 
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
//Using the given id in the forms this checks whether firstname1, lastname and pet have values and if they do not, it refuses to add the new item to the list
//and writing out "kötelező" under them
function validateFields(){
    let result = true;
    if (document.getElementById('firstname1').value == ''){
        const father = firstname1.parentElement
        const error = father.querySelector('.error');
        error.innerHTML = 'kötelező'
        result = false
    }
    if (document.getElementById('lastname').value == ''){
        const father = lastname.parentElement
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }
    if (document.getElementById('pet').value == ''){
        const father = pet.parentElement
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező';
        result = false
    }
    return result
}
//A universal createElement function which requires (what you want to create, a custom id, the parent that you're attaching it to)
function createHTMLElement(tag, id, parent){
    const a = document.createElement(tag)
    a.id = id
    parent.appendChild(a)
}
//A universal createElement function that uses id, which requires (what you want to create, a custom id, the parent's id that you're attaching it to)
function createHTMLElementWithParentId(tag, id, parentId){
    const parentElement = document.getElementById(parentId)
    if (parentElement != undefined){
        createHTMLElement(tag, id, parentElement)
    }
}
//A function solely used to add a cell to a table, but could be used to do more. It requires (what you want to make, the text inide it, the parent you're attaching it to)
function createTableCell(tagName, innerHTML, parentElement){
    const a = document.createElement(tagName)
    a.innerHTML = innerHTML
    parentElement.appendChild(a)
    return a
}
//A function that's only purpose is to make the header for the table
function createTableHeaderElements(){
    const parentElement = document.getElementById('personTr1')
    createTableCell('th', 'Vezetéknév', parentElement)
    const asd = createTableCell('th', 'Keresztnév', parentElement)
    asd.colSpan = 2
    createTableCell('th', 'Házassági státusz', parentElement)
    createTableCell('th', 'Háziállat', parentElement)
}