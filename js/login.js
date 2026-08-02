// login.js
// Intercepta o envio do formulário de login e valida no navegador (client-side).
// Não existe backend real: aprovação = mensagem de sucesso + redirecionamento simulado.

// Validação do formulário de login com jQuery
$(document).ready(function () {

  $('#loginForm').on('submit', function (e) {
    e.preventDefault(); // impede o recarregamento da página

    const email = $('#floatingInput').val().trim();
    const senha = $('#floatingPassword').val().trim();

    // expressão regular simples para validar formato de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // reseta estados de erro antes de checar de novo
    $('#floatingInput, #floatingPassword').removeClass('is-invalid');
    $('#loginMessage').empty();

    let temErro = false;

    if (!emailValido) {
      $('#floatingInput').addClass('is-invalid');
      temErro = true;
    }

    if (senha.length < 6) {
      $('#floatingPassword').addClass('is-invalid');
      temErro = true;
    }

    if (temErro) {
      $('#loginMessage').html('<div class="alert alert-danger py-2">Verifique os campos destacados.</div>');
      return;
    }

    $('#loginMessage').html('<div class="alert alert-success py-2">Login realizado com sucesso! Redirecionando...</div>');

    setTimeout(function () {
      window.location.href = 'index.html';
    }, 1500);
  });

});