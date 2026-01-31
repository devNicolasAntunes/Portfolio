// Função para excluir produto
function excluirProduto(id) {
  if (confirm('Tem certeza que deseja excluir este produto?')) {
    // Implementar lógica de exclusão
    fetch(`http://localhost:8080/produto/${id}`, {
      method: 'DELETE'
    })
        .then(response => {
          if (response.ok) {
            alert('Produto excluído com sucesso!');
            renderizarTabelaProdutos();
          } else {
            response.json().then(data => {
              alert('Erro ao excluir produto! Erro: ' + data.erro);
            })
          }
        })
        .catch(error => {
          alert('Erro ao excluir produto!');
        });
  }
}

// Função para renderizar produtos na tabela
function renderizarTabelaProdutos() {
  const tbody = document.getElementById('lista-produtos');

  fetch('http://localhost:8080/produto')
      .then(response => response.json()
          .then(data => {
            produtos = data

            if (!produtos || produtos.length === 0) {
              tbody.innerHTML = '<tr><td colspan="5" class="empty-state">Nenhum produto cadastrado</td></tr>';
              return;
            }

            tbody.innerHTML = produtos.map(produto => `
        <tr>
            <td>${produto.sku || '-'}</td>
            <td>${produto.nome || '-'}</td>
            <td>${produto.descricao || '-'}</td>
            <td>R$ ${produto.preco ? parseFloat(produto.preco).toFixed(2) : '0,00'}</td>
            <td>
                <button class="btn-action btn-edit" onclick="editarProduto(${produto.id})">
                    Editar
                </button>
                <button class="btn-action btn-delete" onclick="excluirProduto(${produto.id})">
                    Excluir
                </button>
            </td>
        </tr>
    `).join('');
          }))

}

function editarProduto(id) {
  fetch(`http://localhost:8080/produto/${id}`)
      .then(response => response.json())
      .then(produto => {
        if (produto) {
          document.getElementById('sku').value = produto.sku;
          document.getElementById('nome').value = produto.nome;
          document.getElementById('descricao').value = produto.descricao;
          document.getElementById('preco').value = produto.preco;

          // Alterar botão para "Atualizar"
          const btn = document.querySelector('.btn-cadastrar');
          btn.textContent = 'Atualizar Produto';
          btn.onclick = () => atualizarProduto(id);
        }
      })
      .catch(error => console.error(error));
}

function cadastrarProduto() {
  let produto = {
    nome: document.getElementById("nome").value,
    preco: document.getElementById("preco").value,
    descricao: document.getElementById("descricao").value,
    sku: document.getElementById("sku").value
  }

  fetch("http://localhost:8080/produto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(produto)
  })
      .then(response => {
        if (response.ok) {
          alert("Produto cadastrado com sucesso!");
          document.getElementById("nome").value = "";
          document.getElementById("preco").value = "";
          document.getElementById("descricao").value = "";
          document.getElementById("sku").value = "";
          renderizarTabelaProdutos()
        } else {
          response.json().then(data => {
            alert("Erro ao cadastrar produto! Erro: " + data.erro);
          })

        }
      })
      .catch(error => {
        console.error(error);
        alert("Erro ao cadastrar produto!");
      });

}