import { store } from "../../../store";

export const KunststoffCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 16:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025134449?h=6c74d370c4&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>KUNSTSTOFFTECHNIK</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_black"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Flyer_Kunststofftechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Philipp zeigt Ihnen die Kunststofftechnik. Erfahren Sie mehr über
              unsere Fachkompetenzen und besonderen Highlights:
            </p>
            <ul>
              <li>
                Unsere Fertigungskapazität beträgt 50 Millionen Einheiten pro
                Jahr
              </li>
              <li>Schließkraftbereich von 350 KN bis 4000 KN</li>
              <li>Spritzgewichte von 1g bis 2100g</li>
              <li>KleinserienproduktionvonAluwerkzeugen</li>
              <li>GroßserienproduktionvonStahlwerkzeugen</li>
              <li>Herstellung von 1K, 2K und LSR-Teilen</li>
              <li>Breite Palette an Veredelungsmöglichkeiten</li>
              <li>
                Unsere Branchen: Automotive, Bauindustrie, Elektronik,
                Hausgeräte, Maschinenbau undTelekommunikation
              </li>
            </ul>
            <p>
              Wir bringen Ihre Ideen in Form und freuen uns auf Ihre
              Projektanfragen.
            </p>
          </div>
        </>
      );
    case 17:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1025134988?h=cb5e90f856&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>LÖSUNGEN IN DER KUNSTSTOFFTECHNIK</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_black"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Flyer_Kunststofftechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Christian Bulander, Geschäftsführer der NMH, führt Sie durch
              unsere umfangreichen Möglichkeiten in der Kunststofftech- nik. Von
              formstabilen bis hin zu elastischen Kunststoffen, von umspritzten
              Bauteilen bis hin zu zweikomponentigen Produk- ten - wir bieten
              Ihnen technische Lösungen, die perfekt auf Ihre Anforderungen
              abgestimmt sind.
            </p>
            <p>
              Unsere Maschinen bearbeiten Ihre Kunststoffteile in Größen von 1
              mm bis 1000 mm bei einer Schließkraft von 25 bis 400 Tonnen. Der
              Maschinenpark umfasst 23 teils vollautomati- sierte Maschinen, die
              mitTeilezuführungen und Handlingsys- temen ausgestattet sind und
              so höchste Effizienz in der Produktion gewährleisten.
            </p>
            <h3>
              AUCH NACH DER FERTIGUNG STEHEN IHNEN VIELFÄLTI- GE
              WEITERBEARBEITUNGSMÖGLICHKEITEN ZUR VERFÜ- GUNG, DARUNTER:
            </h3>
            <ul>
              <li>Veredelung</li>
              <li>Bedruckung</li>
              <li>Zerspanende Nacharbeit</li>
              <li>Montage</li>
              <li>Kommissionierung</li>
            </ul>
            <p>
              Wir bieten Ihnen maßgeschneiderte Lösungen für Ihre Projekte und
              freuen uns auf Ihre Anfrage!
            </p>
          </div>
        </>
      );
  }
};
export const KunststoffNotCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 16:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1017924708?h=0d76e5e290&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>KUNSTOFFTECHNIK</h2>
            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_black"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Flyer_Kunststofftechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Philipp nimmt dich mit in die Kunststofftechnik. Erfahre mehr über
              seine Aufgaben:
            </p>

            <ul>
              <li>Auftragsabwicklung und Kundenkommunikation</li>
              <li>Materialbestellung und Rüsten der Werkzeuge</li>
              <li>DurchführungderQualitätsprüfungamEndprodukt</li>
            </ul>
          </div>
        </>
      );
    case 17:
      store.banner = {
        type: "iframe",
        src: "https://player.vimeo.com/video/1018038325?h=76ba693cb2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      };
      return (
        <>
          <div className="popup_headside">
            <h2>VERFAHRENS-MECHANIKER</h2>

            {isNotCusomer ? (
              <a target="_blank" href="https://www.nmh.de/karriere/">
                <img src="/icons/job.png" alt="icon" />
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.nmh.de/wp-content/uploads/3d-welt/pdf/Flyer_Kunststofftechnik.pdf"
              >
                <img src="/icons/pdf.png" alt="icon" />
              </a>
            )}
          </div>
          <div className="popup_box">
            <p>
              Paul nimmt dich mit in die Welt der Verfahrensmechanik. Lerne
              seine Aufgaben kennen:
            </p>
            <ul>
              <li>EinrichtenderMaschinen</li>
              <li>EinfahrenderProzesse</li>
              <li>Prozess - und Qualitätsüberwachung</li>
              <li>
                RüstenundEinstellenvonMaschinenfürdieProduktion von
                Kunststoffteilen
              </li>
              <li>SicherstellenderQualität</li>
              <li>VorbereitungdesMaterials</li>
              <li>Werkzeugwartung</li>
            </ul>
          </div>
        </>
      );
  }
};
