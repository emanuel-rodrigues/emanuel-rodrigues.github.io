
var pessoa = {
	nome: 'Emanuel Rodrigues',
	cargo: 'Estudade de SI - FACISA',
	foto: 'emanuel.jpg'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('imagem-cabecalho').src = pessoa.foto;