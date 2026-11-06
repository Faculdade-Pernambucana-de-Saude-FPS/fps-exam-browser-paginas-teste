// Script da própria página (mesmo domínio). Se carregar, escreve "script carregou"
// no bloco 12 — CA-014 / RF-010: recursos da página permitida passam.
document.getElementById('script-status').textContent = 'script carregou';

function abrir(destino) { window.open(destino); }
function abrirVazio() { window.open(); }

// Bloco 9: download por blob: com <a download> criado por script.
function baixarBlob() {
  const blob = new Blob(['arquivo gerado no navegador — spec 005'], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gerado.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Bloco 17: a ameaça "alta" do parecer de segurança — ir para about:blank e
// escrever conteúdo nele. A página principal em about:blank tem de ser barrada.
function aboutBlankComConteudo() {
  location.href = 'about:blank';
  setTimeout(function () {
    document.write('<h1>conteúdo escrito em about:blank</h1>');
  }, 300);
}
