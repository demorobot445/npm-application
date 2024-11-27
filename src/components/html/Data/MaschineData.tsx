import { store } from "../../../store";

export const MaschineCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 18:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135498?h=2f9114bebd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>MONTAGE</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Alexander stellt Ihnen die mechanische Konstruktion vor. Entdecken
              Sie unsere Stärken und erfahren Sie, was uns Einzigartig macht:
            </p>
            <h3>DIE NMH DECKT EIN GROSSES SPEKTRUM AB:</h3>
            <ul>
              <li>
                Mechanische, elektrische, pneumatische und hydraulische Montage
              </li>
            </ul>
            <h3>SONDERMASCHINEN, DIE WIR FÜR SIE FERTIGEN KÖNNEN:</h3>
            <ul>
              <li>Große Verkettungsanlagen</li>
              <li>Kleine Standalone-Anlagen</li>
              <li>Präzise Messanlagen</li>
              <li>Roboterzellen</li>
              <li>Greifsysteme</li>
              <li>Lastaufnahmemittel</li>
              <li>Decken- und bodengeführte Manipulatoren</li>
            </ul>
            <h3>ABLAUF VON KUNDENPROJEKTEN:</h3>
            <p>
              Sobald die Konstruktionspläne vorliegen, starten wir den Prozess
              und montieren die Anlage Ab diesem Zeitpunkt sind Kunden jederzeit
              herzlich willkommen, uns zu besuchen. Wir freuen uns auf Ihre
              Anfrage!
            </p>
          </div>
        </>
      );
    case 19:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135498?h=2f9114bebd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>MONTAGE</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Alexander stellt Ihnen die mechanische Konstruktion vor. Entdecken
              Sie unsere Stärken und erfahren Sie, was uns Einzigartig macht:
            </p>
            <h3>DIE NMH DECKT EIN GROSSES SPEKTRUM AB:</h3>
            <ul>
              <li>
                Mechanische, elektrische, pneumatische und hydraulische Montage
              </li>
            </ul>
            <h3>SONDERMASCHINEN, DIE WIR FÜR SIE FERTIGEN KÖNNEN:</h3>
            <ul>
              <li>Große Verkettungsanlagen</li>
              <li>Kleine Standalone-Anlagen</li>
              <li>Präzise Messanlagen</li>
              <li>Roboterzellen</li>
              <li>Greifsysteme</li>
              <li>Lastaufnahmemittel</li>
              <li>Decken- und bodengeführte Manipulatoren</li>
            </ul>
            <h3>ABLAUF VON KUNDENPROJEKTEN:</h3>
            <p>
              Sobald die Konstruktionspläne vorliegen, starten wir den Prozess
              und montieren die Anlage Ab diesem Zeitpunkt sind Kunden jederzeit
              herzlich willkommen, uns zu besuchen. Wir freuen uns auf Ihre
              Anfrage!
            </p>
          </div>
        </>
      );
    case 20:
      store.banner = {
        type: "img",
        src: "/pictures/Modulares-HHG.jpg",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>MODULARES HANDHABUNGSGERÄT</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Unser eigenentwickeltes Modulares Handhabungsgerät verbessert die
              Ergonomie und erhöht den Bedienkomfort. Es eignet sich für
              vielfältige Aufgaben wie Heben von Lasten, Überkopfarbeiten,
              statisches Halten bei der Montage, Kom- missionieren, Verpacken,
              Befüllen und als Montagehelfer. Zudem bietet es zahlreiche weitere
              Einsatzmöglichkeiten zur Unterstützung Ihrer Produktionsprozesse.
            </p>
            <h3>MEHRWERT:</h3>
            <ul>
              <li>Steigerung der Qualität und Arbeitsergonomie</li>
              <li>Vermeidung von Überlastung der Mitarbeiter</li>
              <li>ReduktionvonHerstellungskostendurch</li>
              optimierte Abläufe
              <li>Förderung ressourcenschonender Prozesse und</li>
              Reduktion von Rückenproblemen
              <li>Über 1000 Variationen zur individuellen Anpassung</li>
              an Ihre Anforderungen
            </ul>
            <h3>BEISPIEL AUTOMOBIL:</h3>
            <li>
              Fügen und Handhabung von Fahrzeugfront, Fahrzeugheck, Reifen,
              Cockpit, Sitzen usw.
            </li>
            <p>
              Wir übernehmen die komplette Konfiguration des Geräts und bieten
              individuelle Beratung für eine optimale Lösung.
            </p>
          </div>
        </>
      );
    case 21:
      store.banner = {
        type: "img",
        src: "/pictures/Einzelanlagen.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>EINZELANLAGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Im Sondermaschinenbau bieten wir Ihnen eine breite Palette an
              maßgeschneiderten Lösungen, die Ihre Produktionsprozesse
              effizienter und präziser gestalten. UnsereTechnologien und Systeme
              sind darauf ausgelegt, höchste Leistungsfähigkeit und Flexibilität
              zu bieten. Von Montagetechnik bis Automatisierung - wir
              unterstützen Sie mit Innovativen und nachhaltigen Lösungen.
            </p>
            <h3>FOLGENDE BEREICHE DECKEN WIR AB:</h3>
            <ul>
              <li>Montagetechnik</li>
              <li>Messtechnik</li>
              <li>Spanntechnik</li>
              <li>Schweißtechnik</li>
              <li>Einpresstechnik</li>
              <li>Achsmontage</li>
              <li>Visiontechnik</li>
              <li>Prüftechnik</li>
              <li>Manipulator</li>
              <li>Bremsscheibenprüfung</li>
              <li>Transporttechnik</li>
              <li>Hebezeuge</li>
              <li>Handhabungsgerät</li>
              <li>Wärmeofen</li>
              <li>Automation</li>
            </ul>
            <p>
              Mit langjähriger Erfahrung stehen wir Ihnen als verlässlicher
              Partner zur Seite, um Ihre Prozesse optimal zu gestalten.
            </p>
          </div>
        </>
      );
    case 22:
      store.banner = {
        type: "img",
        src: "/pictures/Verkettete-Anlagen.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>VERKETTETE ANLAGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Unsere verketteten Anlagen ermöglichen die nahtlose Integration
              verschiedener Einheiten in einen durchgängigen, automatisierten
              Prozess. Durch die intelligente Kombination von Montagetechnik,
              Messtechnik, Spanntechnik und weiteren Modulen lassen sich
              komplexe Produktionsschritte effizient miteinander verbinden.
            </p>
            <h3>EIN BEISPIEL:</h3>
            <p>
              Eine verkettete Anlage kann mit einer Montagestation begin- nen,
              gefolgt von einer Prüfeinheit, um die Produktqualität
              sicherzustellen. Anschließend erfolgt die Spanntechnik für präzise
              Fixierungen, bevor die Schweißtechnik zum Einsatz kommt. Zum
              Abschluss sorgt dieTransporttechnik für den reibungslosen Übergang
              zum nächsten Produktionsschritt oder zur Verpackungseinheit.
            </p>
            <p>
              Alle Module können individuell angepasst und erweitert werden, um
              den Anforderungen Ihrer Produktion gerecht zu werden. So entsteht
              eine effiziente und flexible Lösung, die Ihren gesamten
              Fertigungsprozess automatisiert und optimiert.
            </p>
          </div>
        </>
      );
  }
};

export const MaschineNotCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 18:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017906379?h=8ac4639c6b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>MONTAGE</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Patrick gibt dir Einblicke in die mechanische Montage. Entdecke
              seine abwechslungsreichen Aufgaben:
            </p>
            <ul>
              <li>
                Eigenverantwortliche Montage und Inbetriebnahme nach Zeichnung,
                Stücklisten und 3D-PDF
              </li>
              <li>Internationale Montageeinsätze</li>
              <li>Installation von Pneumatik und Hydraulik</li>
              <li>Terminverantwortung</li>
            </ul>
          </div>
        </>
      );
    case 19:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018189883?h=e31f95957f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ELEKTRISCHER MONTEUR</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Osama nimmt dich mit in die elektrische Installation. Lerne seine
              abwechslungsreichen Aufgaben kennen:
            </p>
            <ul>
              <li>Installation von Schaltschränken gemäß E-Plänen</li>
              <li>Verdrahten und Verkabeln von Maschinen</li>
              <li>
                Montage von Maschinen sowohl im Hausals auch beim Kunden vor Ort
              </li>
              <li>Arbeit an verschiedenen Projektenbei diversen Kunden</li>
            </ul>
          </div>
        </>
      );
    case 20:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017894933?h=f3845a5cc9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>MODULARES HANDHABUNGSGERÄT</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Unser eigenentwickeltes Modulares Handhabungsgerät verbessert die
              Ergonomie und erhöht den Bedienkomfort. Es eignet sich für
              vielfältige Aufgaben wie Heben von Lasten, Überkopfarbeiten,
              statisches Halten bei der Montage, Kom- missionieren, Verpacken,
              Befüllen und als Montagehelfer. Zudem bietet es zahlreiche weitere
              Einsatzmöglichkeiten zur Unterstützung Ihrer Produktionsprozesse.
            </p>
            <h3>MEHRWERT:</h3>
            <ul>
              <li>Steigerung der Qualität und Arbeitsergonomie</li>
              <li>Vermeidung von Überlastung der Mitarbeiter</li>
              <li>ReduktionvonHerstellungskostendurch</li>
              optimierte Abläufe
              <li>Förderung ressourcenschonender Prozesse und</li>
              Reduktion von Rückenproblemen
              <li>Über 1000 Variationen zur individuellen Anpassung</li>
              an Ihre Anforderungen
            </ul>
            <h3>BEISPIEL AUTOMOBIL:</h3>
            <li>
              Fügen und Handhabung von Fahrzeugfront, Fahrzeugheck, Reifen,
              Cockpit, Sitzen usw.
            </li>
            <p>
              Wir übernehmen die komplette Konfiguration des Geräts und bieten
              individuelle Beratung für eine optimale Lösung.
            </p>
          </div>
        </>
      );
    case 21:
      store.banner = {
        type: "img",
        src: "/pictures/Einzelanlagen.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>EINZELANLAGEN</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Im Sondermaschinenbau bieten wir Ihnen eine breite Palette an
              maßgeschneiderten Lösungen, die Ihre Produktionsprozesse
              effizienter und präziser gestalten. UnsereTechnologien und Systeme
              sind darauf ausgelegt, höchste Leistungsfähigkeit und Flexibilität
              zu bieten. Von Montagetechnik bis Automatisierung - wir
              unterstützen Sie mit Innovativen und nachhaltigen Lösungen.
            </p>
            <h3>FOLGENDE BEREICHE DECKEN WIR AB:</h3>
            <ul>
              <li>Montagetechnik</li>
              <li>Messtechnik</li>
              <li>Spanntechnik</li>
              <li>Schweißtechnik</li>
              <li>Einpresstechnik</li>
              <li>Achsmontage</li>
              <li>Visiontechnik</li>
              <li>Prüftechnik</li>
              <li>Manipulator</li>
              <li>Bremsscheibenprüfung</li>
              <li>Transporttechnik</li>
              <li>Hebezeuge</li>
              <li>Handhabungsgerät</li>
              <li>Wärmeofen</li>
              <li>Automation</li>
            </ul>
            <p>
              Mit langjähriger Erfahrung stehen wir Ihnen als verlässlicher
              Partner zur Seite, um Ihre Prozesse optimal zu gestalten.
            </p>
          </div>
        </>
      );
    case 22:
      store.banner = {
        type: "img",
        src: "/pictures/Verkettete-Anlagen.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>VERKETTETE ANLAGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <button>
                <img src="/icons/pdf.png" alt="icon" />
              </button>
            )}
          </div>
          <div className="popup_box">
            <p>
              Unsere verketteten Anlagen ermöglichen die nahtlose Integration
              verschiedener Einheiten in einen durchgängigen, automatisierten
              Prozess. Durch die intelligente Kombination von Montagetechnik,
              Messtechnik, Spanntechnik und weiteren Modulen lassen sich
              komplexe Produktionsschritte effizient miteinander verbinden.
            </p>
            <h3>EIN BEISPIEL:</h3>
            <p>
              Eine verkettete Anlage kann mit einer Montagestation begin- nen,
              gefolgt von einer Prüfeinheit, um die Produktqualität
              sicherzustellen. Anschließend erfolgt die Spanntechnik für präzise
              Fixierungen, bevor die Schweißtechnik zum Einsatz kommt. Zum
              Abschluss sorgt dieTransporttechnik für den reibungslosen Übergang
              zum nächsten Produktionsschritt oder zur Verpackungseinheit.
            </p>
            <p>
              Alle Module können individuell angepasst und erweitert werden, um
              den Anforderungen Ihrer Produktion gerecht zu werden. So entsteht
              eine effiziente und flexible Lösung, die Ihren gesamten
              Fertigungsprozess automatisiert und optimiert.
            </p>
          </div>
        </>
      );
  }
};
