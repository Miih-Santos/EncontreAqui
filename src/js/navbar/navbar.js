import { ico } from '../util.js'

export function renderNavbar(rotas) {
  document.querySelector('#navbar').innerHTML = `<nav aria-label="Principal">${rotas.filter(r => r.label !== '')
    .map(r => `<a href="${r.url}" class="${r.destaque ? 'destaque' : ''}">${ico(r.icon)}<span>${r.label}</span></a>`).join('')}</nav>`
}
export function marcarAtivo(caminho) {
  document.querySelectorAll('#navbar a').forEach(a => a.getAttribute('href') === caminho ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'))
}
