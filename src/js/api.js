const api_base= 'https://api.watchmode.com/v1/sources/?apiKey=ziEbavItYrrRIfjrT8Kk332m3icXRzrDyyyrkvC2';

const melhor=document.addEventListener('click',() => search.value)

function lista(){
 
 fetch(api_base)
  .then((response) => response.json()
  .then((data) => exibirDados(data)))
}
lista();
const exibirDados = (data) => {
 
      for (let index = 0; index < 225; index++) {
   
    const filmes = {
      id: data[index].id,
      name: data[index].name,
      imagem: data[index].logo_100px,
      app: data[index].ios_appstore_url
    }
    if(data[index].name === search.value){

    const titleFilme = `
     <img src="${filmes.imagem}"/>
     <h5> ${filmes.id}<h5/>
      <h3>${filmes.name}</h3>
      <link> ${filmes.app}</link>
    `;
    
    const article = document.querySelector(".filmes")
    article.insertAdjacentHTML("beforeend", titleFilme)
  }
  
  }

 event.defaultPrevented();
}
