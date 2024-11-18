import CustomerButton from "./CustomerButton";

export const FertigungCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 0:
      return (
        <>
          <div className="popup_headside">
            <h2>FERTIGUNG</h2>

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
              Marc führt Sie durch die Fertigung. Erleben Sie unsere
              Produktionsprozesse hautnah und entdecken Sie, was uns einzigartig
              macht:
            </p>
            <ul>
              <li>Einzel- oder Serienteilfertigung mit Roboteranbindung</li>
              <li>ModernsteTechnik und hoher Automatisierungsgrad</li>
              <li>Energieoptimierte Abläufe durch die SmartEcoBox</li>
              <li>
                Papierlose Fertigung durch unsere eigens entwickelte Software
                NMH CoCo
              </li>
              <li>Maßgeschneiderte Lösungen für verschiedenste Branchen</li>
              <li>
                Unsere Fertigungsverfahren: Fräsen, Drehen,Schleifen und Sägen
              </li>
              <li>
                Unsere Dienstleistungen:Trowalisieren, Finish,Messen und
                Logistik
              </li>
            </ul>
            <p>
              Begleiten Sie uns und erfahren Sie, wie wir komplexe Projekte
              erfolgreich realisieren.
            </p>

            <CustomerButton />
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className="popup_headside">
            <h2>MASSGESCHNEIDERTE FERTIGUNGSLÖSUNGEN</h2>

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
              Christian Bulander, Geschäftsführer der NMH, führt Sie durch unser
              breites Spektrum an Fertigungsmöglichkeiten. Die Kombination
              verschiedener Bearbeitungsverfahren und Materialien in der
              Lohnfertigung eröffnet Ihnen eine Vielzahl an Optionen zur
              Herstellung Ihrer präzisen Bauteile. Ob Einzel- oder Serienteile -
              unser moderner Maschinen- park mit 20 Maschinen bietet Ihnen
              maximale Flexibilität und höchste Präzision bei der Bearbeitung
              von:
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
              Oberflächenbehand- lungen verschiedenster Art.
            </p>
            <h3>WIR BEARBEITEN:</h3>
            <ul>
              <li>Rohmaterialien</li>
              <li>Schweißbaugruppen </li>
              <li>Gussbearbeitungen</li>
            </ul>
            <p>
              Verlassen Sie sich auf unsere umfassenden Fertigungslösungen aus
              einer Hand.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>

            <CustomerButton />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="popup_headside">
            <h2>INFOMATERIAL</h2>

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
              Laden Sie bequem unsere Infomaterialien herunter und erfahren Sie
              mehr über unsere innovativen Lösungen und Technologien in den
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
    case 3:
      return (
        <>
          <div className="popup_headside">
            <h2>FERTIGUNG</h2>

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
              Marc führt Sie durch die Fertigung. Erleben Sie unsere
              Produktionsprozesse hautnah und entdecken Sie, was uns einzigartig
              macht:
            </p>
            <ul>
              <li>Einzel- oder Serienteilfertigung mit Roboteranbindung</li>
              <li>ModernsteTechnik und hoher Automatisierungsgrad</li>
              <li>Energieoptimierte Abläufe durch die SmartEcoBox</li>
              <li>
                Papierlose Fertigung durch unsere eigens entwickelte Software
                NMH CoCo
              </li>
              <li>Maßgeschneiderte Lösungen für verschiedenste Branchen</li>
              <li>
                Unsere Fertigungsverfahren: Fräsen, Drehen,Schleifen und Sägen
              </li>
              <li>
                Unsere Dienstleistungen:Trowalisieren, Finish,Messen und
                Logistik
              </li>
            </ul>
            <p>
              Begleiten Sie uns und erfahren Sie, wie wir komplexe Projekte
              erfolgreich realisieren.
            </p>

            <CustomerButton />
          </div>
        </>
      );

    case 4:
      return (
        <>
          <div className="popup_headside">
            <h2>FERTIGUNG</h2>
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
              Marc führt Sie durch die Fertigung. Erleben Sie unsere
              Produktionsprozesse hautnah und entdecken Sie, was uns einzigartig
              macht:
            </p>
            <ul>
              <li>Einzel- oder Serienteilfertigung mit Roboteranbindung</li>
              <li>ModernsteTechnik und hoher Automatisierungsgrad</li>
              <li>Energieoptimierte Abläufe durch die SmartEcoBox</li>
              <li>
                Papierlose Fertigung durch unsere eigens entwickelte Software
                NMH CoCo
              </li>
              <li>Maßgeschneiderte Lösungen für verschiedenste Branchen</li>
              <li>
                Unsere Fertigungsverfahren: Fräsen, Drehen,Schleifen und Sägen
              </li>
              <li>
                Unsere Dienstleistungen:Trowalisieren, Finish,Messen und
                Logistik
              </li>
            </ul>
            <p>
              Begleiten Sie uns und erfahren Sie, wie wir komplexe Projekte
              erfolgreich realisieren.
            </p>

            <CustomerButton />
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className="popup_headside">
            <h2>MASSGESCHNEIDERTE FERTIGUNGSLÖSUNGEN</h2>

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
              Christian Bulander, Geschäftsführer der NMH, führt Sie durch unser
              breites Spektrum an Fertigungsmöglichkeiten. Die Kombination
              verschiedener Bearbeitungsverfahren und Materialien in der
              Lohnfertigung eröffnet Ihnen eine Vielzahl an Optionen zur
              Herstellung Ihrer präzisen Bauteile. Ob Einzel- oder Serienteile -
              unser moderner Maschinen- park mit 20 Maschinen bietet Ihnen
              maximale Flexibilität und höchste Präzision bei der Bearbeitung
              von:
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
              Oberflächenbehand- lungen verschiedenster Art.
            </p>
            <h3>WIR BEARBEITEN:</h3>
            <ul>
              <li>Rohmaterialien</li>
              <li>Schweißbaugruppen </li>
              <li>Gussbearbeitungen</li>
            </ul>
            <p>
              Verlassen Sie sich auf unsere umfassenden Fertigungslösungen aus
              einer Hand.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>

            <CustomerButton />
          </div>
        </>
      );
  }
};

export const FertigungNotCustomer = ({
  value,
  isNotCusomer,
}: {
  value: number;
  isNotCusomer?: boolean;
}) => {
  switch (value) {
    case 0:
      return (
        <>
          <div className="popup_headside">
            <h2>Drehen</h2>

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
              Mario nimmt dich mit in die Welt des Drehens. Entdecke seine
              vielseitigen Aufgaben:
            </p>
            <ul>
              <li>
                Selbstständiges Programmieren der Maschinen für die Aufträge
              </li>
              <li>
                Rüsten der benötigten Werkzeuge und SpannmittelRüsten der
                benötigten Werkzeuge und Spannmittel
              </li>
              <li>
                Eigenständiges Einfahren der Aufträge und Sicherstellung von
                Qualität und Prozessstabilität
              </li>
              <li>
                Planung und Durchführung des gesamten Prozesses-vom Rohteil bis
                zum fertigen Bauteil
              </li>
            </ul>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className="popup_headside">
            <h2>SCHLEIFEN</h2>

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
              Alfons stellt dir seinen Arbeitsplatz vor. Seine Kernaufgaben
              sind:
            </p>
            <ul>
              <li>
                Rund- und Flachschleifen mit extremen Genauigkeitsanforderungen
              </li>
              <li>
                Richten und Vorbereiten von Werkstücken für die
                Weiterbearbeitung
              </li>
              <li>Schweißen von Bauteilen und Komponenten</li>
              <li>Erstellung eigener Programme zur optimalen Bearbeitung</li>
              <li>
                Arbeit an unterschiedlichen Maschinen für vielseitige Projekte
              </li>
            </ul>

            <CustomerButton />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="popup_headside">
            <h2>INFOMATERIAL</h2>

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
              Laden Sie bequem unsere Infomaterialien herunter und erfahren Sie
              mehr über unsere innovativen Lösungen und Technologien in den
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
    case 3:
      return (
        <>
          <div className="popup_headside">
            <h2>FERTIGUNG</h2>

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
              Elmar, Fertigungstechnologe wickelt eigenverantwortlich spannende
              Kundenprojekte nach seinen Vorstellungen ab. Das sind seine
              Tätigkeiten:
            </p>
            <ul>
              <li>Prüfung der Machbarkeit von Bauteilen</li>
              <li>Festlegung und Herstellung von Vorrichtungen</li>
              <li>CAM-Programmierung von Bauteilen</li>
              <li>Fräsen von Bauteilen</li>
              <li>Erstellung von Messprotokollen</li>
            </ul>

            <CustomerButton />
          </div>
        </>
      );

    case 4:
      return (
        <>
          <div className="popup_headside">
            <h2>ZERSPANUNG</h2>

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
              Thomas nimmt dich mit in die Zerspanung. Lerne seine Aufgaben
              kennen:
            </p>
            <li>
              Einrichten und Programmieren der Maschinen für optimale Prozesse
            </li>
            <li>Überwachung automatisierter Abläufe für maximale Effizienz</li>
            <li>Bearbeitung großer Werkstücke mit höchster Präzision</li>
            <li>
              Kontinuierlicher Einsatz neuester Maschinen und Technologien
            </li>

            <CustomerButton />
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className="popup_headside">
            <h2>AUSBILDUNG</h2>

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
              Christopher stellt sich vor - dein Ansprechpartner für die
              Ausbildung. Lerne seine Rolle und Aufgaben kennen:
            </p>
            <ul>
              <li>
                Verantwortlich für die Ausbildung und betreuung unserer
                Auszubildenden
              </li>
              <li>Enge Zusammenarbeit mit den einzelnen Abteilungen </li>
              <li>
                Bietet dir Unterstützung bei allen Themen rund um deine
                Ausbildung
              </li>
              <li>
                Gibt dir die Chance, an verschiedenen projekten und
                Herausforderungen mitzuwirken
              </li>
            </ul>

            <CustomerButton />
          </div>
        </>
      );
  }
};
