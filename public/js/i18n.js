// i18n.js — shared translation dictionary + language switcher
// Loaded on every page, before main.js.
(function () {
  var DICT = {
  "en": {
    "shared.nav.rating": "Rating",
    "shared.nav.tournaments": "Tournaments",
    "shared.nav.about_club": "About club",
    "shared.nav.contact": "Contact",
    "shared.footer.club_name": "Table Tennis Club Beograd",
    "rating.page.title_tag": "TTCB Rating",
    "rating.page.heading": "TTCB Rating",
    "rating.search.placeholder": "Player search",
    "rating.col.rank": "Rank",
    "rating.col.player": "Player",
    "rating.col.tournaments": "Tournaments",
    "rating.col.winrate": "Win rate",
    "rating.col.rating": "Rating",
    "rating.state.no_rating": "No rating",
    "rating.state.no_players_found": "No players found.",
    "rating.state.load_error": "Could not load the rating. Please try again later.",
    "player_profile.page.title_tag": "Player Profile",
    "player_profile.label.player": "Player",
    "player_profile.label.id_prefix": "id",
    "player_profile.label.rating": "Rating",
    "player_profile.label.rank": "Rank",
    "player_profile.label.tournaments": "Tournaments",
    "player_profile.label.matches": "Matches",
    "player_profile.label.winrate": "Win rate",
    "player_profile.label.age": "Age",
    "player_profile.label.playing_hand": "Playing hand",
    "player_profile.label.blade": "Blade",
    "player_profile.label.right_rubber": "Right rubber",
    "player_profile.label.left_rubber": "Left rubber",
    "player_profile.value.left_hand": "Left hand",
    "player_profile.value.right_hand": "Right hand",
    "player_profile.state.player_not_found": "Player not found.",
    "player_profile.state.load_error": "Could not load player data. Please try again later.",
    "tournaments.page.title_tag": "Tournaments",
    "tournaments.page.heading": "Tournaments",
    "tournaments.section.scheduled": "Scheduled Tournaments",
    "tournaments.section.completed": "Completed Tournaments",
    "tournaments.category.league_series": "League Series",
    "tournaments.category.league_cup": "League Cup",
    "tournaments.category.league_masters": "League Masters",
    "tournaments.card.date_label": "Date",
    "tournaments.card.players_label": "Players",
    "tournaments.card.available_spots": "Available spots",
    "tournaments.card.join_button": "Join the Tournament",
    "tournaments.state.no_scheduled": "No scheduled tournaments right now.",
    "tournaments.state.load_error": "Could not load tournaments. Please try again later.",
    "tournament_detail.page.title_tag": "Tournament Detail",
    "tournament_detail.card.date_label": "Date",
    "tournament_detail.card.players_label": "Players",
    "tournament_detail.card.available_spots": "Available spots",
    "tournament_detail.banner.register_text": "To register for the tournament, send the organizer a message on Telegram with your first and last name in Latin characters.",
    "tournament_detail.banner.open_telegram": "Open Telegram",
    "tournament_detail.roster.title": "Tournament Players",
    "tournament_detail.roster.col_number": "№",
    "tournament_detail.roster.col_player": "Player",
    "tournament_detail.roster.col_tournaments": "Tournaments",
    "tournament_detail.roster.col_winrate": "Win rate",
    "tournament_detail.roster.col_rank": "Rank",
    "tournament_detail.roster.col_rating": "Rating",
    "tournament_detail.roster.empty_seat_name": "Player",
    "tournament_detail.state.not_found": "Tournament not found",
    "tournament_detail.state.load_error": "Could not load this tournament. Please try again later.",
    "about.page.title_tag": "About club TTCB",
    "about.h1": "About club TTCB",
    "about.p1": "Hi! I’m Gleb, the founder of the TTCB club and rating system.",
    "about.p2": "Our community brings together table tennis players of all skill levels, including complete beginners, to have a good time and improve their game.",
    "about.p3": "Every week we organize tournaments in different formats on weekends, and once a week we also get together to play and practice.",
    "about.p4_strong": "Subscribe to our channel to stay up to date with our tournaments and practice sessions.",
    "about.channel_button": "Open club channel",
    "about.rating_section.heading": "TTCB Rating",
    "about.rating_section.p1": "We have our own rating system, created to help every player track their progress. For those who enjoy competing at their best, it also provides an extra challenge and a clear goal to climb higher in the rankings.",
    "about.rating_section.p2": "You can learn more about how the rating system works here.",
    "about.rating_section.button": "About rating",
    "contact.page.title_tag": "Contact",
    "contact.heading": "Contact",
    "contact.p1": "If you have any questions or partnership proposals, feel free to contact me on Telegram: @glllebm",
    "contact.p2": "I’m always happy to help!",
    "contact.button": "Open Telegram",
    "about_rating.page.title_tag": "About Rating",
    "about_rating.h1": "About Rating",
    "about_rating.intro": "How the TTCB player rating is calculated: the rating-change formula after a match, tournament and score coefficients, rules for newcomers, and the bonus system.",
    "about_rating.s1.heading": "Rating change after a match",
    "about_rating.s1.lead": "Delta (Δ) of the TTCB rating after one match",
    "about_rating.s1.legend.rw": "winner's rating",
    "about_rating.s1.legend.rl": "loser's rating",
    "about_rating.s1.legend.k": "tournament coefficient (see section 2)",
    "about_rating.s1.legend.d": "score coefficient (see section 3)",
    "about_rating.s1.note1": "If <span class=\"var\">R<sub>W</sub></span> exceeds <span class=\"var\">R<sub>L</sub></span> by <b>100 points or more</b>, then <b>Δ = 0</b>.",
    "about_rating.s1.note2": "Rating <b>cannot drop below 1</b>.",
    "about_rating.s2.heading": "Tournament coefficient k",
    "about_rating.s2.lead": "Depends on the average rating of the tournament’s participants <span class=\"var\">R<sub>avg</sub></span>.",
    "about_rating.s2.table.col_ravg": "Average rating <span class=\"var\">R<sub>avg</sub></span>",
    "about_rating.s2.table.col_k": "k",
    "about_rating.s3.heading": "Score coefficient D",
    "about_rating.s3.lead": "Depends on the difference in sets at the end of the match",
    "about_rating.s3.table.col_setdiff": "Set difference",
    "about_rating.s3.table.col_examples": "Example scores",
    "about_rating.s3.table.col_d": "D",
    "about_rating.s3.row1": "1 set",
    "about_rating.s3.row2": "2 sets",
    "about_rating.s3.row3": "3 or more",
    "about_rating.s4.heading": "Starting rating and newcomers",
    "about_rating.s4.p1": "For a player taking part in a tournament for the first time, the starting rating is set by the tournament organizer based on their expert judgment.",
    "about_rating.s4.p2": "The starting TTCB rating is assigned based on the results of the tournament played, <span class=\"hl\">rounded to a multiple of 25, with a minimum of 100 points</span>, and may be adjusted retroactively based on the results of subsequent tournaments.",
    "about_rating.s4.lead": "Who counts as a newcomer",
    "about_rating.s4.p3": "A rating newcomer is a player who has played <b>no more than 5 tournaments</b>. For such players, in any tournament and regardless of the set difference:",
    "about_rating.s4.legend1": "regardless of the set difference",
    "about_rating.s4.legend2": "in case of a win",
    "about_rating.s4.legend3": "in case of a loss",
    "about_rating.s4.note": "The rating change for regular players does not depend on whether they play against a newcomer or another regular player.",
    "about_rating.s5.heading": "Bonus system",
    "about_rating.s5.lead": "Bonuses are awarded to participants who finish in the top three places, provided that:",
    "about_rating.s5.cond1": "the tournament had <b>at least 16 participants</b>;",
    "about_rating.s5.cond2": "the prize winner’s rating <span class=\"var\">R<sub>prize</sub></span> is no more than <b>200 points</b> above the average rating of the 12 strongest participants <span class=\"var\">R<sub>avg12</sub></span>.",
    "about_rating.s5.lead2": "The bonus ranges from 0.5% to 2.5% of the prize winner’s starting rating, depending on <span class=\"var\">R<sub>prize</sub></span> − <span class=\"var\">R<sub>avg12</sub></span> and the place taken.",
    "about_rating.s5.table.col_diff": "<span class=\"var\">R<sub>prize</sub></span> − <span class=\"var\">R<sub>avg12</sub></span>",
    "about_rating.s5.table.col_1st": "1st place",
    "about_rating.s5.table.col_2nd": "2nd place",
    "about_rating.s5.table.col_3rd": "3rd place",
    "about_rating.s5.note": "If several players in the same tournament finish in the same prize position, the resulting bonus for each is divided by the number of such players.",
    "about_rating.s6.heading": "Sequential calculation",
    "about_rating.s6.p1": "The rating is calculated sequentially, tournament by tournament.",
    "about_rating.s7.heading": "Manual rating adjustment",
    "about_rating.s7.p1": "A manual rating adjustment is possible provided that the player has not taken part in tournaments for <b>more than a year</b> and their playing level has changed noticeably during that time — <span class=\"hl\">by 100 rating points or more</span>."
  },
  "ru": {
    "shared.nav.rating": "Рейтинг",
    "shared.nav.tournaments": "Турниры",
    "shared.nav.about_club": "О клубе",
    "shared.nav.contact": "Контакты",
    "shared.footer.club_name": "Table Tennis Club Beograd",
    "rating.page.title_tag": "TTCB Рейтинг",
    "rating.page.heading": "TTCB Рейтинг",
    "rating.search.placeholder": "Поиск игрока",
    "rating.col.rank": "Место",
    "rating.col.player": "Игрок",
    "rating.col.tournaments": "Турниры",
    "rating.col.winrate": "% побед",
    "rating.col.rating": "Рейтинг",
    "rating.state.no_rating": "Нет",
    "rating.state.no_players_found": "Игроки не найдены",
    "rating.state.load_error": "Не удалось загрузить рейтинг. Попробуйте позже",
    "player_profile.page.title_tag": "Профиль игрока",
    "player_profile.label.player": "Игрок",
    "player_profile.label.id_prefix": "id",
    "player_profile.label.rating": "Рейтинг",
    "player_profile.label.rank": "Место",
    "player_profile.label.tournaments": "Турниры",
    "player_profile.label.matches": "Матчи",
    "player_profile.label.winrate": "% побед",
    "player_profile.label.age": "Возраст",
    "player_profile.label.playing_hand": "Игровая рука",
    "player_profile.label.blade": "Основание",
    "player_profile.label.right_rubber": "Правая накладка",
    "player_profile.label.left_rubber": "Левая накладка",
    "player_profile.value.left_hand": "Левая рука",
    "player_profile.value.right_hand": "Правая рука",
    "player_profile.state.player_not_found": "Игрок не найден",
    "player_profile.state.load_error": "Не удалось загрузить данные. Попробуйте позже",
    "tournaments.page.title_tag": "Турниры",
    "tournaments.page.heading": "Турниры",
    "tournaments.section.scheduled": "Предстоящие турниры",
    "tournaments.section.completed": "Завершенные турниры",
    "tournaments.category.league_series": "League Series",
    "tournaments.category.league_cup": "League Cup",
    "tournaments.category.league_masters": "League Masters",
    "tournaments.card.date_label": "Дата",
    "tournaments.card.players_label": "Игроки",
    "tournaments.card.available_spots": "Свободных мест",
    "tournaments.card.join_button": "Принять участие",
    "tournaments.state.no_scheduled": "Нет предстоящих турниров",
    "tournaments.state.load_error": "Не удалось загрузить турниры. Попробуйте позже",
    "tournament_detail.page.title_tag": "Турнир",
    "tournament_detail.card.date_label": "Дата",
    "tournament_detail.card.players_label": "Игроки",
    "tournament_detail.card.available_spots": "Свободных мест",
    "tournament_detail.banner.register_text": "Чтобы зарегестрироваться на турнир, отправьте сообщение организатору в Telegram свои Имя и Фамилию на латинице",
    "tournament_detail.banner.open_telegram": "Открыть Telegram",
    "tournament_detail.roster.title": "Учатники турнира",
    "tournament_detail.roster.col_number": "№",
    "tournament_detail.roster.col_player": "Игрок",
    "tournament_detail.roster.col_tournaments": "Турниры",
    "tournament_detail.roster.col_winrate": "% побед",
    "tournament_detail.roster.col_rank": "Место",
    "tournament_detail.roster.col_rating": "Рейтинг",
    "tournament_detail.roster.empty_seat_name": "Игрок",
    "tournament_detail.state.not_found": "Турнир не найден",
    "tournament_detail.state.load_error": "Не удалось загрузить турнир. Попробуйте позже",
    "about.page.title_tag": "О клубе TTCB",
    "about.h1": "О клубе TTCB",
    "about.p1": "Привет! Я Глеб, создатель клуба и рейтинга TTCB.",
    "about.p2": "Здесь собираются любители настольного тенниса разного уровня, а также совсем новички, чтобы классно проводить время и совершенствовать свои игровые навыки.",
    "about.p3": "Для этого мы каждую неделю проводим турниры разных форматов по выходным, а также раз в неделю собираемся, чтобы играть и тренироваться.",
    "about.p4_strong": "Подпишись на наш канал, чтобы следить за турнирами и тренировками",
    "about.channel_button": "Открыть канал",
    "about.rating_section.heading": "TTCB Рейтинг",
    "about.rating_section.p1": "У нас есть собственный рейтинг, который мы создали, чтобы каждый игрок мог отслеживать свой прогресс. А для тех, кто любит соревноваться в полную силу, рейтинг становится дополнительной мотивацией.",
    "about.rating_section.p2": "Подробнее о том, как рассчитывается рейтинг, можно прочитать здесь.",
    "about.rating_section.button": "О рейтинге",
    "contact.page.title_tag": "Контакты",
    "contact.heading": "Контакты",
    "contact.p1": "Если у вас есть вопросы или предложения о сотрудничестве, пишите мне в Telegram: @glllebm.",
    "contact.p2": "Я всегда на связи!",
    "contact.button": "Открыть Telegram",
    "about_rating.page.title_tag": "О рейтинге",
    "about_rating.h1": "О рейтинге",
    "about_rating.intro": "Как рассчитывается TTBC-рейтинг игроков: формула изменения после встречи, коэффициенты турнира и счёта, правила для новичков и система бонусов.",
    "about_rating.s1.heading": "Изменение рейтинга после матча",
    "about_rating.s1.lead": "Дельта (Δ) TTBC-рейтинга после одной встречи",
    "about_rating.s1.legend.rw": "рейтинг выигравшего",
    "about_rating.s1.legend.rl": "рейтинг проигравшего",
    "about_rating.s1.legend.k": "коэффициент турнира (смотри пункт 2)",
    "about_rating.s1.legend.d": "коэффициент счёта (смотри пункт 3)",
    "about_rating.s1.note1": "Если <span class=\"var\">R<sub>W</sub></span> на <b>100 и более</b> превышает <span class=\"var\">R<sub>L</sub></span>, то <b>Δ = 0</b>.",
    "about_rating.s1.note2": "Рейтинг <b>не может опуститься ниже 1</b>.",
    "about_rating.s2.heading": "Коэффициент турнира k",
    "about_rating.s2.lead": "Зависит от среднего рейтинга участников турнира <span class=\"var\">R<sub>avg</sub></span>.",
    "about_rating.s2.table.col_ravg": "Средний рейтинг <span class=\"var\">R<sub>avg</sub></span>",
    "about_rating.s2.table.col_k": "k",
    "about_rating.s3.heading": "Коэффициент счёта D",
    "about_rating.s3.lead": "Зависит от разницы в сетах по итогу встречи",
    "about_rating.s3.table.col_setdiff": "Разница в сетах",
    "about_rating.s3.table.col_examples": "Примеры счёта",
    "about_rating.s3.table.col_d": "D",
    "about_rating.s3.row1": "1 сет",
    "about_rating.s3.row2": "2 сета",
    "about_rating.s3.row3": "3 и более",
    "about_rating.s4.heading": "Стартовый рейтинг и новички",
    "about_rating.s4.p1": "Игроку, впервые принимающему участие в турнире, стартовый рейтинг выставляет организатор турнира по своему экспертному мнению.",
    "about_rating.s4.p2": "Стартовый TTBC-рейтинг назначается на основании результатов сыгранного турнира, <span class=\"hl\">кратный 25, минимум 100 пунктов</span>, и может меняться задним числом на основании результатов следующих турниров.",
    "about_rating.s4.lead": "Кто считается новичком",
    "about_rating.s4.p3": "Новичок рейтинга — игрок, сыгравший <b>не более 5 турниров</b>. Для таких игроков на любом турнире и при любой разнице сетов:",
    "about_rating.s4.legend1": "независимо от разницы в сетах",
    "about_rating.s4.legend2": "в случае победы",
    "about_rating.s4.legend3": "в случае поражения",
    "about_rating.s4.note": "Изменение рейтинга обычных игроков не зависит от того, играют они с новичком или с другим обычным игроком.",
    "about_rating.s5.heading": "Система бонусов",
    "about_rating.s5.lead": "Бонусы начисляются участникам, занявшим первые три места, при соблюдении условий:",
    "about_rating.s5.cond1": "в турнире участвовало <b>не менее 16 человек</b>;",
    "about_rating.s5.cond2": "рейтинг призёра <span class=\"var\">R<sub>prize</sub></span> не более чем на <b>200 баллов</b> выше среднего рейтинга 12 сильнейших участников <span class=\"var\">R<sub>avg12</sub></span>.",
    "about_rating.s5.lead2": "Бонус — от 0.5 до 2.5 % стартового рейтинга призёра, в зависимости от <span class=\"var\">R<sub>prize</sub></span> − <span class=\"var\">R<sub>avg12</sub></span> и занятого места.",
    "about_rating.s5.table.col_diff": "<span class=\"var\">R<sub>prize</sub></span> − <span class=\"var\">R<sub>avg12</sub></span>",
    "about_rating.s5.table.col_1st": "1 место",
    "about_rating.s5.table.col_2nd": "2 место",
    "about_rating.s5.table.col_3rd": "3 место",
    "about_rating.s5.note": "Если в одном турнире несколько игроков заняли одно и то же призовое место, итоговый бонус каждого делится на количество таких игроков.",
    "about_rating.s6.heading": "Последовательный расчёт",
    "about_rating.s6.p1": "Рейтинг рассчитывается последовательно от турнира к турниру.",
    "about_rating.s7.heading": "Ручное изменение рейтинга",
    "about_rating.s7.p1": "Ручное изменение рейтинга возможно при условии, что игрок не принимал участия в турнирах <b>более года</b> и за это время уровень его игры заметно изменился — <span class=\"hl\">от 100 пунктов рейтинга и больше</span>."
  }
};

  var STORAGE_KEY = 'ttcb_lang';

  function detectDefaultLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'ru') return stored;
    } catch (e) {}
    var nav = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en').toLowerCase();
    return nav.indexOf('ru') === 0 ? 'ru' : 'en';
  }

  var currentLang = detectDefaultLang();

  // Public helper for inline page scripts to translate JS-generated strings
  // (error messages, empty states, dynamically-built table rows, etc).
  // Usage: T('rating.state.no_rating')
  window.T = function (key) {
    var table = DICT[currentLang] || DICT.en;
    if (table && Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (DICT.en && Object.prototype.hasOwnProperty.call(DICT.en, key)) return DICT.en[key];
    return key;
  };

  window.getLang = function () { return currentLang; };

  function applyTranslations() {
    document.documentElement.setAttribute('lang', currentLang);

    // Plain text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = window.T(key);
    });

    // Rich HTML content (e.g. sentences containing <span class="var">/<sub> formula markup
    // that must be preserved — used mainly on about_rating.html)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = window.T(key);
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', window.T(key));
    });

    // Toggle button active states
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('active', isActive);
    });

    // Let page-specific scripts (e.g. TTCB_Rating.html's fetch/render logic)
    // know translations changed, in case they need to re-render dynamic
    // content (tables built from API data) with the new language.
    document.dispatchEvent(new CustomEvent('ttcb:langchange', { detail: { lang: currentLang } }));
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ru') return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyTranslations();
  }
  window.setLang = setLang;

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations();
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
