function validarFormulario() {
    // Obter valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
  
    // Validar o campo Nome
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    // Validar o campo Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return false;
    }

    // Validar o campo Numero
    if (numero === "") {
        alert("insira um número valido.");
        return false;
    }
  
    // Se todas as validações passarem, o formulário é enviado
    alert("Formulário enviado com sucesso!");
    return true;
  }
  