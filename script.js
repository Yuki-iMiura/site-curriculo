// script.js

// Aguarda o carregamento do DOM para garantir que os elementos existem
// antes de adicionar eventos

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o formulário de contato, se existir na página
  const form = document.getElementById('contactForm');
  if (form) {
    // Adiciona um evento de submit para o formulário
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita o envio padrão do formulário
      alert('Mensagem enviada! (Ainda não implementado)'); // Mostra uma mensagem de sucesso
      form.reset(); // Limpa os campos do formulário
    });
  }
}); 