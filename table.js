const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
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
const tbody = document.createElement('tbody')
table.appendChild(tbody)
for(const pers of array){
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
    const td1 = document.createElement('td')
    tr2.appendChild(td1)
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
}