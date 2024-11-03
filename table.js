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
createHTMLElement('table', 'personTable', document.body)
createHTMLElementWithParentId('thead', 'personThead', 'personTable')
createHTMLElementWithParentId('tr', 'personTr1', 'personThead')
createTableHeaderElements()
createHTMLElementWithParentId('tbody', 'personTbody', 'personTable')
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
    if (validateFields() == true){
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
        renderTable(array)
        form.reset()
    }
})
renderTable(array)