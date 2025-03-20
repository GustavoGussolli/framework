var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho(){

    bg=document.getElementById("corFundo").value;
    corFonte=document.getElementById("corFonte").value;
    tamFonte=document.getElementById("tamFonte").value;
    ctxCabecalho="#cabecalho{\n background-color:"+bg+";\n";
    ctxCabecalho+=" color:"+corFonte+";\n";
    ctxCabecalho+=" font-size:"+tamFonte+"pt;\n}\n";
    return ctxCabecalho;
}

function configEstiloLinks(){

    corLink=document.getElementById("corLinks").value;
    estiloLink=document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks="a{\n color:"+corLink+";\n";
    let aux=estiloLink=="0"?"nome":"underline";
    ctxLinks+=" text-decoration:"+aux+";\n}\n";
    return ctxLinks;
}

function configHTMLLinks(){}
function configHTMLCabecalho(){

    let aux=document.querySelector("#textoCabecalho").value;
    ctxCabecalho='<h1>'+aux+'</h1>';
    return ctxCabecalho;
}

function gerarCodigo(){
    //Código para CSS
    let codeCSS=document.querySelector("#codeCSS");
    let css=configEstiloCabecalho();
    css+=configEstiloLinks();
    codeCSS.value=css;

    //Código para HTML
    let codeHTMl=document.querySelector("#codeHTML");
    ctxHTML="<html>\n<head>\n" +
    "<link rel='Stylesheet' href='estilo.css'>\n"+
    "<title>Minha Página</title>\n" +
    "</head>\n<body>" +
    "<div id='cabecalho'> "+ configHTMLCabecalho()+ "</div>\n" +
    "<nav id='links'>\n" + configHTMLLinks()+"\n</nav>\n"+
    "<div id='conteudo'><?div>\n" +
    "</body>\n</html>";
    codeHTMl.value=ctxHTMl;

}

function download(campo,arquivo){}