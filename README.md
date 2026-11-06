# fps-exam-browser — páginas de teste

Páginas estáticas usadas nos testes manuais do navegador de prova da Faculdade Pernambucana
de Saúde (repositório `fps-exam-browser`, spec 005 — navegador: motor, tela cheia e filtro de
domínios).

Publicadas pelo GitHub Pages em
<https://faculdade-pernambucana-de-saude-fps.github.io/fps-exam-browser-paginas-teste/>.

Este repositório é público porque o `fps-exam-browser` é privado e o plano da organização não
publica GitHub Pages de repositório privado. Aqui só há HTML de teste: nenhum dado de aluno,
nenhum segredo, nenhum código do navegador.

| Arquivo | Para quê |
|---|---|
| `index.html` | um bloco por caso de teste, cada um com o resultado esperado |
| `permitido.html` | página do mesmo domínio, que o navegador deve abrir |
| `prova.pdf` | PDF de exemplo para os casos de download |
| `pagina.js` | script da própria página: mostra "script carregou" e aciona os botões |
| `imagem.svg` | imagem do mesmo domínio |
| `.nojekyll` | publica os arquivos como estão, sem o processamento do Jekyll |
