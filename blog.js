
let boton2 = document.getElementById("blog_form");
boton2.addEventListener("submit",crearPost);

function crearPost(event){
    event.preventDefault();
    let articulo = document.createElement("article");
    articulo.classList.add("article");
    
    let titulo = document.getElementById("titulo").value.trim();
    let tituloToCheck = titulo.replace(/\s/g,"");
    if(tituloToCheck.length < 1){
        return;
    }
    if(alreadyExists(titulo)){
        return;
    }
    let h2 = document.createElement("h2");
    h2.innerText = titulo;
    articulo.appendChild(h2);
    document.getElementById("titulo").value = "";
       
    let contenido = document.getElementById("contenido").value.trim();
    let contenidoToCheck = contenido.replace(/\s/g,"");
    if(contenidoToCheck.length < 1){
        return;
    }
    if(alreadyExists(contenido)){
        return;
    }
    let p = document.createElement("p");
    p.innerText = contenido;
    articulo.appendChild(p);
    document.getElementById("contenido").value = "";
    document.getElementById("blog_section").appendChild(articulo);
    
}
