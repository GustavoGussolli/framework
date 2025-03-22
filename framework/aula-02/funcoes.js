var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho(){
    let bg = document.getElementById("corFundo").value;
    let corFonte = document.getElementById("corFonte").value;
    let tamFonte = document.getElementById("tamFonte").value;
    ctxCabecalho = "#cabecalho{\n background-color:"+bg+";\n";
    ctxCabecalho += " color:"+corFonte+";\n";
    ctxCabecalho += " font-size:"+tamFonte+"pt;\n}\n";
    return ctxCabecalho;
}

function configEstiloLinks(){
    let corLink = document.getElementById("corLinks").value;
    let estiloLink = document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks = "a{\n color:"+corLink+";\n";
    let aux = estiloLink == "0" ? "none" : "underline";
    ctxLinks += " text-decoration:"+aux+";\n}\n";
    return ctxLinks;
}

function configHTMLLinks(){
    return '<a href="#">Link Exemplo</a>';
}

function configHTMLCabecalho(){
    let aux = document.querySelector("#textoCabecalho").value;
    return '<h1>'+aux+'</h1>';
}

function gerarCodigo(){
    //Código para CSS
    let codeCSS = document.querySelector("#codeCSS");
    let css = configEstiloCabecalho();
    css += configEstiloLinks();
    codeCSS.value = css;

    //Código para HTML
    let codeHTML = document.querySelector("#codeHTML");
    let ctxHTML = "<html>\n<head>\n" +
    "<link rel='Stylesheet' href='estilo.css'>\n" +
    "<title>Minha Página</title>\n" +
    "</head>\n<body>\n" +
    "<div id='cabecalho'> " + configHTMLCabecalho() + " </div>\n" +
    "<nav id='links'>\n" + configHTMLLinks() + "\n</nav>\n" +
    "<div id='conteudo'></div>\n" +
    "</body>\n</html>";
    codeHTML.value = ctxHTML;
}

function download(campo, arquivo){}
