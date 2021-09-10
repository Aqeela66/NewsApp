fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-10&sortBy=publishedAt&apiKey=de76ddd2976543a2ac1de4afec60bba8').then(function(response) {
        console.log(response, 'Response');
        return response.json();
    }).then(newsData)
    .catch(function(err) {
        console.log(err);
    });;

function newsData(obj) {
    let newsArray = obj.articles;
    console.log(newsArray);
    console.log(typeof newsArray);
    for (news in newsArray)
        console.log(newsArray[news])

    document.getElementById("main-container").innerHTML = (newsArray.map(news =>
        `
    
      <div class="main">
      <div class="content">
      <img  src="${news.urlToImage}" />
        <button id = "btnMore" onclick= "getElementById('moreInfo').innerHTML='author: ${news.author}<br> news title: ${news.title}<br> news description ${news.description}  '" >  More Details </button>
     </div> 
    </div>`

        // newsArray.innerHTML = newsHtml;
    ).join(''));
}
