function mostrarCategoria(categoria) {
    esconderTodasCategorias();

    var categoriaSelecionada = document.getElementById(categoria);
    categoriaSelecionada.style.display = "block";
}

function esconderTodasCategorias() {
    console.log('escondendo categorias');
    var categorias = document.querySelectorAll("#categorias > div");
    categorias.forEach(function(c) {
        c.style.display = "none";
    });
}

function redirecionar(url) {
  location.href = url;
}

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=quuyJoZCkYni&format=png";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=K7OXfoF0zHXw&format=pngg";
  }
}

function inicio() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalValor = document.getElementById("total-valor");
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            let total = 0;
    
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    total += parseFloat(checkbox.value.split(" - $")[1]);
                }
            });
        
            totalValor.textContent = "$" + total.toFixed(2);
        });
    });

    const switchModal = () => {
        const modal = document.querySelector('.modal')
        const actualStyle = modal.style.display
        if(actualStyle == 'block') {
          modal.style.display = 'none'
        }
        else {
          modal.style.display = 'block'
        }
      }
      
      const btn = document.querySelector('.modalBtn')
      if (btn) {
        btn.addEventListener('click', switchModal)
      
        window.onclick = function(event) {
            const modal = document.querySelector('.modal')
          if (event.target == modal) {
            switchModal()
          }
        }
      }
    
    const confirmarPedidoButton = document.getElementById("confirmar-pedido");
    if (confirmarPedidoButton) {
      confirmarPedidoButton.addEventListener("click", function() {

        const paragrafo = document.getElementById('texto-modal');

        paragrafo.innerHTML = `Pedido confirmado!<br>Valor: ${totalValor.textContent}.<br>Número do pedido: ${Math.trunc(Math.random()*1000)}.`;
        switchModal(`Pedido confirmado!\nValor: ${totalValor.textContent}.\nNúmero do pedido: ${Math.trunc(Math.random()*1000)}.`);
      });
    }
    
    esconderTodasCategorias();
}

document.addEventListener("DOMContentLoaded", inicio, false);