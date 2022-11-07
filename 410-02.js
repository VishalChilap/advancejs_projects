let input=document.querySelector('#input');
let searchbtn = document.querySelector("#search");
let apikey = "5bc74f3c-bc3f-4e42-8966-e98f83a0fb3d";
let notFound = document.querySelector(".not_found");
let defBox = document.querySelector(".def");

searchbtn.addEventListener('click',function(e){
    e.preventDefault();
    // console.log(input);
    notFound.innerHTML="";
    defBox.innerHTML="";
    let word=input.value;
    if(word===''){
        alert('No word typed')
        return ;
    }
    Getdata(word);
})

async function Getdata(word){
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apikey}`
    );
    const data=await response.json();
     console.log(data);
   if(typeof data[0]==='string'){
    let heading =document.createElement('h3');
    heading.innerHTML='Did you mean?'
    notFound.appendChild(heading);
    data.forEach(element => {
        let suggestion=document.createElement('span');
        suggestion.classList.add('suggested');
        suggestion.innerHTML=element;
        notFound.appendChild(suggestion);
    });
    return;
   }
    let defination=data[0].shortdef[0];
    defBox.innerHTML=defination;

}



