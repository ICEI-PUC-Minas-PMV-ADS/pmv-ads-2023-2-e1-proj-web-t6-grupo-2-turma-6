function salvarCadastro() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if ((nome, email && senha)) {
    var cadastro = {
      nome: nome,
      email: email,
      senha: senha,
    };

    var cadastrosAntigos = JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastrosAntigos.push(cadastro);

    localStorage.setItem("cadastros", JSON.stringify(cadastrosAntigos));

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

    alert("Cadastro salvo com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
