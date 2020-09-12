function operacion(n){
    const n1=document.getElementById("n1");
    const n2=document.getElementById("n2");
    const resp=document.getElementById("resp");
    switch(n){
        case 1:
            resp.value=Number(n1.value)+Number(n2.value);
            break;
        case 2:
            resp.value=Number(n1.value)-Number(n2.value);
            break;
        case 3:
            resp.value=Number(n1.value)*Number(n2.value);
            break;
        case 4:
            resp.value=Number(n1.value)/Number(n2.value);
            break;
         default:
            break;
    }
}