function renderTable(data = null)
{
    const tbody = document.getElementById('personTbody')
    tbody.innerHTML = "";
    if(data != null)
        {
            persons.push(data)
        }
    for(const pers of persons)
        {
            const tr2 = document.createElement('tr')
            tbody.appendChild(tr2)

            createRows(pers, tr2)
    tr2.addEventListener('click', function(e){
        selected = tbody.querySelector('.selected')
        if(selected != 'undefined'){
            e.currentTarget.classList.add('selected')
            selected.classList.remove('selected')
        }
    })
    }
}

function validateFields(person){
    let result = true;
    const father = lastname.parentElement
    if (person.firstname1 == ''){
        const error = father.querySelector('.error');
        error.innerHTML = 'kötelező'
        result = false
    }
    if (person.lastname == ''){
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }
    if (person.pet == ''){
        const error = father.querySelector('.error')
        error.innerHTML = 'kötelező';
        result = false
    }
    if(person.firstname2 == '')
        {
            person.firstname2 = 'Undefined'
        }
    return result
}

function createRows(persData, tr2)
{
    createTableCell(rowTag, persData.firstname1, tr2)
    createTableCell(rowTag, persData.firstname2, tr2)
    createTableCell(rowTag, persData.lastname, tr2)
    createTableCell(rowTag, persData.married, tr2)
    createTableCell(rowTag, persData.pet, tr2)
}

//Acquires data from the form
function getDataFromForm()
{
    married = false;
    if(document.getElementById('married').value == "on")
        {
            married = true
        }
    return new PersonData(
        document.getElementById('firstname1').value,
        document.getElementById('firstname2').value,
        document.getElementById('lastname').value,
        married,
        document.getElementById('pet').value
    )
}

//Handles the creation of individual cells
function createTableCell(tagName, innerHTML, parentElement){
    const tag = document.createElement(tagName)
    tag.innerHTML = innerHTML
    parentElement.appendChild(tag)
    return tag
}

// Saves data to the server
function SaveData(data){
    console.log(data.id)
    fetch('http://localhost:8080/', { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.text())
    .then(data => {
        console.log("Server Response:", data)
    })
    .catch(error => {
        console.error("Error:", error)
    })
}

//Loads all data on the server
function LoadData() {
    fetch('http://localhost:8080/?action=Get-All', { 
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { 
        data.forEach(element => {
            console.log(element.firstname1)
            persons.push(new PersonData(element.firstname1, element.firstname2, element.lastname, element.married, element.pet, element.id))
            renderTable()
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);  // Handle any errors
    });
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