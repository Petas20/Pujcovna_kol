const celkem=()=>{
    let cena=0;
    let nosic=0;
    let doba=0;

    if(document.querySelector('#horske').checked){
        cena+=parseInt(document.querySelector('#horske').value)*parseInt(document.querySelector('#horske_ks').value);
    }
    if(document.querySelector('#detske').checked){
        cena+=parseInt(document.querySelector('#detske').value)*parseInt(document.querySelector('#detske_ks').value);
    }
    if(document.querySelector('#silnicni').checked){
        cena+=parseInt(document.querySelector('#silnicni').value)*parseInt(document.querySelector('#silnicni_ks').value);
    }
    if(document.querySelector('#gravel').checked){
        cena+=parseInt(document.querySelector('#gravel').value)*parseInt(document.querySelector('#gravel_ks').value);
    }

    doba=parseInt(document.querySelector('#delka_pujceni').value);
    cena=cena*doba;

    nosic=parseInt(document.nosic.cyklonosic.value)
    if (nosic===1){
        cena=cena
    }
    else{
        cena+=(nosic/100)*cena;
    }

    return document.querySelector('#suma').value=cena;
}

const rozdil=()=>{
    let vypocet=0;
    let cena = parseInt(document.querySelector('#suma').value);
    let odhad = parseInt(document.querySelector('#rozpocet').value);
    vypocet = odhad-cena;
    if (vypocet>=0){
        alert("Jsi v cajku, ty máš peněz dost")
        return document.querySelector('#staci_to').value=vypocet;
    }
    else {
        alert("Nemáš dost peněz, našetři nebo uber z výběru")
        return document.querySelector('#staci_to').value=vypocet;
    }
}
const kontrola_zavinace=()=>{
    let zadany_email="";
    zadany_email=document.querySelector('#email').value;
    if (zadany_email.indexOf("@")==-1){
        return alert("nezadal jsi zavinac ")
    }
}
