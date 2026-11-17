import { categorias, esc } from '../util.js'
import { itens, usuario, quandos, salvar } from '../dadosMockados/itens.js'

function publicar(app) {
  app.innerHTML = `
  <h1>Registrar item perdido</h1><p class="sub">Quanto mais detalhes, mais fácil de alguém reconhecer.</p>
  <form class="form"><div class="aviso" role="alert" hidden></div>
    <label>O que você perdeu?<input name="nome" required minlength="3" placeholder="Ex.: Mochila preta com chaveiro"></label>
    <label>Categoria<select name="cat" required>${categorias.map(c => `<option>${c}</option>`).join('')}</select></label>
    <label>Descrição<textarea name="desc" rows="3" required minlength="10" placeholder="Cor, marca, marcas de uso, o que tem dentro"></textarea></label>
    <label>Onde perdeu?<input name="local" required placeholder="Ex.: Estação Sé, linha azul"></label>
    <label>Quando, mais ou menos?<select name="quando">${quandos.map(q => `<option>${q}</option>`).join('')}</select></label>
    <label>WhatsApp para contato<input name="contato" type="tel" required pattern="[0-9]{10,11}" placeholder="11999998888" value="${usuario.contato}"></label>
    <label>Onde podem te encontrar?<input name="onde" required value="${esc(usuario.onde)}"></label>
    <button class="btn bloco">Publicar registro</button></form>`
  const f = app.querySelector('form'), aviso = f.querySelector('.aviso')
  f.addEventListener('submit', e => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(f))
    const repetido = itens.find(i => i.status === 'pendente' && i.dono.id === usuario.id && i.nome.toLowerCase() === d.nome.trim().toLowerCase())
    if (repetido) { aviso.hidden = false; aviso.textContent = 'Você já registrou esse item e ele continua pendente.'; return }
    const id = Date.now()
    itens.unshift({ id, nome: d.nome.trim(), cat: d.cat, desc: d.desc.trim(), local: d.local.trim(), quando: d.quando, status: 'pendente',
      dono: { id: usuario.id, nome: usuario.nome, contato: d.contato, onde: d.onde.trim() } })
    salvar()
    location.hash = `#detalhe?id=${id}`
  })
}
export default { url: '#publicar', label: 'Publicar', icon: 'mais', destaque: true, pagina: publicar }
