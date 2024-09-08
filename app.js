// Função responsável por renderizar os resultados da pesquisa de artistas em uma seção HTML.
function pesquisar() {

    // Itera sobre um array de objetos de artistas e cria elementos HTML para cada um.
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa"); 
    
    
    // Seleciona o elemento HTML com o ID "campo-pesquisa" e obtém o valor digitado pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Imprime o valor do campo de pesquisa no console do navegador
    // Isso é útil para verificar se o valor está sendo capturado corretamente
    console.log(campoPesquisa);

    // Se campoPesquisa for vazio.
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Resultado não encontrado</p>"
        return
    }
    // Realiza a indiferença entre letras maiúsculas e minúsculas, melhorando o sistema de  pesquisa.
    campoPesquisa = campoPesquisa.toLowerCase()

    // String que armazenará os elementos HTML a serem concatenados.
    let resultados = ""; 
    let nome = "";
    let descricao = "";
    let tags = "";

    // Percorre cada elemento do array "artistas".
    for (let artista of artistas) {
        
        // Realiza a indiferença de letras maiúsculas e minúsculas no momento da pesquisa.
        nome = artista.nome.toLowerCase()
        descricao = artista.descricao.toLowerCase()
        tags = artista.tags.toLowerCase()

        // Itera sobre cada artista no array de artistas.
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
        
        // Cria um elemento HTML para cada artista e o adiciona à string 'resultados'.
        resultados += `
        <div class="item-resultado">
            <h2>${artista.nome}</h2>
            <p class="descricao-meta">${artista.descricao}</p>
            <a href=${artista.link} target="_blank">Saiba mais</a>
        </div>`
        }  
    }
    // Se não houver resultados no campoPesquisa, será exibido uma mensagem.
    if (!resultados) {
        resultados = "<p>Resultado não encontrado</p>"
    }

    // Atribui a lista de nomes ao conteúdo do section.
    section.innerHTML = resultados;
}