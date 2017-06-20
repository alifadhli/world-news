let NewsAPI = require('newsapi');

let newsapi = new NewsAPI('c22b4eec4a2e4039a90e4655e830868b');

// To query articles
newsapi.articles({
  source: 'associated-press', // required
  sortBy: 'top' // optional
}).then(articlesResponse => {
  console.log(articlesResponse);
  
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   
});

// To query sources
newsapi.sources({
  category: 'technology', // optional
  language: 'en', // optional
  country: 'us' // optional
}).then(sourcesResponse => {
  console.log(sourcesResponse);
  
    {
      status: "ok",
      sources: [
        ...
      ]
    }
  
});
```