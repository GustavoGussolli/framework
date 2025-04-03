var ctxCabecalho;
var ctxLinks;

function configEstiloCabecalho() {
    let bg = document.getElementById("corFundo").value;
    let corFonte = document.getElementById("corFonte").value;
    let tamFonte = document.getElementById("tamFonte").value;
    
    ctxCabecalho = `#cabecalho {
        background-color: ${bg};
        color: ${corFonte};
        font-size: ${tamFonte}pt;
    }\n`;
    
    return ctxCabecalho;
}

function configEstiloLinks() {
    let corLink = document.getElementById("corLinks").value;
    let estiloLink = document.querySelector('input[name="estiloLinks"]:checked');
    
    let aux = (estiloLink && estiloLink.value === "0") ? "none" : "underline";
    
    ctxLinks = `a {
        color: ${corLink};
        text-decoration: ${aux};
    }\n`;
    
    return ctxLinks;
}

function configHTMLLinks() {
    let linkInputs = document.getElementsByName("links");
    let hrefInputs = document.getElementsByName("href");
    
    ctxLinks = "";
    
    for (let i = 0; i < linkInputs.length; i++) {
        let href = hrefInputs[i].value.split("\\").pop(); // Obtém o nome do arquivo
        ctxLinks += `<a href="${href}">${linkInputs[i].value}</a>\n`;
    }

    return ctxLinks;
}

function configHTMLCabecalho() {
    let aux = document.querySelector("#textoCabecalho").value;
    return `<h1>${aux}</h1>`;
}

function gerarCodigo() {
    // Geração do código CSS
    let codeCSS = document.querySelector("#codeCSS");
    let css = configEstiloCabecalho();
    css += configEstiloLinks();
    codeCSS.value = css;

    // Geração do código HTML
    let codeHTML = document.querySelector("#codeHTML");
    let ctxHTML = `<!DOCTYPE html>
<html>
<head>
    <link rel='stylesheet' href='estilo.css'>
    <title>Minha Página</title>
</head>
<body>
    <div id='cabecalho'>${configHTMLCabecalho()}</div>
    <nav id='links'>${configHTMLLinks()}</nav>
    <div id='conteudo'></div>
</body>
</html>`;
    
    codeHTML.value = ctxHTML;
}

function download(campo, arquivo) {
    if (arquivo.trim() === '')
        arquivo = document.getElementById("nomeHTML").value + ".html";

    var text = document.getElementById(campo).value;
    var blob = new Blob([text], { type: "text/plain" });
    var a = document.createElement("a");
    
    a.href = URL.createObjectURL(blob);
    a.download = arquivo.trim();
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gerarMais").addEventListener("click", function () {
        let div = document.createElement("div");
        div.classList.add("mb-2");

        let inputTexto = document.createElement("input");
        inputTexto.type = "text";
        inputTexto.name = "links";
        inputTexto.classList.add("form-control", "mb-2");
        inputTexto.placeholder = "Texto do link";

        let inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.name = "href";
        inputFile.classList.add("form-control");

        div.appendChild(inputTexto);
        div.appendChild(inputFile);

        document.getElementById("areaLinks").appendChild(div);
    });
});
