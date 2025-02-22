import { store } from "../../../store";

export const BuroNotCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 23:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017907104?h=e5e526b81e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>RECRUITING</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Melina stellt sich vor - deine Ansprechpartnerin im Recruiting.
              Hier erfährst du, wie sie dich begleiten wird:
            </p>
            <ul>
              <li>
                Deine Ansprechpartnerin für alle Fragen rund um den Einstieg,
                von der Bewerbung bis zur ersten Schulung
              </li>
              <li>
                Zuständig für das Recruiting und die Organisation von
                Weiterbildungen
              </li>
              <li>
                Freut sich darauf, dich und deine Ideen im Team willkommen zu
                heißen
              </li>
            </ul>
          </div>
        </>
      );
    case 24:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017909154?h=286af5112c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>VERTRIEB</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Jochen nimmt dich mit in den Vertrieb von Sondermaschinen. Erfahre
              mehr über seine vielseitigen Aufgaben:
            </p>
            <ul>
              <li>
                Betreuung der Kunden von der ersten Anfrage bis zur Übergabe ans
                Projektteam
              </li>
              <li>
                Entwicklung maßgeschneiderter Lösungen für individuelle
                Kundenbedürfnisse
              </li>
              <li>Zusammenarbeit mit Kunden aus verschiedensten Branchen</li>
              <li>
                Aufbau und Pflege langfristiger Partnerschaften auf Augenhöhe
              </li>
            </ul>
          </div>
        </>
      );
    case 25:
      store.banner = {
        type: "img",
        src: "/pictures/Elektrokonstruktion.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ELEKTROKONSTRUKTION</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/011_NMH_Flyer_Messtechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <h3>Deine Aufgaben als SPS-Programmierer bei NMH:</h3>
            <ul>
              <li>Programmierung unserer Mess-, Prüf- und Montageanlagen.</li>
              <li>
                Ausarbeitung und Erstellung der Bedienkonzepte für Steuerung und
                HMI zuständig.
              </li>
              <li>
                Mitwirkung bei der Erstellung von Maschinendokumentationen.
              </li>
              <li>
                Du begleitest Serviceeinsätze im In- und Ausland und wirkst bei
                der Inbetriebnahme unsere Maschinen und Anlagen mit.
              </li>
              <li>Schulung der Anlagenbediener und Instandhalter.</li>
              <li>
                Du übernimmst die Kommunikation und Abstimmung mit dem Kunden
                und trägst Terminverantwortung.
              </li>
              <li>
                Die Dokumentation und Abnahme der Sicherheitstechnik gehört
                ebenfalls zu deinem Fachgebiet.
              </li>
            </ul>
          </div>
        </>
      );
    case 26:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017917628?h=d0678dd22f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>PROJEKTLEITER</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Thomas gibt dir Einblicke in die Projektleitung. Lerne seine
              Aufgaben kennen:
            </p>
            <ul>
              <li>Zielgerichtete und erfolgsorientierte Konstruktion</li>
              <li>Betreuung und Anleitung von internen Teams</li>
              <li>Projektleitung von der Planungsphase bis zur Endabnahme</li>
              <li>
                Verantwortung für Ressourcen, Budget, Termine, Kosten, Qualität
                und gesetzliche Vorgaben
              </li>
              <li>Projektmeetings mit Kunden</li>
            </ul>
          </div>
        </>
      );
    case 27:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018038794?h=e9eeac8e07&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ELEKTROKONSTRUKTION</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/011_NMH_Flyer_Messtechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Benjamin ist Elektrokonstrukteur. Ihn begeistert die Entstehung
              neuer Anlagen und Prozesse, und die Möglichkeit, aktiv
              mitzuwirken. Das sind seine Tätigkeiten:
            </p>
            <ul>
              <li>
                Projektierung und Neuentwicklung unserer Anlagen im
                Sondermaschinenbau
              </li>
              <li>Erstellung von Elektroplänen mit EPLAN P8</li>
              <li>Dokumentation der Sicherheitstechnik</li>
              <li>
                Unterstützung bei der Inbetriebnahme unserer Maschinen und
                Anlagen
              </li>
            </ul>
          </div>
        </>
      );

    case 28:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017894933?h=f3845a5cc9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>PROJEKTLEITER</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Pascal nimmt dich mit in die Projektleitung. Lerne seine
              abwechslungsreichen Aufgaben kennen:
            </p>
            <ul>
              <li>Zielgerichtete und erfolgsorientierte Konstruktion</li>
              <li>Betreuung und Anleitung von internen Teams</li>
              <li>Projektleitung von der Planungsphase bis zur Endabnahme</li>
              <li>
                Verantwortung für Ressourcen, Budget, Termine, Kosten, Qualität
                und gesetzliche Vorgaben
              </li>
              <li>Projektmeetings mit Kunden</li>
            </ul>
          </div>
        </>
      );
    case 29:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018038419?h=78a6929344&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>EINKAUF</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Komplettbearbeitung_Maschinenliste.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Manuel nimmt dich mit in den technischen Einkauf. Erfahre mehr
              über seine abwechslungsreichen Aufgaben:
            </p>
            <ul>
              <li>
                Beschaffung der Materialien für den Maschinenbau, die Fertigung
                und die Kunststofftechnik
              </li>
              <li>Pflege, Auswahl und Festlegung von Lieferanten</li>
              <li>Überwachung der Liefertermine</li>
              <li>Ermittlung optimaler Bestellmengen</li>
            </ul>
          </div>
        </>
      );
    case 30:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018038673?h=1f824be5fe&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>FERTIGUNG</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Komplettbearbeitung_Maschinenliste.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Timo, CAM-Programmierer, schätzt die selbständige Arbeitsweise und
              die vielen Freiheiten in seinem Job. Das sind seine Tätigkeiten:
            </p>
            <ul>
              <li>Erstellen von Fräsprogramme mit SolidCAM</li>
              <li>
                Anfahren der Frästeile an unseren 3-Achs, 5-Achs oder 6-Achs
                CNC-Fräsmaschinen mit Heidenhain Steuerung
              </li>
              <li>
                Kontinuierliche Optimierung unserer bestehenden Programme und
                Arbeitsabläufe
              </li>
            </ul>
          </div>
        </>
      );
    case 31:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018038157?h=ecc3880cbe&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>PERSONAL</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Dominik stellt sich vor - dein Ansprechpartner in der
              Personalabteilung. Lerne ihn und seine Aufgaben kennen:
            </p>
            <ul>
              <li>
                Zuständig für alle Personalthemen und immer ein offenes Ohr für
                deine Anliegen
              </li>
              <li>
                Hilft dir bei Fragen rund um deinen Einstieg und deine Karriere
                bei uns
              </li>
              <li>Bietet Unterstützung bei deiner beruflichen Entwicklung</li>
            </ul>
          </div>
        </>
      );
  }
};
export const BuroCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 23:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1031994565?h=6887c09afb&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>KLUGE KÖPFE & INNOVATIVE LÖSUNGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Wir, die NMH GmbH aus Hohentengen, blicken aufüber 80 Jahre
              Erfahrung zurück und bieten präzise, maßgeschneiderte Lösungen.
              Als verlässlicher Partner stehen wir für Innovation und höchste
              Qualitätsstandards. Wir sind Experten in folgenden Bereichen:
            </p>
            <ul>
              <li>Kunststofftechnik</li>
              <li>Fertigung</li>
              <li>Maschinenbau</li>
              <li>Digitalisierung</li>
            </ul>
            <h3>ZAHLEN & FAKTEN</h3>
            <ul>
              <li>115 Mitarbeitende</li>
              <li>2 Geschäftsführer</li>
              <li>80 Jahre Expertise</li>
              <li>7500qm Produktionsfläche</li>
              <li>20 Millionen Euro Umsatz</li>
            </ul>
            <p>
              Seit unserer Gründung vor 80 Jahren hat sich NMH als Vorreiter für
              nachhaltige Technologien und Innovationen etabliert. Acht
              Jahrzehnte Erfolg stehen für stetigen Fortschritt und unser
              Engagement für Exzellenz. Dieses Jubiläum bekräftigt unseren
              kontinuierlichen Einsatz für zukünftige Innovationen und Wachstum.
            </p>
          </div>
        </>
      );
    case 24:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1031994565?h=6887c09afb&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>KLUGE KÖPFE & INNOVATIVE LÖSUNGEN</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Wir, die NMH GmbH aus Hohentengen, blicken aufüber 80 Jahre
              Erfahrung zurück und bieten präzise, maßgeschneiderte Lösungen.
              Als verlässlicher Partner stehen wir für Innovation und höchste
              Qualitätsstandards. Wir sind Experten in folgenden Bereichen:
            </p>
            <ul>
              <li>Kunststofftechnik</li>
              <li>Fertigung</li>
              <li>Maschinenbau</li>
              <li>Digitalisierung</li>
            </ul>
            <h3>ZAHLEN & FAKTEN</h3>
            <ul>
              <li>115 Mitarbeitende</li>
              <li>2 Geschäftsführer</li>
              <li>80 Jahre Expertise</li>
              <li>7500qm Produktionsfläche</li>
              <li>20 Millionen Euro Umsatz</li>
            </ul>
            <p>
              Seit unserer Gründung vor 80 Jahren hat sich NMH als Vorreiter für
              nachhaltigeTechnologien und Innovationen etabliert. Acht
              Jahrzehnte Erfolg stehen für stetigen Fortschritt und unser
              Engagement für Exzellenz. Dieses Jubiläum bekräftigt unseren
              kontinuierlichen Einsatz für zukünftige Innovationen und Wachstum.
            </p>
          </div>
        </>
      );
    case 25:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135069?h=8148bef02d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ELEKTROTECHNIK & STEUERUNGSTECHNIK</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/011_NMH_Flyer_Messtechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Gabriel Friedmann, Geschäftsführer der NMH, leitet das technische
              Büro für Elektrotechnik und führt Sie durch die Bereiche
              Elektrotechnik und Steuerungstechnik.
            </p>
            <p>
              Im Arbeitsalltag der NMH dreht sich alles darum, die in der
              mechanischen Konstruktion entwickelten Maschinen zum Leben zu
              erwecken. Die Arbeit beginnt bereits vor der Konstruktion mit der
              Unterstützung des Vertriebs und der Konzeptionierung der
              Steuerungstechnik.
            </p>
            <h3>
              NACH AUFTRAGSERTEILUNG BIETEN WIR ALLES RUND UM DIE
              STEUERUNGSTECHNIK AUS EINER HAND, EINSCHLIESSLICH:
            </h3>
            <ul>
              <li>Projektierung der Anlagen</li>
              <li>Elektrokonstruktion</li>
              <li>Programmierung</li>
              <li>CE-Dokumentation</li>
              <li>Endabnahme</li>
            </ul>
            <h3>
              AUCH WÄHREND DES GESAMTEN LEBENSZYKLUS DER ANLAGEN BIETEN WIR
              EINEN UMFASSENDEN SERVICE, EINSCHLIESSLICH:
            </h3>
            <ul>
              <li>Wartung</li>
              <li>Fehlersuche</li>
              <li>Instandhaltung</li>
              <li>Retrofit der Maschinen</li>
            </ul>
            <p>
              Unser junges und dynamisches Team meistert Herausforderungen von
              kleinen Einzelanlagen bis hin zu kompletten Produktionslinien.
              Dank unserer großen Vielfalt im Sondermaschinenbau bieten wir
              Ihnen maßgeschneiderte Lösungen für Ihre speziellen Anforderungen.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
          </div>
        </>
      );
    case 26:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135207?h=833b6e5d77&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>MECHANISCHE KONSTRUKTION</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Marcel stellt Ihnen die mechanische Konstruktion vor. Entdecken
              Sie unsere Stärken und erfahren Sie, was uns einzigartig macht:
            </p>
            <ul>
              <li>
                Unsere Projektverantwortlichen begleiten Ihre Projekte von der
                Anfrage bis End-Of-Life
              </li>
              <li>
                Konstruktion der Anlagen mit Catia V5, Siemens NX oder
                Solidworks
              </li>
              <li>
                Projektmanagement und Koordination durch einen Ansprechpartner
              </li>
              <li>
                Unsere Kernkompetenzen, bestehend aus Montieren / Zusammenbau,
                Messen / Prüfen, Transportieren / Handling und Verkettungen
              </li>
            </ul>
            <p>
              Vom ersten Entwurf bis zur fertigen Anlage - wir sind Ihr Partner
              für effiziente und maßgeschneiderte Lösungen. Wir freuen uns auf
              Ihre Projekte.
            </p>
          </div>
        </>
      );
    case 27:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135069?h=8148bef02d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ELEKTROTECHNIK & STEUERUNGSTECHNIK</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/011_NMH_Flyer_Messtechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Gabriel Friedmann, Geschäftsführer der NMH, leitet das technische
              Büro für Elektrotechnik und führt Sie durch die Bereiche
              Elektrotechnik und Steuerungstechnik.
            </p>
            <p>
              Im Arbeitsalltag der NMH dreht sich alles darum, die in der
              mechanischen Konstruktion entwickelten Maschinen zum Leben zu
              erwecken. Die Arbeit beginnt bereits vor der Konstruktion mit der
              Unterstützung des Vertriebs und der Konzeptionierung der
              Steuerungstechnik.
            </p>
            <h3>
              NACH AUFTRAGSERTEILUNG BIETEN WIR ALLES RUND UM DIE
              STEUERUNGSTECHNIK AUS EINER HAND, EINSCHLIESSLICH:
            </h3>
            <ul>
              <li>Projektierung der Anlagen</li>
              <li>Elektrokonstruktion</li>
              <li>Programmierung</li>
              <li>CE-Dokumentation</li>
              <li>Endabnahme</li>
            </ul>
            <h3>
              AUCH WÄHREND DES GESAMTEN LEBENSZYKLUS DER ANLAGEN BIETEN WIR
              EINEN UMFASSENDEN SERVICE, EINSCHLIESSLICH:
            </h3>
            <ul>
              <li>Wartung</li>
              <li>Fehlersuche</li>
              <li>Instandhaltung</li>
              <li>Retrofit der Maschinen</li>
            </ul>
            <p>
              Unser junges und dynamisches Team meistert Herausforderungen von
              kleinen Einzelanlagen bis hin zu kompletten Produktionslinien.
              Dank unserer großen Vielfalt im Sondermaschinenbau bieten wir
              Ihnen maßgeschneiderte Lösungen für Ihre speziellen Anforderungen.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
          </div>
        </>
      );
    case 28:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025135207?h=833b6e5d77&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>MECHANISCHE KONSTRUKTION</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Marcel stellt Ihnen die mechanische Konstruktion vor. Entdecken
              Sie unsere Stärken und erfahren Sie, was uns einzigartig macht:
            </p>
            <ul>
              <li>
                Unsere Projektverantwortlichen begleiten Ihre Projekte von der
                Anfrage bis End-Of-Life
              </li>
              <li>
                Konstruktion der Anlagen mit Catia V5, Siemens NX oder
                Solidworks
              </li>
              <li>
                Projektmanagement und Koordination durch einen Ansprechpartner
              </li>
              <li>
                Unsere Kernkompetenzen, bestehend aus Montieren / Zusammenbau,
                Messen / Prüfen, Transportieren / Handling und Verkettungen
              </li>
            </ul>
            <p>
              Vom ersten Entwurf bis zur fertigen Anlage - wir sind Ihr Partner
              für effiziente und maßgeschneiderte Lösungen. Wir freuen uns auf
              Ihre Projekte.
            </p>
          </div>
        </>
      );
    case 29:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025134902?h=f2ea7c7325&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>MASSGESCHNEIDERTE FERTIGUNGSLÖSUNGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Komplettbearbeitung_Maschinenliste.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Christian Bulander, Geschäftsführer der NMH, führt Sie durch unser
              breites Spektrum an Fertigungsmöglichkeiten. Die Kombination
              verschiedener Bearbeitungsverfahren und Materialien in der
              Lohnfertigung eröffnet Ihnen eine Vielzahl an Optionen zur
              Herstellung Ihrer präzisen Bauteile.
            </p>
            <p>
              Ob Einzel- oder Serienteile - unser moderner Maschinenpark mit 20
              Maschinen bietet Ihnen maximale Flexibilität und höchste Präzision
              bei der Bearbeitung von:
            </p>
            <ul>
              <li>Kunststoff</li>
              <li>Aluminium</li>
              <li>Stahl</li>
            </ul>
            <p>
              Von Fräsen und Drehen bis hin zum Schleifen - wir garantieren
              Ihnen eine präzise Bearbeitung, selbst bei komplexen Geometrien
              und höchsten Maßanforderungen. Unser Leistungsspektrum umfasst
              Bauteile von 1 mm bis 6000 mm sowie Beschichtungen und
              Oberflächenbehandlungen verschiedenster Art.
            </p>
            <h3>WIR BEARBEITEN:</h3>
            <ul>
              <li>Rohmaterialien</li>
              <li>Schweißbaugruppen</li>
              <li>Gussbearbeitungen</li>
            </ul>
            <p>
              Verlassen Sie sich auf unsere umfassenden Fertigungslösungen aus
              einer Hand.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
          </div>
        </>
      );
    case 30:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025134902?h=f2ea7c7325&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>MASSGESCHNEIDERTE FERTIGUNGSLÖSUNGEN</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Komplettbearbeitung_Maschinenliste.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Christian Bulander, Geschäftsführer der NMH, führt Sie durch unser
              breites Spektrum an Fertigungsmöglichkeiten. Die Kombination
              verschiedener Bearbeitungsverfahren und Materialien in der
              Lohnfertigung eröffnet Ihnen eine Vielzahl an Optionen zur
              Herstellung Ihrer präzisen Bauteile. Ob Einzel- oder Serienteile -
              unser moderner Maschinenpark mit 20 Maschinen bietet Ihnen
              maximale Flexibilität und höchste Präzision bei der Bearbeitung
              von:
            </p>
            <ul>
              <li>Kunststoff</li>
              <li>Aluminium</li>
              <li>Stahl</li>
            </ul>
            <p>
              Von Fräsen und Drehen bis hin zum Schleifen – wir garantieren
              Ihnen eine präzise Bearbeitung, selbst bei komplexen Geometrien
              und höchsten Maßanforderungen. Unser Leistungsspektrum umfasst
              Bauteile von 1 mm bis 6000 mm sowie Beschichtungen und
              Oberflächenbehandlungen verschiedenster Art.
            </p>
            <h3>WIR BEARBEITEN:</h3>
            <ul>
              <li>Rohmaterialien</li>
              <li>Schweißbaugruppen</li>
              <li>Gussbearbeitungen</li>
            </ul>
            <p>
              Verlassen Sie sich auf unsere umfassenden Fertigungslösungen aus
              einer Hand.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
          </div>
        </>
      );
    case 31:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017907104?h=e5e526b81e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>RECRUITING</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2025.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Melina stellt sich vor – deine Ansprechpartnerin im Recruiting.
              Hier erfährst du, wie sie dich begleiten wird:
            </p>
            <ul>
              <li>
                Deine Ansprechpartnerin für alle Fragen rund um den Einstieg,
                von der Bewerbung bis zur ersten Schulung
              </li>
              <li>
                Zuständig für das Recruiting und die Organisation von
                Weiterbildungen
              </li>
              <li>
                Freut sich darauf, dich und deine Ideen im Team willkommen zu
                heißen
              </li>
            </ul>
          </div>
        </>
      );
  }
};
