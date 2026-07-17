const formulario = document.getElementById("formCadastro");


if(formulario){

    formulario.addEventListener("submit", function(event){

        event.preventDefault();


        let conteudo = {

            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            disciplina: document.getElementById("disciplina").value,
            responsavel: document.getElementById("responsavel").value,
            data: document.getElementById("data").value

        };


        let lista = JSON.parse(localStorage.getItem("conteudos")) || [];


        lista.push(conteudo);


        localStorage.setItem("conteudos", JSON.stringify(lista));


        alert("Conteúdo cadastrado com sucesso!");


        formulario.reset();

    });

}



const listaConteudos = document.getElementById("listaConteudos");


if(listaConteudos){

    let conteudos = JSON.parse(localStorage.getItem("conteudos")) || [];


    conteudos.forEach(function(item, index){

        listaConteudos.innerHTML += `

        <div class="card">

            <h3>${item.nome}</h3>

            <p><strong>Tipo:</strong> ${item.tipo}</p>

            <p><strong>Disciplina:</strong> ${item.disciplina}</p>

            <p><strong>Responsável:</strong> ${item.responsavel}</p>

            <p><strong>Data:</strong> ${item.data}</p>

            <button onclick="excluirConteudo(${index})">
                Excluir
            </button>

        </div>

        `;

    });

}



function excluirConteudo(index){

    let conteudos = JSON.parse(localStorage.getItem("conteudos")) || [];


    conteudos.splice(index, 1);


    localStorage.setItem("conteudos", JSON.stringify(conteudos));


    alert("Conteúdo removido!");


    location.reload();

}




const totalConteudos = document.getElementById("totalConteudos");
const totalDisciplinas = document.getElementById("totalDisciplinas");


if(totalConteudos && totalDisciplinas){

    let dados = JSON.parse(localStorage.getItem("conteudos")) || [];


    totalConteudos.innerHTML = dados.length + " cadastrados";


    let disciplinas = [];


    dados.forEach(function(item){

        if(!disciplinas.includes(item.disciplina)){

            disciplinas.push(item.disciplina);

        }

    });


    totalDisciplinas.innerHTML = disciplinas.length + " cadastradas";

}