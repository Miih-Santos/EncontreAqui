import { ico, vazio, esc } from '../util.js'
import { itens, usuario, salvar } from '../dadosMockados/itens.js'

function detalhe(app, p) {
  const i = itens.find(x => x.id === Number(p.get('id')))
  if (!i) { app.innerHTML = vazio('Item não encontrado', 'Esse registro não existe ou foi removido.', '#resultados', 'Ver itens'); return }
  const meu = i.dono.id === usuario.id, ok = i.status === 'encontrado'
  const zap = `https://wa.me/55${i.dono.contato}?text=${encodeURIComponent(`Olá, ${i.dono.nome}! Vi seu pedido no EncontreAqui: "${i.nome}". Acho que encontrei.`)}`
  app.innerHTML = `
  <a class="voltar" href="#resultados">${ico('volta')}Voltar</a><br>
  <span class="selo ${i.status}">${ok ? 'Encontrado' : 'Ainda procurando'}</span>
  <h1>${esc(i.nome)}</h1><p class="sub">${esc(i.desc)}</p>
  <dl class="ficha"><dt>Perdido em</dt><dd>${esc(i.local)}</dd>
    <dt>Quando (estimativa de quem perdeu)</dt><dd>${esc(i.quando)}</dd><dt>Categoria</dt><dd>${esc(i.cat)}</dd></dl>
  <dl class="ficha"><dt>Quem perdeu</dt><dd>${esc(i.dono.nome)}</dd><dt>Onde encontrar a pessoa</dt><dd>${esc(i.dono.onde)}</dd></dl>
  ${meu ? `<button class="btn bloco ${ok ? 'claro' : 'ok'}" id="alt">${ok ? 'Reabrir busca' : 'Marcar como encontrado'}</button>`
    : ok ? '' : `<a class="btn bloco" href="${zap}" target="_blank" rel="noopener">${ico('msg')}Achei este item</a>`}`
  app.querySelector('#alt')?.addEventListener('click', () => { i.status = ok ? 'pendente' : 'encontrado'; salvar(); detalhe(app, p) })
}
export default { url: '#detalhe', label: '', icon: '', pagina: detalhe }
