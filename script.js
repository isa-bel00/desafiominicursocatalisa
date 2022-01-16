const botao = document.querySelector('button');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    for(let x=1; x<=3;x++) {
        let numeroAleatorio = gerarValorAleatorio();
        const nomeDoPersonagem = document.querySelector(`#nome${x}`);
        const especie = document.querySelector(`#especie${x}`);
        const condicao = document.querySelector(`#status${x}`);
        const imagem = document.querySelector(`#img${x}`);
        fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
        }).then((response) => response.json()).then((data) => {
            imagem.src = data.image;
            imagem.alt = data.name;
            nomeDoPersonagem.innerHTML = data.name;
            especie.innerHTML = data.species;
            condicao.innerHTML = data.status;        
        });
    }
    
}
botao.onclick = pegarPersonagem;