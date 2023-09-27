var form = document.getElementById("mainform");
var blogscontainer = document.getElementById("blogscontainer");

form.addEventListener('submit',postcontent);

function postcontent(e){
    e.preventDefault();
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var content = document.getElementById("content");
    console.log(blogscontainer);


    var blogsdiv =document.createElement("div");
    blogsdiv.className="blogs";
    var titleinblog = document.createElement("h2");
    titleinblog.id="titleinblog";
    titleinblog.style="color:rgb(255, 255, 255); margin-left: 10px;"
    titleinblog.appendChild(document.createTextNode("BLOGTITLE"));

    var openblogbutton = document.createElement("h2");
    openblogbutton.className = "btn-right";

    titleinblog.appendChild(openblogbutton);


    var contentdiv=document.createElement("div")
    contentdiv.className="content";

    var authorinblog = document.createElement("h2");
    authorinblog.id="authorinblog";
    authorinblog.style="color: brown;";

    var contentinblog = document.createElement("h3");
    contentinblog.id="contentinblog";

    contentdiv.appendChild(authorinblog);
    contentdiv.appendChild(contentinblog);

    blogsdiv.appendChild(titleinblog);
    blogsdiv.appendChild(contentdiv);

    console.log(blogsdiv)

    blogscontainer.appendChild(blogsdiv);
    
}
