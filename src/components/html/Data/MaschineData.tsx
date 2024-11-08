export const MaschineCustomer = ({ value }: { value: number }) => {
  switch (value) {
    case 18:
      return (
        <>
          <h2>MONTAGE</h2>
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
            <button className="popup_button">KARRIERE BEI NMH</button>
          </div>
        </>
      );
    case 19:
      return (
        <>
          <h2> ELEKTRISCHER MONTEUR</h2>
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

            <button className="popup_button">KARRIERE BEI NMH</button>
          </div>
        </>
      );
    case 20:
      return (
        <>
          <h2>MODULARES HANDHABUNGSGERÄT</h2>
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

            <button className="popup_button"> BROSCHÜRE</button>
          </div>
        </>
      );
    case 21:
      return (
        <>
          <h2>EINZELANLAGEN</h2>
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
            <button className="popup_button">MEHR ERFAHREN</button>
          </div>
        </>
      );
    case 22:
      return (
        <>
          <h2>VERKETTETE ANLAGEN</h2>
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
            <button className="popup_button"> MEHR ERFAHREN</button>
          </div>
        </>
      );
  }
};

export const MaschineNotCustomer = ({ value }: { value: number }) => {
  switch (value) {
    case 18:
      return (
        <>
          <h2>MONTAGE</h2>
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
            <button className="popup_button">KARRIERE BEI NMH</button>
          </div>
        </>
      );
    case 19:
      return (
        <>
          <h2>MONTAGE</h2>
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
            <button className="popup_button">KARRIERE BEI NMH</button>
          </div>
        </>
      );
    case 20:
      return (
        <>
          <h2>MODULARES HANDHABUNGSGERÄT</h2>
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
            <button className="popup_button"> BROSCHÜRE</button>
          </div>
        </>
      );
    case 21:
      return (
        <>
          <h2>EINZELANLAGEN</h2>
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
            <button className="popup_button">MEHR ERFAHREN</button>
          </div>
        </>
      );
    case 22:
      return (
        <>
          <h2>VERKETTETE ANLAGEN</h2>
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
            <button className="popup_button"> MEHR ERFAHREN</button>
          </div>
        </>
      );
  }
};
