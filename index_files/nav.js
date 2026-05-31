(function () {
  // ── JSON-LD structured data for every sub-page ────────
  var _ldPath = window.location.pathname;
  var _ldUrl  = 'https://minette.pretoriusse.net' + _ldPath;
  var _ldLabelMap = {
    'about-me':'About Me','my-skills':'My Skills',
    'education-experience-1':'Education & Experience',
    'hobbies':'Hobbies','contact':'Contact',
    'first-aid':'First Aid','microsoft-word':'Microsoft Word',
    'microsoft-excel':'Microsoft Excel','microsoft-access':'Microsoft Access',
    'notepad-plus-plus':'Notepad++','laerskool-fairland':'Laerskool Fairland',
    'spca-voluntary-work':'SPCA Voluntary Work','helpmekaar-kollege':'Helpmekaar Kollege',
    'admin-finances':'Admin / Finances','wits-student':'University Student',
    'waiter':'Waiter','tutoring':'Tutoring',
    'netball':'Netball','art':'Art','voortrekkers':'Voortrekkers'
  };
  var _crumbs = [{ pos:1, name:'Home', url:'https://minette.pretoriusse.net/' }];
  var _acc = 'https://minette.pretoriusse.net';
  _ldPath.replace(/\/$/, '').split('/').filter(Boolean).forEach(function(p, i) {
    _acc += '/' + p;
    _crumbs.push({ pos: i+2, name: _ldLabelMap[p]||p, url: _acc+'/' });
  });
  var _ld = {
    '@context':'https://schema.org',
    '@graph': [
      { '@type':'BreadcrumbList', 'itemListElement': _crumbs.map(function(c){ return {'@type':'ListItem','position':c.pos,'name':c.name,'item':c.url}; }) },
      { '@type':'Person','@id':'https://minette.pretoriusse.net/#person','name':'Minette van den Heever','jobTitle':'Education Leader','url':'https://minette.pretoriusse.net/','image':'https://cdn1.pretoriusse.net/CDN/Images/minette.jpg','worksFor':{'@type':'Organization','name':'Genius Premium Tuition','url':'https://www.geniuspremiumtuition.com'},'address':{'@type':'PostalAddress','addressLocality':'Cape Town','addressRegion':'Western Cape','addressCountry':'ZA'},'sameAs':['https://www.instagram.com/_mxnette_/','https://www.instagram.com/_mxnette_art/','https://www.geniuspremiumtuition.com/staff_profiles/minette-van-den-heever'] },
      { '@type':'WebPage','url':_ldUrl,'name':document.title,'isPartOf':{'@id':'https://minette.pretoriusse.net/#website'},'about':{'@id':'https://minette.pretoriusse.net/#person'},'inLanguage':'en','dateModified':'2025-05-31' }
    ]
  };
  var _s = document.createElement('script'); _s.type='application/ld+json'; _s.text=JSON.stringify(_ld);
  document.head.appendChild(_s);

  // Determine active page label for the eyebrow in page banner
  var path = window.location.pathname.replace(/\/$/, '');
  var segments = path.split('/').filter(Boolean);
  var pageMap = {
    'about-me': 'About Me',
    'my-skills': 'My Skills',
    'education-experience-1': 'Education & Experience',
    'hobbies': 'Hobbies',
    'contact': 'Contact',
    'first-aid': 'First Aid',
    'microsoft-word': 'Microsoft Word',
    'microsoft-excel': 'Microsoft Excel',
    'microsoft-access': 'Microsoft Access',
    'notepad-plus-plus': 'Notepad++',
    'laerskool-fairland': 'Laerskool Fairland',
    'spca-voluntary-work': 'SPCA Voluntary Work',
    'helpmekaar-kollege': 'Helpmekaar Kollege',
    'admin-finances': 'Admin / Finances',
    'wits-student': 'University Student',
    'waiter': 'Waiter',
    'tutoring': 'Tutoring',
    'netball': 'Netball',
    'art': 'Art',
    'voortrekkers': 'Voortrekkers'
  };

  var pageTitle = '';
  for (var i = segments.length - 1; i >= 0; i--) {
    if (pageMap[segments[i]]) { pageTitle = pageMap[segments[i]]; break; }
  }

  var parentMap = {
    'first-aid': 'My Skills', 'microsoft-word': 'My Skills',
    'microsoft-excel': 'My Skills', 'microsoft-access': 'My Skills',
    'notepad-plus-plus': 'My Skills',
    'laerskool-fairland': 'Education & Experience',
    'spca-voluntary-work': 'Education & Experience',
    'helpmekaar-kollege': 'Education & Experience',
    'admin-finances': 'Education & Experience',
    'wits-student': 'Education & Experience',
    'waiter': 'Education & Experience',
    'tutoring': 'Education & Experience',
    'netball': 'Hobbies', 'art': 'Hobbies', 'voortrekkers': 'Hobbies'
  };

  var eyebrow = parentMap[segments[segments.length - 1]] || '';
  var h1Text = document.title.split(' - ')[0] || pageTitle || 'Page';

  // ── Inject shared nav ─────────────────────────────────
  var navEl = document.createElement('nav');
  navEl.id = 'shared-nav';
  navEl.innerHTML =
    '<a href="/" class="sn-logo">Minette</a>' +
    '<ul class="sn-links">' +
    '  <li><a href="/#about">About</a></li>' +
    '  <li><a href="/#skills">Skills</a></li>' +
    '  <li><a href="/#experience">Experience</a></li>' +
    '  <li><a href="/#hobbies">Hobbies</a></li>' +
    '  <li><a href="/#contact">Contact</a></li>' +
    '</ul>' +
    '<a id="sn-wa" href="" class="sn-wa" title="WhatsApp"><img src="https://cdn1.pretoriusse.net/CDN/Images/whatsApp-icon.png?v=r7121" alt="WhatsApp"></a>' +
    '<button class="sn-burger" id="sn-burger" aria-label="Menu">' +
    '  <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    '    <line x1="2" y1="6" x2="20" y2="6"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="16" x2="20" y2="16"/>' +
    '  </svg>' +
    '</button>';
  document.body.insertBefore(navEl, document.body.firstChild);

  // Spacer
  var spacer = document.createElement('div');
  spacer.className = 'shared-spacer';
  document.body.insertBefore(spacer, navEl.nextSibling);

  // ── Page banner ───────────────────────────────────────
  var banner = document.createElement('div');
  banner.className = 'page-banner';
  banner.innerHTML =
    (eyebrow ? '<span class="eyebrow">' + eyebrow + '</span>' : '') +
    '<h1>' + h1Text + '</h1>';
  document.body.insertBefore(banner, spacer.nextSibling);

  // ── Mobile drawer ─────────────────────────────────────
  var drawer = document.createElement('div');
  drawer.id = 'shared-drawer';
  drawer.innerHTML =
    '<div class="sd-bg" id="sd-bg"></div>' +
    '<div class="sd-panel">' +
    '  <button class="sd-x" id="sd-x">×</button>' +
    '  <ul>' +
    '    <li><a href="/">Home</a></li>' +
    '    <li><a href="/#about">About</a></li>' +
    '    <li><a href="/#skills">Skills</a></li>' +
    '    <li><a href="/#experience">Experience</a></li>' +
    '    <li><a href="/#hobbies">Hobbies</a></li>' +
    '    <li><a href="/#contact">Contact</a></li>' +
    '  </ul>' +
    '</div>';
  document.body.appendChild(drawer);

  var closeDr = function () { drawer.classList.remove('open'); };
  document.getElementById('sn-burger').addEventListener('click', function () { drawer.classList.add('open'); });
  document.getElementById('sd-bg').addEventListener('click', closeDr);
  document.getElementById('sd-x').addEventListener('click', closeDr);

  // ── Shared footer ─────────────────────────────────────
  var footerEl = document.createElement('footer');
  footerEl.id = 'shared-footer';
  footerEl.innerHTML =
    '<div class="sf-logo">Minette van den Heever</div>' +
    '<p class="sf-tag">Teaching, learning, and living deliberately.</p>' +
    '<ul class="sf-nav">' +
    '  <li><a href="/#about">About</a></li>' +
    '  <li><a href="/#skills">Skills</a></li>' +
    '  <li><a href="/#experience">Experience</a></li>' +
    '  <li><a href="/#hobbies">Hobbies</a></li>' +
    '  <li><a href="/#contact">Contact</a></li>' +
    '</ul>' +
    '<div class="sf-line"></div>' +
    '<p class="sf-copy">© 2025 Minette van den Heever &nbsp;·&nbsp; Made with care by <a href="https://raine.pretoriusse.net">Raine Pretorius</a>.</p>';
  document.body.appendChild(footerEl);

  // ── WhatsApp link sync ────────────────────────────────
  // emails.js sets #whatsapp — mirror it to our nav anchor
  document.addEventListener('DOMContentLoaded', function () {
    var orig = document.getElementById('whatsapp');
    var ours = document.getElementById('sn-wa');
    if (orig && ours && orig.href) ours.href = orig.href;
  });

  // ── Fade-in observer ──────────────────────────────────
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e, i) {
      if (e.isIntersecting) {
        setTimeout(function () { e.target.classList.add('in'); }, i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-f]').forEach(function (el) { io.observe(el); });
})();
