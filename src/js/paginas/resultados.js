import { categorias, ticket, vazio, esc } from '../util.js'
import { itens } from '../dadosMockados/itens.js'

function resultados(app, p) {
  const cat = p.get('cat') || '', q = (p.get('q') || '').trim(), st = p.get('st') === 'encontrado' ? 'encontrado' : 'pendente'
  const lista = itens.filter(i => i.status === st && (!cat || i.cat === cat) &&
    (!q || [i.nome, i.desc, i.local, i.cat].join(' ').toLowerCase().includes(q.toLowerCase())))
  const url = o => '#resultados?' + Object.entries({ cat, q, st, ...o }).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')
  app.innerHTML = `
  <h1>${q ? `“${esc(q)}”` : cat || 'Todos os itens'}</h1>
  <p class="sub">${lista.length} ${lista.length === 1 ? 'item' : 'itens'} ${st === 'pendente' ? 'ainda procurando dono' : 'no histórico'}</p>
  <nav class="abas"><a class="${st === 'pendente' ? 'on' : ''}" href="${url({ st: 'pendente' })}">Pendentes</a>
    <a class="${st === 'encontrado' ? 'on' : ''}" href="${url({ st: 'encontrado' })}">Histórico</a></nav>
  <div class="chips" style="margin-bottom:1rem"><a class="${cat ? '' : 'on'}" href="${url({ cat: '' })}">Todas</a>
    ${categorias.map(c => `<a class="${c === cat ? 'on' : ''}" href="${url({ cat: c })}">${c}</a>`).join('')}</div>
  ${lista.length === 0 ? vazio('Nada por aqui', 'Nenhum item bate com essa busca. Registre o seu para que outras pessoas o vejam.', '#publicar', 'Registrar item') : lista.map(ticket).join('')}`
}
export default { url: '#resultados', label: 'Itens', icon: 'lista', pagina: resultados }
