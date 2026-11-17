const P = {
  casa: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  busca: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  lista: '<path d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"/>',
  mais: '<path d="M5 12h14M12 5v14"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  relogio: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  ok: '<path d="M20 6 9 17l-5-5"/>',
  volta: '<path d="m12 19-7-7 7-7M19 12H5"/>',
  msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
}
export const ico = n => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`
export const categorias = ['Documentos', 'Chaves', 'Eletrônicos', 'Carteiras', 'Roupas', 'Pets', 'Outros']
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
export const ticket = i => `
<a class="ticket ${i.status}" href="#detalhe?id=${i.id}">
  <div class="corpo"><h3>${esc(i.nome)}</h3>
    <p>${ico('pin')}${esc(i.local)}</p><p>${ico('relogio')}Perdido: ${esc(i.quando.toLowerCase())}</p></div>
  <div class="stub">${ico(i.status === 'pendente' ? 'busca' : 'ok')}${i.status === 'pendente' ? 'Procurando' : 'Encontrado'}</div>
</a>`
export const vazio = (titulo, texto, href, acao) => `
<div class="vazio"><img class="mascote" src="./img/guaxinim.png" alt=""><h2>${titulo}</h2><p>${texto}</p><a class="btn" href="${href}">${acao}</a></div>`
