// nav.js — shared navigation component
(function () {
  const RATING_SVG = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;"><path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM18 11.5C17.7239 11.5 17.5 11.7239 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5C15.5898 18.5 18.5 15.5898 18.5 12C18.5 11.7239 18.2761 11.5 18 11.5Z" fill="currentColor"></path></svg>`;
  const TOURNAMENT_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;"><path d="M16.8114 13.9323C17.2805 13.758 17.8155 13.5823 18.2936 13.4049C18.0988 13.7752 17.9741 14.1858 18.1013 14.528C18.7985 16.4035 19.9845 18.6704 20.0004 18.7008L17.551 19.6112C17.5434 19.5784 16.9614 17.0865 16.2643 15.2108C16.1371 14.8687 15.775 14.6389 15.3857 14.4857C15.8522 14.3108 16.3557 14.1017 16.8114 13.9323ZM12.6329 2.69258C15.6131 1.58483 19.2017 3.70181 20.1269 7.30168C21.3678 12.1302 19.2321 12.2821 16.5657 13.2732C13.8994 14.2643 12.1834 15.5439 9.96931 11.0772C8.31864 7.74715 9.65279 3.80045 12.6329 2.69258Z" fill="currentColor"></path><path d="M13.12 16.6257C13.0651 17.0404 13.0897 17.4686 13.3271 17.7458C14.6266 19.2631 16.5194 20.9773 16.5507 21.0056L14.5663 22.7058C14.5475 22.6771 13.1403 20.5399 11.8388 19.0202C11.6012 18.7431 11.1818 18.6527 10.7636 18.6433C11.1507 18.3114 11.5641 17.9288 11.9442 17.6032C12.3134 17.2871 12.7408 16.9486 13.12 16.6257ZM4.14444 8.49582C5.28001 7.52334 6.7877 7.17363 8.28604 7.39426C8.1706 8.76045 8.41739 10.1981 9.07315 11.5212C10.2132 13.8211 11.4114 15.0416 12.9882 15.2155C13.1758 15.2362 13.3607 15.2366 13.5429 15.2282C13.0324 15.8477 12.2746 16.3947 11.4872 17.0691C9.32681 18.9194 8.15739 20.7126 4.538 17.2849C1.83943 14.7291 1.72973 10.5641 4.14444 8.49582ZM9.26846 7.62277C10.6065 8.04783 11.8685 8.93071 12.7685 10.2351C14.0189 12.0476 14.3347 13.2312 14.1132 14.1472C12.6718 14.468 11.429 14.0216 9.96964 11.0778C9.41168 9.95223 9.19608 8.75589 9.26846 7.62277Z" fill="currentColor"></path></svg>`;
  const HAM_SVG = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
    <line class="ham-line ham-top" x1="6" y1="14" x2="22" y2="14" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round"/>
    <line class="ham-line ham-mid" x1="6" y1="14" x2="22" y2="14" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round"/>
    <line class="ham-line ham-bot" x1="6" y1="14" x2="22" y2="14" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

  function tabsHTML(activePage) {
    const ratingActive = activePage === 'rating';
    const tourActive = activePage === 'tournaments';
    return `
      <a href="/" style="display:flex;align-items:center;gap:7px;${ratingActive ? 'background:#F74A96;color:#fff;' : 'color:#1A1A1A;'}border-radius:10px;padding:9px 16px;font-size:15px;font-weight:500;cursor:pointer;text-decoration:none;transition:background 0.15s ease;" onmouseover="if(!${ratingActive})this.style.background='#fff'" onmouseout="if(!${ratingActive})this.style.background=''">${RATING_SVG.replace('fill="currentColor"', `fill="${ratingActive ? '#fff' : '#1A1A1A'}"`)}&nbsp;Rating</a>
      <a href="/tournaments.html" style="display:flex;align-items:center;gap:7px;${tourActive ? 'background:#F74A96;color:#fff;' : 'color:#1A1A1A;'}border-radius:10px;padding:9px 16px;font-size:15px;font-weight:500;cursor:pointer;text-decoration:none;transition:background 0.15s ease;" onmouseover="if(!${tourActive})this.style.background='#fff'" onmouseout="if(!${tourActive})this.style.background=''">${TOURNAMENT_SVG.replace('fill="currentColor"', `fill="${tourActive ? '#fff' : '#1A1A1A'}"`)}&nbsp;Tournaments</a>`;
  }

  function tabsMobileHTML(activePage) {
    const ratingActive = activePage === 'rating';
    const tourActive = activePage === 'tournaments';
    return `
      <a href="/" style="display:flex;align-items:center;gap:6px;${ratingActive ? 'background:#F74A96;color:#fff;' : 'color:#1A1A1A;'}border-radius:10px;padding:8px 14px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;text-decoration:none;transition:background 0.15s ease;">${RATING_SVG.replace('fill="currentColor"', `fill="${ratingActive ? '#fff' : '#1A1A1A'}"`)}&nbsp;Rating</a>
      <a href="/tournaments.html" style="display:flex;align-items:center;gap:6px;${tourActive ? 'background:#F74A96;color:#fff;' : 'color:#1A1A1A;'}border-radius:10px;padding:8px 14px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;text-decoration:none;transition:background 0.15s ease;">${TOURNAMENT_SVG.replace('fill="currentColor"', `fill="${tourActive ? '#fff' : '#1A1A1A'}"`)}&nbsp;Tournaments</a>`;
  }

  window.renderNav = function (activePage) {
    const style = `
      <style>
        [data-nav="mobile"] { display: none; }
        [data-overlay] { display: none; }
        @media (max-width: 768px) {
          [data-nav="desktop"] { display: none !important; }
          [data-nav="mobile"] { display: flex !important; }
          [data-overlay] { display: flex !important; }
        }
        [data-overlay] { opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease; }
        [data-page][data-menu="open"] [data-overlay] { opacity: 1; visibility: visible; }
        .ham-line { transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; transform-box: view-box; transform-origin: 14px 14px; }
        .ham-top { transform: translateY(-5px); }
        .ham-bot { transform: translateY(5px); }
        [data-page][data-menu="open"] .ham-top { transform: rotate(45deg); }
        [data-page][data-menu="open"] .ham-mid { opacity: 0; }
        [data-page][data-menu="open"] .ham-bot { transform: rotate(-45deg); }
      </style>`;

    const desktopNav = `
      <div data-nav="desktop" style="position:sticky;top:8px;z-index:40;max-width:900px;margin:0 auto;background:#fff;border-radius:24px;padding:10px 14px;display:flex;align-items:center;">
        <div style="flex:1;display:flex;justify-content:flex-start;">
          <div style="display:flex;align-items:center;gap:4px;background:#F0F0F0;border-radius:12px;padding:4px;">
            ${tabsHTML(activePage)}
          </div>
        </div>
        <div style="flex:0 0 auto;display:flex;justify-content:center;">
          <img src="/icons/logo.svg" width="40" height="40" alt="TTCB" style="display:block;">
        </div>
        <div style="flex:1;display:flex;justify-content:flex-end;gap:8px;">
          <a href="/about.html" style="display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #EAEAEA;border-radius:12px;padding:9px 16px;font-size:15px;font-weight:500;color:#1A1A1A;cursor:pointer;text-decoration:none;transition:background 0.15s ease;" onmouseover="this.style.background='#F7F7F7'" onmouseout="this.style.background='#fff'">
            <img src="/icons/info.svg" width="16" height="16" alt="" style="display:block;">About rating
          </a>
          <a href="/contacts.html" style="display:flex;align-items:center;background:#fff;border:1px solid #EAEAEA;border-radius:12px;padding:9px 16px;font-size:15px;font-weight:500;color:#1A1A1A;cursor:pointer;text-decoration:none;transition:background 0.15s ease;" onmouseover="this.style.background='#F7F7F7'" onmouseout="this.style.background='#fff'">Contacts</a>
        </div>
      </div>`;

    const mobileNav = `
      <div data-nav="mobile" style="position:sticky;top:8px;z-index:40;max-width:900px;margin:0 auto;background:#fff;border-radius:24px;padding:10px 14px;align-items:center;gap:12px;">
        <div id="burger-btn" style="flex:0 0 auto;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
          ${HAM_SVG}
        </div>
        <div style="flex:1;display:flex;justify-content:flex-end;min-width:0;">
          <div style="display:flex;align-items:center;gap:4px;background:#F0F0F0;border-radius:12px;padding:4px;">
            ${tabsMobileHTML(activePage)}
          </div>
        </div>
      </div>`;

    const overlay = `
      <div data-overlay="open" style="position:fixed;inset:0;z-index:50;background:#F0F0F0;padding:8px;box-sizing:border-box;flex-direction:column;gap:12px;">
        <div style="flex:0 0 auto;background:#fff;border-radius:24px;padding:10px 14px;display:flex;align-items:center;gap:12px;">
          <div id="close-btn" style="flex:0 0 auto;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;">${HAM_SVG}</div>
          <div style="flex:1;display:flex;justify-content:flex-end;min-width:0;">
            <div style="display:flex;align-items:center;gap:4px;background:#F0F0F0;border-radius:12px;padding:4px;">
              ${tabsMobileHTML(activePage)}
            </div>
          </div>
        </div>
        <div style="flex:1;background:#fff;border-radius:24px;padding:20px;display:flex;flex-direction:column;overflow:hidden;">
          <div style="font-size:48px;font-weight:700;color:#E0E0E0;line-height:1.1;margin-bottom:auto;">Table<br>Tennis Club<br>Beograd</div>
          <div style="margin-top:32px;display:flex;flex-direction:column;gap:12px;">
            <a href="/about.html" style="background:#F7F7F7;border-radius:20px;padding:18px 20px;display:flex;align-items:center;gap:16px;cursor:pointer;text-decoration:none;color:#1A1A1A;transition:background 0.15s ease;" onmouseover="this.style.background='#F0F0F0'" onmouseout="this.style.background='#F7F7F7'">
              <img src="/icons/info-32.svg" width="32" height="32" alt="" style="display:block;flex:0 0 auto;">
              <span style="font-size:20px;font-weight:500;">About rating</span>
            </a>
            <a href="/contacts.html" style="background:#F7F7F7;border-radius:20px;padding:18px 20px;display:flex;align-items:center;gap:16px;cursor:pointer;text-decoration:none;color:#1A1A1A;transition:background 0.15s ease;" onmouseover="this.style.background='#F0F0F0'" onmouseout="this.style.background='#F7F7F7'">
              <img src="/icons/at-32.svg" width="32" height="32" alt="" style="display:block;flex:0 0 auto;">
              <span style="font-size:20px;font-weight:500;">Contacts</span>
            </a>
          </div>
        </div>
      </div>`;

    document.head.insertAdjacentHTML('beforeend', style);
    const container = document.getElementById('nav-container');
    if (container) container.innerHTML = desktopNav + mobileNav + overlay;

    const page = document.querySelector('[data-page]');
    document.getElementById('burger-btn')?.addEventListener('click', () => {
      page?.setAttribute('data-menu', 'open');
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('close-btn')?.addEventListener('click', () => {
      page?.setAttribute('data-menu', 'closed');
      document.body.style.overflow = '';
    });
  };
})();
