import { ticket, vazio } from '../util.js'
import { itens, usuario } from '../dadosMockados/itens.js'

function conta(app) {
  const meus = itens.filter(i => i.dono.id === usuario.id)
  const grupo = (t, st) => { const l = meus.filter(i => i.status === st); return l.length ? `<h2>${t}</h2>${l.map(ticket).join('')}` : '' }
  app.innerHTML = `
  <div class="perfil"><div class="avatar">${usuario.nome.split(' ').map(n => n[0]).join('')}</div>
    <div><h1>${usuario.nome}</h1><p class="sub">${meus.length} ${meus.length === 1 ? 'registro publicado' : 'registros publicados'}</p></div></div>
  ${meus.length === 0 ? vazio('Você ainda não registrou nada', 'Perdeu alguma coisa? Registre e deixe a comunidade ajudar.', '#publicar', 'Registrar item')
    : grupo('Ainda procurando', 'pendente') + grupo('Já encontrados', 'encontrado')}`
}
export default { url: '#conta', label: 'Conta', icon: 'user', pagina: conta }
