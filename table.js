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
const th1 = document.createElement('th')
tr1.appendChild(th1)
th1.innerHTML = 'Vezetéknév';
const th2 = document.createElement('th')
tr1.appendChild(th2)
th2.innerHTML = 'Keresztnév';
th2.colSpan = 2
const th3 = document.createElement('td')
tr1.appendChild(th3)
th3.innerHTML = 'Házassági státusz';
const th4 = document.createElement('th')
tr1.appendChild(th4)
th4.innerHTML = 'Háziállat';
const tbody = document.createElement('tbody')
table.appendChild(tbody)
for(const pers of array){
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
    const td1 = document.createElement('td')
    tr2.appendChild(td1)
    tr2.addEventListener('click', function(e){
        selected = tbody.querySelector('.selected')
        if(selected != 'undefined'){
            e.currentTarget.classList.add('selected')
            selected.classList.remove('selected')
        }
    })
    td1.innerHTML = pers.lastname
    const td2 = document.createElement('td')
    tr2.appendChild(td2)
    td2.innerHTML = pers.firstname1
    if(pers.firstname2 == undefined){
        td2.colSpan = 2
    }else{
    const td3 = document.createElement('td')
    tr2.appendChild(td3)
    td3.innerHTML = pers.firstname2    
    }
    const td4 = document.createElement('td')
    tr2.appendChild(td4)
    if(pers.married == true){
        td4.innerHTML = 'Házas'
    }else{
        td4.innerHTML = 'Nem házas'
    }
    const td5 = document.createElement('td')
    tr2.appendChild(td5)
    td5.innerHTML = pers.pet
}