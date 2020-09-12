const peliculas=["Gladiador","Titanic","X-Men","Avenger","Rey León"];
const musica=["Pablo","Laura Pausini","Robbie williams","Katy Perry","Coldplay"];
const libros=["Meg","Agua para elefantes","Oscura","Plenitud","Testamento Maya"];
const opciones=[libros,peliculas,musica];
function mostrar(n){
    const lista=document.getElementsByTagName("li");
    for(const key in lista){
        lista[key].innerHTML=opciones[n][key];
    }
}
const opcionesImg=["libros","peliculas","musica"];
function show(n){
    const imagenes=document.getElementsByTagName("img");
    for(const key in imagenes){
        imagenes[key].src="imagen/"+opcionesImg[n]+"/"+opcionesImg[n]+(parseInt(key)+1)+".jpg";
        imagenes[key].width="250";
        imagenes[key].height="250";
    }
}