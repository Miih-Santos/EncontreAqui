import '@fontsource-variable/montserrat'
import { rotas } from './rotas/rotas.js'
import { renderNavbar, marcarAtivo } from './navbar/navbar.js'
import naoEncontrada from './paginas/naoencontrada.js'

const app = document.querySelector('#app')
renderNavbar(rotas)

function renderApp() {
  const [caminho, query] = (location.hash || '#inicio').split('?')
  const rota = rotas.find(r => r.url === caminho)
  rota ? rota.pagina(app, new URLSearchParams(query)) : naoEncontrada(app)
  marcarAtivo(caminho)
  window.scrollTo(0, 0)
}
window.addEventListener('hashchange', renderApp)
renderApp()
