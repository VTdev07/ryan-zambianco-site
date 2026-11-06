/* Janelas do rodapé (Política de privacidade e SEO), compartilhadas pelas três páginas.
   Links com data-politica / data-seo abrem cada janela; os endereços #politica e #seo também. */
(function () {
  var css = `
  .pp-dialog { width: min(720px, calc(100vw - 32px)); max-height: min(86vh, 860px); padding: 0;
    border: 1px solid rgba(255,255,255,.12); border-radius: 16px; background: #141518; color: #e9e9ec;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,.8); overflow: hidden; }
  .pp-dialog[open] { display: flex; flex-direction: column; animation: pp-in .25s ease both; }
  .pp-dialog::backdrop { background: rgba(0,0,0,.6); backdrop-filter: blur(3px); }
  @keyframes pp-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  .pp-head { display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 18px 22px; border-bottom: 1px solid rgba(255,255,255,.1); }
  .pp-head h2 { margin: 0; font: 700 21px/1.2 "Inter", "Helvetica Neue", Arial, sans-serif; color: #fff; }
  .pp-close { flex: none; height: 44px; padding: 0 20px; border-radius: 100px; cursor: pointer;
    border: 1px solid rgba(255,255,255,.75); background: transparent; color: #fff;
    font: 600 13px/1 "Inter", "Helvetica Neue", Arial, sans-serif; }
  .pp-close:hover { background: rgba(255,255,255,.08); }
  .pp-close:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
  .pp-body { overflow-y: auto; padding: 22px 22px 28px; font: 400 15px/1.65 "Inter", "Helvetica Neue", Arial, sans-serif; color: #d6d6db; }
  .pp-body .pp-date { margin: 0 0 18px; font-size: 13px; color: #9a9aa3; }
  .pp-body h3 { margin: 22px 0 6px; font-size: 16px; font-weight: 700; color: #fff; }
  .pp-body p { margin: 0 0 12px; }
  .pp-body ul { margin: 0 0 12px; padding-left: 20px; display: grid; gap: 8px; }
  .pp-body strong { color: #fff; }
  .pp-body a { color: #fff; }
  .pp-body h3:first-child { margin-top: 0; }
  .pp-tags { list-style: none; padding: 0 !important; margin: 4px 0 0; display: flex !important; flex-wrap: wrap; gap: 8px !important; }
  .pp-tags li { padding: 7px 12px; border: 1px solid rgba(255,255,255,.18); border-radius: 8px; font-size: 13.5px; line-height: 1.3; color: #e9e9ec; }
  html.pp-lock, html.pp-lock body { overflow: hidden; }
  @media (max-width: 520px) { .pp-head { padding: 14px 16px; } .pp-body { padding: 18px 16px 24px; } .pp-head h2 { font-size: 18px; } }
  @media (prefers-reduced-motion: reduce) { .pp-dialog[open] { animation: none; } }`;

  var body = `
  <p class="pp-date">Última atualização: 27 de outubro de 2026</p>

  <h3>1. Quem somos</h3>
  <p>Este site pertence a Ryan Zambianco, criador de conteúdo e produtor audiovisual que faz fotos e vídeos automotivos para lojas, concessionárias e eventos de carros, além de oferecer curso e mentoria sobre esse tipo de produção. Para falar conosco sobre esta política, use o WhatsApp +55 11 95957-4077 ou o Instagram @ryanzambianco.</p>

  <h3>2. Dados que este site coleta</h3>
  <p>Este site não tem formulário próprio, cadastro nem área de login. Não pedimos nome, e-mail ou telefone em nenhuma página.</p>
  <p>Como acontece em qualquer site, o serviço de hospedagem registra automaticamente dados técnicos do acesso, como endereço IP, data, hora, tipo de navegador e página visitada. Esses registros servem para segurança e para manter o site funcionando.</p>

  <h3>3. Quando você fala conosco pelo WhatsApp</h3>
  <p>Ao tocar em um botão de WhatsApp, você sai deste site e inicia uma conversa no aplicativo. A partir daí recebemos o seu número, o nome do seu perfil e as mensagens que você enviar. Usamos essas informações somente para responder, montar o orçamento e prestar o serviço contratado. O uso do aplicativo também segue a política de privacidade do próprio WhatsApp.</p>

  <h3>4. Links e serviços de terceiros</h3>
  <ul>
    <li><strong>Compra do curso:</strong> o pagamento é feito na Kiwify, fora deste site. Os dados de compra e pagamento que você informa lá são tratados pela Kiwify, conforme a política dela, e recebemos as informações necessárias para liberar o seu acesso e dar suporte.</li>
    <li><strong>Inscrição na mentoria:</strong> o botão "Garanta sua vaga" abre um formulário no forms.app. As respostas que você enviar, como nome e contato, chegam até nós e são usadas para avaliar a inscrição e falar com você sobre a vaga.</li>
    <li><strong>Instagram:</strong> os links levam ao Instagram, que tem política própria. Não controlamos os dados coletados por ele.</li>
    <li><strong>Fontes:</strong> em alguns aparelhos, as fontes do site são carregadas do Google Fonts. Nesse caso o Google recebe o endereço IP do aparelho para entregar o arquivo.</li>
  </ul>

  <h3>5. Cookies</h3>
  <p>Este site não usa cookies de publicidade nem de rastreamento. Se passarmos a usar ferramentas de medição de audiência ou de anúncios, esta política será atualizada antes.</p>

  <h3>6. Para que usamos os dados e com qual base legal</h3>
  <ul>
    <li><strong>Atender ao seu pedido de orçamento, à sua inscrição na mentoria ou à sua compra do curso, e prestar o serviço:</strong> procedimentos preliminares e execução de contrato, a pedido do titular (art. 7º, V, da Lei 13.709/2018, a LGPD).</li>
    <li><strong>Manter o site seguro e em funcionamento:</strong> legítimo interesse (art. 7º, IX, da LGPD).</li>
  </ul>

  <h3>7. Compartilhamento</h3>
  <p>Não vendemos nem alugamos dados pessoais. Os dados só passam por prestadores necessários ao funcionamento do site e do atendimento, como a hospedagem, o WhatsApp, a Kiwify e o forms.app, ou são entregues a autoridades quando a lei exigir.</p>

  <h3>8. Por quanto tempo guardamos</h3>
  <p>As conversas, os dados de orçamento e os dados de inscrição ficam guardados enquanto durar o atendimento, a mentoria ou o contrato e, depois disso, pelo prazo exigido por lei. Os registros técnicos de acesso seguem o prazo do serviço de hospedagem.</p>

  <h3>9. Seus direitos</h3>
  <p>A LGPD garante a você, entre outros, o direito de confirmar se tratamos seus dados, acessar, corrigir, pedir a exclusão, pedir a portabilidade e revogar um consentimento (art. 18). Para exercer qualquer um deles, fale conosco pelo WhatsApp informado no item 1. Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).</p>

  <h3>10. Alterações nesta política</h3>
  <p>Esta política pode ser atualizada. A data no topo indica a versão em vigor.</p>`;


  var seoBody = `
  <h3>O que Ryan Zambianco faz</h3>
  <p>Ryan Zambianco é criador de conteúdo e produtor audiovisual especializado no universo automotivo. Produz fotos e vídeos de carros para lojas, concessionárias e eventos, com captação mobile, enquadramentos estratégicos, transições criativas e edição dinâmica, pensados para as redes sociais.</p>
  <p>Também ensina a criar fotos e vídeos automotivos usando apenas o celular, em um curso online e em uma mentoria com acompanhamento ao vivo, com a experiência de quem já passou de 10 milhões de visualizações.</p>

  <h3>Serviços</h3>
  <ul>
    <li>Vídeos de carros para lojas e concessionárias, para Reels, Stories e vídeos curtos</li>
    <li>Fotos automotivas para o dia a dia e para anúncios em portais de venda</li>
    <li>Fotos de detalhes da dianteira, da traseira e do interior dos veículos</li>
    <li>Registro e cobertura de eventos de carros em vídeo</li>
    <li>Captação mobile com transições criativas e edição cinematográfica</li>
    <li>Vídeos de apresentação comercial de veículos para as redes sociais</li>
    <li>Curso de fotos e vídeos automotivos com o celular</li>
    <li>Mentoria ao vivo com acompanhamento e feedbacks individuais</li>
  </ul>

  <h3>Termos de busca</h3>
  <ul class="pp-tags">
    <li>vídeo automotivo</li>
    <li>fotos automotivas</li>
    <li>videomaker automotivo</li>
    <li>vídeo para concessionária</li>
    <li>vídeo para loja de carros</li>
    <li>fotos para anúncio de carro</li>
    <li>vídeo de carro para Instagram</li>
    <li>Reels de carros</li>
    <li>captação mobile</li>
    <li>edição de vídeo automotivo</li>
    <li>filmagem de evento de carros</li>
    <li>vídeo de carro com celular</li>
    <li>curso de vídeo automotivo</li>
    <li>curso de fotografia automotiva com celular</li>
    <li>mentoria de vídeo automotivo</li>
    <li>edição no CapCut</li>
    <li>videomaker em Santo André</li>
    <li>videomaker automotivo em São Paulo</li>
  </ul>`;

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var root = document.documentElement, last = null;
  function make(id, title, html) {
    var d = document.createElement('dialog');
    d.className = 'pp-dialog'; d.id = id; d.setAttribute('aria-labelledby', id + '-title');
    d.innerHTML = '<div class="pp-head"><h2 id="' + id + '-title">' + title + '</h2>' +
      '<button class="pp-close" type="button">Fechar</button></div><div class="pp-body">' + html + '</div>';
    document.body.appendChild(d);
    function close() { if (d.open && typeof d.close === 'function') d.close(); else d.removeAttribute('open'); }
    d.addEventListener('close', function () { root.classList.remove('pp-lock'); if (last && last.focus) last.focus(); });
    d.querySelector('.pp-close').addEventListener('click', close);
    d.addEventListener('click', function (e) { if (e.target === d) close(); });   // clique fora da janela fecha
    return function open(e) {
      if (e) e.preventDefault();
      last = document.activeElement;
      if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
      root.classList.add('pp-lock');
      d.querySelector('.pp-body').scrollTop = 0;
    };
  }
  var openPolicy = make('politica', 'Política de privacidade', body);
  var openSeo = make('seo', 'Serviços e termos de busca', seoBody);
  document.querySelectorAll('[data-politica]').forEach(function (a) { a.addEventListener('click', openPolicy); });
  document.querySelectorAll('[data-seo]').forEach(function (a) { a.addEventListener('click', openSeo); });
  if (location.hash === '#politica') openPolicy();
  if (location.hash === '#seo') openSeo();
})();
