
function getNews(country,category)
     {
        // to clear old news when new one is called hence lin6

        document.getElementById("news").innerHTML="";


    fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=2043c3a15ac142288cedc71f483bd1d6")
    .then((response)=>{
        // console.log(response)=>
        return response.json();
    })
    .then((data)=>{
        
    
        let news=data.articles;
    
        
    
        news.forEach((n,index)=>{
    
            
                let newsCard=document.createElement("div");
                newsCard.classList.add("news_app");
    
                let newsImg=document.createElement("div");
                newsImg.classList.add("news_img");
    
                let img=document.createElement("img");
                img.setAttribute("src",n.urlToImage);
                newsImg.appendChild(img);
    
    
               let newsDetails = document.createElement("div");
                newsDetails.classList.add("news_details");
    
    
                let title=document.createElement("h1");
                title.classList.add("title");
                title.append(n.title);
    
                let author=document.createElement("p");
                author.classList.add("author");
                author.append(n.author);
    
                let content=document.createElement("p");
                content.classList.add("content");
                content.append(n.description);

                // ln53 to enable link to site. ln54 lnk.

                let link=document.createElement("a");
                link.setAttribute("href",n.url);
                link.setAttribute("target","blank"); 
                // ln53 to enable open on new page

               
    
                let button = document.createElement("button");
                button.classList.add("btn");
                button.append("Read Full article");

               
                // adding link lin5253 to button lin59 on ln63
                link.appendChild(button);


    
                // adding content in newsdetail
    
                newsDetails.appendChild(title);
                newsDetails.appendChild(author);
                newsDetails.appendChild(content);
                // newsDetails.appendChild(button);
                newsDetails.appendChild(link);
    
                // adding newsImg and newsDetail to card
    
                newsCard.appendChild(newsImg);
                newsCard.appendChild(newsDetails);
    
    
                // liink to id with news on html
                document.getElementById("news").appendChild(newsCard);
        })
    })
    .catch((err)=>{
        // console.log(err);
    })
    
    // if fetch sucess then what, if fetch fails then catch or capture
     
}

getNews("us","business");

function search()
{
    let country=document.getElementById("country").value;
    let category=document.getElementById("category").value;

    getNews(country, category);
};

// console.log(country,category)


 


