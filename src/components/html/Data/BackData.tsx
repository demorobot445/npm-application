import CustomerButton from "./CustomerButton";

export const BackCustomer = ({ value }: { value: number }) => {
  switch (value) {
    case 6:
      return (
        <>
          <h2>SÄGEN</h2>
          <div className="popup_box">
            <h3>PRÄZISES SÄGEN MIT MODERNSTERTECHNOLOGIE!</h3>
            <p>
              Unsere vollautomatisierten Sägeprozesse bieten Ihnen höchste
              Genauigkeit und Effizienz. Mit modernsten Bandsägen und Kreissägen
              sind wir in der Lage, Material mit einem Durchmesser von bis zu
              300 mm und einer Länge von bis zu 6000 mm zu bearbeiten. Ganz
              gleich, wie anspruchsvoll Ihre Anforderungen sind - wir liefern
              stets präzise Ergebnisse.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
            <button className="popup_button">KARRIERE BEI NMH</button>
            <CustomerButton />
          </div>
        </>
      );
    case 7:
      return (
        <>
          <h2>INBETRIEBNAHME</h2>
          <div className="popup_box">
            <h3>INBETRIEBNAHME - ALLES AUS EINER HAND!</h3>
            <p>
              Wir bieten Ihnen eine vollständige Inbetriebnahme aller gängigen
              Systeme - effizient, zuverlässig und alles aus einer Hand. Mit
              unserer umfassenden Expertise sorgen wir dafür, dass Ihre Anlagen
              reibungslos laufen und Ihre Projekte schnell zum Erfolg führen.
            </p>
            <p>Kontaktieren Sie uns für weitere Informationen!</p>
            <button className="popup_button">KARRIERE BEI NMH</button>
            <CustomerButton />
          </div>
        </>
      );
    case 8:
      return (
        <>
          <h2>TRANSPORT</h2>
          <div className="popup_box">
            <h3>ALLES AUS EINER HAND BEI NMH!</h3>
            <p>
              Bei NMH erhalten Sie umfassende Lösungen aus einer Hand. Wir
              bieten Ihnen eine nahtlose Logistik direkt bis ans Band, ohne
              Schnittstellenverluste. Besonders bei anspruchsvollen
              Know-How-Projekten sorgen wir für einen reibungslosen und
              effizientenTransport, der höchste Qualität garantiert.
            </p>
            <p>
              Vertrauen Sie auf unsere Erfahrung und Expertise für eine perfekte
              Abwicklung Ihrer Projekte.
            </p>
            <p>Wir freuen uns auf Ihre Anfrage!</p>
            <button className="popup_button">KARRIERE BEI NMH</button>
            <CustomerButton />
          </div>
        </>
      );
    case 9:
      return (
        <>
          <h2>PAUSENPLATZ</h2>
          <div className="popup_box">
            <p>
              Wir bieten nicht nur großartige Pausenmöglichkeiten im Freien oder
              drinnen, sondern auch viele attraktive Benefits für dich.
            </p>
            <h3>FREU DICH AUF:</h3>
            <ul>
              <li>BetrieblicheAltersvorsorge</li>
              <li>CorporateBenefits</li>
              <li>Weiterentwicklungsmöglichkeiten</li>
              <li>KostenloseGetränke</li>
              <li>VIP-Tickets</li>
              <li>SichererArbeitsplatz</li>
              <li>Dienstfahrrad</li>
              <li>Wellpass</li>
              <li>Essenszuschüsse</li>
            </ul>
            <button className="popup_button">KARRIERE</button>
          </div>
        </>
      );
  }
};
