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
              <li>Kleinserienproduktion von Aluwerkzeugen</li>
              <li>Großserienproduktion von Stahlwerkzeugen</li>
              <li>Herstellung von 1K, 2K und LSR-Teilen</li>
              <li>Breite Palette an Veredelungsmöglichkeiten</li>
              <li>
                Unsere Branchen: Automotive, Bauindustrie, Elektronik,
                Hausgeräte, Maschinenbau und Telekommunikation
              </li>
            </ul>
            <p>
              Wir bringen Ihre Ideen in Form und freuen uns auf Ihre
              Projektanfragen.
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
                target="_blank"
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
              <li>Durchführung der Qualitätsprüfung am Endprodukt</li>
            </ul>
          </div>
        </>
      );
  }
};
