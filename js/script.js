const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, email
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p class="cadastrando">Carregando...</p>`

    let pronto = `<p class="cadastrado">Cadastro realizado com sucesso!</p>`


    content.innerHTML =  carregando

    console.log("Nome: " + nome, "E-mail cadastrado: " + email)
    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})