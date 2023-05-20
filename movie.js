//creating variables for API generation

const APILINK='' //specifies link of API
const IMG_PATH=''
const SEARCHAPI=''

//when user searches , we  need a function that will get the result //
const main=document.getElementById('section')
const form=document.getElementById('form')
const search=document.getElementById('search')

//calling the functiom
returnMovies(APILINK)

function returnMovies(url){
    fetch(url).then(res=>res.json())//fetch from the url + get json response// 
    .then(function(data){
        console.log(data.results)
        dat.results.array.forEach(element => {
            const div =document.createElement('div')
            
        });
    });
}

//CREATING ALL HTML TAGS USING THE JS SO THAT EVERYHIN WE GENERATE WILL BE EXECUTED
const div_card=document.createElement('div')
div_card.setAttribute('class', 'card')
const div_row=document.createElement('div')
div_row.setAttribute('class','row')
const div_colomn=document.createElement('div')
div_colomn.setAttribute('class','colomn')
const div_center=document.createElement('cenetr')
div_center.setAttribute('class','center')
const div_title=document.createElement('h3')
div_title.setAttribute('class','title')
const div_image=document.createElement('img')
div_image.setAttribute('class' , 'img')
div_image.setAttribute('id','img')

//title shows movie title + img=img of that specic title
title.innerHTML=`${element.title}`//ehenever we get a response from e API , movie name returned as title
img.src=IMG_PATH+element.poster_path//giving the attribute of src a val + returning a link to the img as poster_path

div_center.appendChild(div_image)//adding the img tag under e center
div_card.appendChild(div_center)
div_card.appendChild(div_title)
div_colomn.appendChild(div_card)
div_row.appendChild(div_colomn)

main.appendChild(div_row)

//creating event listeners for forms so that when forms are submitted ,we get e value of the form
form.addEventListener('submit', e=>{
    e.preventDefault();
    main.innerHTML='' //clears prev wuery when there is a new search
})
const searchItem=search.value //replacing prev search with a new search
if (searchItem){ //if thers a result for the searched item , return moves
    returnMovies(SEARCHAPI+searchItem) 
    search.value='' //if a person hits enter , return e result and clear the search bar
}