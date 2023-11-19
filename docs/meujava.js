document.addEventListener("DOMContentLoaded", function() {
    const inputIdade = document.getElementById('numero1');
    const inputNome = document.getElementById('texto1');
    const inputEmail = document.getElementById('texto2');
    const inputTelefone = document.getElementById('numero2');
    inputIdade.addEventListener('input', function() {
        const idade = parseInt(inputIdade.value);
        if (idade < 50) {
            document.body.style.backgroundColor = 'lightblue';
        } else {
            document.body.style.backgroundColor = 'lightgreen';
        }
    });
    inputNome.addEventListener('input', function() {
        if (inputNome.value.trim() !== '') {
            document.body.style.backgroundColor = 'lightpink';
        }
    });
    inputEmail.addEventListener('input', function() {
        const emailFormat = /\S+@\S+\.\S+/;
        const email = inputEmail.value.trim();
        if (emailFormat.test(email)) {
            document.body.style.backgroundColor = 'lightyellow';
        }
    });
    inputTelefone.addEventListener('input', function() {
        const telefoneFormat = /^\d{10,}$/;
        const telefone = inputTelefone.value.trim();
        if (telefoneFormat.test(telefone)) {
            document.body.style.backgroundColor = 'lightcoral';
        }
    });
});
