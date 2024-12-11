import { store } from "../../../store";

export const EingangCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 10:
      store.banner = {
        type: "img",
        src: "/pictures/Auszeichnungen.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>AUSZEICHNUNGEN</h2>
            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <h3>
              UNSERE AUSZEICHNUNGEN UNDTEILNAHMEN- ZEICHEN UNSERES ENGAGEMENTS
              UND UNSERER INNOVATIONSKRAFT
            </h3>
            <p>
              NMH ist stolz auf zahlreiche Auszeichnungen, die unsere
              Innovationskraft, soziale Verantwortung und nachhaltige
              Unternehmensführung unterstreichen. Diese Ehrungen spiegeln unser
              kontinuierliches Streben in verschiedenen Bereichen wider:
            </p>
            <ul>
              <li>Arbeitgeber der Zukunft 2023, 2024</li>
              <li>Lea Mittelstandspreis- Sozial engagiert 2023</li>
              <li>las Gütezeichen Arbeits- und Gesundheitsschutz</li>
              <li>TOP 100 Innovator 2017, 2019, 2020</li>
              <li>TEMP AWARD</li>
              <li>
                SWM familyNET Prädikat (familienbewusstes Unternehmen 2017/2021)
              </li>
            </ul>
            <h3>Teilnahmen und Mitgliedschaften</h3>
            <ul>
              <li>Unterzeichner der WIN Charta</li>
              <li>Teilnahme am Klimafit Projekt</li>
              <li>Mitglied im Energieimpulsnetzwerk</li>
              <li>Mitglied bei BWCon</li>
            </ul>
            <h3>Förderungen</h3>
            <ul>
              <li>FuE Tätigkeit BSFZ</li>
              <li>Förderung Invest BW: Innovationen im Bereich Green Tech</li>
              <li>Förderung E-Mobilität Baden-Württemberg</li>
              <li>Förderung BMWi Digital Jetzt</li>
            </ul>
          </div>
        </>
      );
    case 11:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1005812415?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>IMAGEFILM</h2>

            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Unser Imagefilm gibt spannende Einblicke in Kunststoff- technik,
              Fertigung, Maschinenbau und Digitalisierung. Taucht ein in unsere
              Welt und erfahrt, was uns täglich antreibt!
            </p>
          </div>
        </>
      );
    case 12:
      store.banner = {
        type: "img",
        src: "/pictures/Zertifikate.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>ZERTIFIKATE</h2>

            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <h3>
              UNSERE ZERTIFIZIERUNGEN- IHR GARANTIE FÜR QUALITÄTUND
              NACHHALTIGKEIT!
            </h3>
            <p>
              Bei NMH stehen höchste Qualitäts- und Umweltstandards im Fokus.
              Unsere Zertifizierungen belegen unser Engagement für exzellente
              Prozesse und nachhaltiges Handeln.
            </p>
            <ul>
              <li>TISAX</li>
              <li>DIN EN ISO 9001:2015 (gültig bis 24.01.2027)</li>
              <li>DIN EN ISO 14001:2015 (gültig bis 24.01.2027)</li>
            </ul>
          </div>
        </>
      );
    case 13:
      store.banner = {
        type: "img",
        src: "/pictures/Gabriel-und-Christian.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>HERZLICH WILLKOMMEN</h2>

            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <h3>NMH - IHREM PARTNER FÜR INNOVATION UND NACHHALTIGKEIT</h3>
            <p>
              Als dynamisches Unternehmen mit 120 engagierten Mitar- beitern
              sind wir auf folgende vier Kernbereiche spezialisiert:
            </p>
            <ul>
              <li>Maschinenbau</li>
              <li>Fertigung</li>
              <li>Kunststofftechnik </li>
              <li>Digitalisierung</li>
            </ul>
            <p>
              Ein besonderes Merkmal von NMH ist unsere Fähigkeit, den gesamten
              Prozess aus einer Hand anzubieten - von der ersten Idee bis zum
              After-Sales-Service. Diese Komplettlösung ermöglicht unseren
              Kunden eine nahtlose und effiziente Abwicklung ihrer Projekte.
            </p>
            <h3>UNSER ENGAGEMENT FÜR DIGITALISIERUNG UND NACHHALTIGKEIT:</h3>
            <ul>
              <li>
                Papierlose Produktion
                <span>
                  durch unsere Eigenentwicklung CoCo - für eine nachhaltige und
                  effiziente Fertigung mit Echtzeit- Informationen
                </span>
              </li>
              <li>
                SmartEcoBox
                <span>
                  unser eigenentwickeltes Produkt zur Optimierung von
                  Ressourcen, Smart Automation und CO2-Footprint- Auswertung
                </span>
              </li>
              <li>
                Photovoltaikanlage mit 700 kWp,
                <span>
                  um unseren Energiebedarf zu decken und die Abhängigkeit von
                  fossilen Brennstoffen zu reduzieren
                </span>
              </li>
              <li>
                Wärmerückgewinnungssysteme,
                <span>
                  die unsere Produktionsprozesse optimieren und den
                  Energieverbrauch senken
                </span>
              </li>
              <li>
                Elektrofahrzeug-Flotte
                <span>
                  Diese Initiativen sind Teil unseres Engagements für eine
                  zukunftsfähige und ressourcenschonende Produktion.
                </span>
              </li>
            </ul>
            <p>
              Wir freuen uns darauf, auch Sie bald als Kunde oder Partner bei
              NMH begrüßen zu dürfen.
            </p>
            <p>
              Herzliche Grüße,
              <br />
              Gabriel Friedmann & Christian Bulander
            </p>
          </div>
        </>
      );

    case 14:
      store.banner = {
        type: "img",
        src: "/pictures/Partnerschaften.jpg",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>PARTNERSCHAFTEN</h2>

            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Freizeit, Sport & Engagement haben einen hohen Stellenwert. Daher
              erfolgt mit Stolz eine aktive Einbringung als Sponsor der
              folgenden Vereine:
            </p>

            <ul>
              <li>Hauptsponsor des Sportvereins Hohentengen</li>
              <li>Silber-SponsorderSchwenningerWildWings</li>
              <li>Sponsor der Razorbacks Ravensburg</li>
            </ul>
            <p>
              Als besonderes Highlight erhalten unsere Mitarbeiter für
              herausragende LeistungenTickets zu sportlichen Events, um
              gemeinsam Erfolge zu feiern und den regionalen Sport hautnah zu
              erleben.
            </p>
            <p>
              Neben diesen festen Sponsorings unterstützen wir auch immer wieder
              regionale Vereine und Veranstaltungen. Wie zum Beispiel:
            </p>
            <ul>
              <li>Triathlon Schwarzachtal</li>
              <li>Biker Days Pfullendorf</li>
              <li>NMH- Cup in Hohentengen</li>
              <li>NMH- Pre Season Cup in Hechberg</li>
              <li>Trikotsponsoring C-Jugend SV Hochberg</li>
              <li>Trikotsponsoring SV Ölkofen</li>
              <li>OHA-Treffen Narrenzunft Herbertingen</li>
              <li>Jugendfeuerwehr Hohentengen</li>
              <li>Cacau Kinderstiftung</li>
              <li>Stadtkapelle Mengen</li>
              <li>SV Ennetach Jugendtunier</li>
              <li>SV Renhardsweiler Jugendtunier</li>
              <li>Geberit Trophy</li>
              <li>Gemenidemusik Herbertingen</li>
              <li>Caritas Bad Saulgau und viele weitere Aktionen</li>
            </ul>
            <p>
              Durch diese Partnerschaften wird der regionale Sport gestärkt und
              die Gemeinschaft gefördert. Es geht nicht nur um finanzielle
              Unterstützung, sondern um echten Einsatz, der Teamgeist und
              Leidenschaft vereint - für eine starke Zukunft des Sports in der
              Region.
            </p>
          </div>
        </>
      );

    case 15:
      store.banner = {
        type: "img",
        src: "/pictures/Infomaterial.jpg",
      };

      return (
        <>
          <div className="popup_headside">
            <h2>INFOMATERIAL</h2>

            {isNotCusomer ? (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/NMH_Firmenvorstellung_Maschinenbau_2024_DE__240213-kl.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Laden Sie bequem unsere Infomaterialien herunter und erfahren Sie
              mehr über unsere innovativen Lösungen undTechnologien in den
              Bereichen:
            </p>

            <ul>
              <li>Kunststofftechnik</li>
              <li>Fertigung</li>
              <li>Maschinenbau</li>
              <li>Digitalisierung</li>
            </ul>
            <p>
              Entdecken Sie unsere Expertise und maßgeschneiderten Lösungen für
              Ihre Anforderungen.
            </p>
          </div>
        </>
      );
  }
};
