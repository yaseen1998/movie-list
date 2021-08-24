let form = document.getElementById('form')
let tableplace = document.getElementById('table')
let table = document.createElement('table')
tableplace.appendChild(table)
function addmovie(category,image,name,years){
    this.name = name
    this.category = category
    this.years = years
    this.image = image
    addmovie.all.push(this)
}
addmovie.all = []
addmovie.prototype.render= function(){
let tr = document.createElement('tr')
table.appendChild(tr)

let td0 =document.createElement('td')
td0.textContent = 'X'
tr.appendChild(td0)

let td4 =document.createElement('td')
let img = document.createElement('img')
img.src = './img/'+this.image
td4.appendChild(img)
tr.appendChild(td4)


let td2 =document.createElement('td')
td2.textContent = this.category
tr.appendChild(td2)



let td1 =document.createElement('td')
td1.textContent = this.name
tr.appendChild(td1)

let td3 =document.createElement('td')
td3.textContent = this.years
tr.appendChild(td3)
}
getdata()

form.addEventListener('submit',newmovie)
function newmovie(event){
    event.preventDefault()
    let moviename = event.target.moviename.value
    let moviecategory = event.target.moviecategory.value
    let categorymovie = moviecategory.split(' ')
    let movieyears = event.target.issueyear.value
    console.log(moviename,moviecategory,movieyears)
    let addnewmovie = new addmovie (categorymovie[0],categorymovie[1],moviename,movieyears)
    addnewmovie.render()
    localStorage.movie = JSON.stringify(addmovie.all)
    form.reset()

}


function getdata(){
    let local = JSON.parse (localStorage.getItem('movie')) || []
   console.log(local)
    for(let i =0;i<local.length;i++){
        let oldmovie = new addmovie(local[i].category,local[i].image,local[i].name,local[i].years)
        oldmovie.render()

    }
}
table.addEventListener('click',removeitem)
function removeitem(event){
let target = event.target.innerText
if(target == 'X'){
    let child =  parseInt(event.target.parentElement.rowIndex)
    event.target.parentElement.remove()
    addmovie.all.splice(child,1)
    localStorage.movie = JSON.stringify(addmovie.all)

}


}
function myFunction() {
    form.removeEventListener('submit',newmovie)

    localStorage.clear()
    location.reload()
}


