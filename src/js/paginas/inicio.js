import { ico, categorias, ticket } from '../util.js'
import { itens } from '../dadosMockados/itens.js'

function inicio(app) {
  const pend = itens.filter(i => i.status === 'pendente')
  app.innerHTML = `
  <section class="hero">
   <img class="mascote" src="../../assets/imgs/logo-white.png" alt="Guaxinim, mascote do EncontreAqui">
    <h1>Perdeu algo?<br>Alguém pode ter visto.</h1>
   

    <form class="busca" role="search">${ico('busca')}
      <input name="q" placeholder="Chave, carteira, documento" aria-label="Buscar item" required>
      <button class="btn">Buscar</button>
    </form>
  </section>

  <h2>Ou navegue por categoria</h2>

  <div class="chips">${categorias.map(c => `<a href="#resultados?cat=${encodeURIComponent(c)}">${c}</a>`).join('')}</div>

  <div class="placar"><div><b>${pend.length}</b>ainda procurando</div><div><b>${itens.length - pend.length}</b>já encontrados</div></div>

  <h2>Pedidos mais recentes</h2>${pend.slice(0, 3).map(ticket).join('')}`
  app.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    location.hash = `#resultados?q=${encodeURIComponent(e.target.q.value.trim())}`
  })
}
export default { url: '#inicio', label: 'Início', icon: 'casa', pagina: inicio }
