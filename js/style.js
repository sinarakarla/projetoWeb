// Formulario de contato:
function Enviar() {
    var nome = document.getElementById("name");
    if (nome.value != "") {
        alert('Obrigado(a) Sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso.');
    }
} 

// Área dos pais : 
if(document.getElementById('div-aluno') != null) {
    document.getElementById("div-aluno").style.display = 'none';
}
function enviarAluno() {
    var aluno = document.getElementById("aluno").value;
    if (aluno.value != "") {
        document.getElementById("div-aluno").style.display = '';
    }
}
// Área da secretaria:
if(document.getElementById('div-aluno-secretaria') != null){
    document.getElementById('div-aluno-secretaria').style.display = 'none';
}
function enviarAluno2() {
    var aluno2 = document.getElementById("aluno-secretaria").value;
    if (aluno2.value != "") {
        document.getElementById("div-aluno-secretaria").style.display = '';
    }
}

// Área dos professores:
if(document.getElementById('div-professor-heitor') != null && document.getElementById('div-professor-gilbran') != null && document.getElementById('div-professor-lucilvan')) {
    document.getElementById("div-professor-heitor").style.display = 'none';
    document.getElementById("div-professor-gilbran").style.display = 'none';
    document.getElementById("div-professor-lucilvan").style.display = 'none';
}
function enviarProfessor() {
    var professor = document.getElementById("professor").value;
    console.log(professor);
    if (professor == 'heitor') {
        document.getElementById("div-professor-heitor").style.display = '';
        document.getElementById("div-professor-gilbran").style.display = 'none';
        document.getElementById("div-professor-lucilvan").style.display = 'none';
    }
    if (professor == 'gilbran') {
        document.getElementById("div-professor-gilbran").style.display = '';
        document.getElementById("div-professor-heitor").style.display = 'none';
        document.getElementById("div-professor-lucilvan").style.display = 'none';
    }
    if (professor == 'lucilvan') {
        document.getElementById("div-professor-lucilvan").style.display = '';
        document.getElementById("div-professor-heitor").style.display = 'none';
        document.getElementById("div-professor-gilbran").style.display = 'none';
    }
}