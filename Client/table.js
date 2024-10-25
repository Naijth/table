const rowTag = "td"
class PersonData
{
    constructor(firstname1 , firstname2, lastname, married, pet, id = 0)
    {
        this.id = id
        this.firstname1 = firstname1
        this.firstname2 = firstname2 ?? ""
        this.lastname = lastname
        this.married = married
        this.pet = pet
    }
}
let persons = []
window.persons = persons
LoadData()
createHTMLElement('table', 'personTable', document.body)
createHTMLElementWithParentId('thead', 'personThead', 'personTable')
createHTMLElementWithParentId('tr', 'personTr1', 'personThead')
createTableHeaderElements()
createHTMLElementWithParentId('tbody', 'personTbody', 'personTable')
const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    person = (getDataFromForm())
    if (validateFields(person) == true){
        persons.push(person)
        SaveData(person)
        renderTable()
    }
})