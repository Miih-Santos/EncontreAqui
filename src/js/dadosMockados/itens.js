const u = (id, nome, contato, onde) => ({ id, nome, contato, onde })
const marina = u(1, 'Marina Souza', '11988881111', 'Secretaria do bloco B, até as 17h')
const carla = u(3, 'Carla Nunes', '11966663333', 'Balcão da biblioteca, térreo')
const dados = [
  { id: 1, nome: 'Chave de carro com chaveiro do Corinthians', cat: 'Chaves', desc: 'Chave de Fiat Uno, chaveiro preto e branco.', local: 'Quadra da ETEC', quando: 'Ontem', status: 'pendente', dono: marina },
  { id: 2, nome: 'Carteira marrom de couro', cat: 'Carteiras', desc: 'Tem cartões e um bilhete único dentro.', local: 'Metrô Santa Cecília', quando: 'Hoje de manhã', status: 'pendente', dono: u(2, 'Rafael Lima', '11977772222', 'Portaria do prédio da Rua Vitória, 120') },
  { id: 3, nome: 'RG e CNH', cat: 'Documentos', desc: 'Dentro de uma capinha transparente.', local: 'Praça da República', quando: 'Há 2 a 3 dias', status: 'encontrado', dono: marina },
  { id: 4, nome: 'Fone Bluetooth JBL azul', cat: 'Eletrônicos', desc: 'Estava no estojo preto, bateria quase no fim.', local: 'Biblioteca Mário de Andrade', quando: 'Esta semana', status: 'pendente', dono: carla },
  { id: 5, nome: 'Gata cinza chamada Mel', cat: 'Pets', desc: 'Coleira rosa com plaquinha. Muito dócil.', local: 'Rua Augusta, altura do 800', quando: 'Agora há pouco', status: 'pendente', dono: u(4, 'Diego Alves', '11955554444', 'Rua Augusta, 790, apto 31') },
  { id: 6, nome: 'Casaco jeans', cat: 'Roupas', desc: 'Tamanho M, com patch de banda na manga.', local: 'Ônibus 875C', quando: 'Mais de 1 semana', status: 'encontrado', dono: carla },
]
export const usuario = marina
export const quandos = ['Agora há pouco', 'Hoje de manhã', 'Hoje à tarde', 'Ontem', 'Há 2 a 3 dias', 'Esta semana', 'Mais de 1 semana']
let salvo = null
try { salvo = JSON.parse(localStorage.getItem('encontreaqui')) } catch {}
export const itens = salvo || dados
export const salvar = () => { try { localStorage.setItem('encontreaqui', JSON.stringify(itens)) } catch {} }
