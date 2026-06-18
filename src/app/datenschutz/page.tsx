import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { business } from "@/data/menu";
import { DPA_SH, THIRD_PARTY, legalAddressBlock } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${business.name}, ${business.address.full}`,
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  const updated = new Date().toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  return (
    <LegalLayout title="Datenschutzerklärung">
      <p className="text-sm text-muted-foreground/80">Stand: {updated}</p>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          1. Verantwortlicher
        </h2>
        <p className="mt-3 leading-relaxed">
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>{business.name}</strong>
          <br />
          {legalAddressBlock}
          <br />
          Telefon:{" "}
          <a href={`tel:${business.phoneLink}`} className="text-primary">
            {business.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${business.email}`} className="text-primary">
            {business.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          2. Allgemeine Hinweise
        </h2>
        <p className="mt-3 leading-relaxed">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten
          Ihre Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p className="mt-3 leading-relaxed">
          Personenbezogene Daten sind alle Informationen, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          3. Bereitstellung der Website und Server-Logfiles
        </h2>
        <p className="mt-3 leading-relaxed">
          Beim Aufruf unserer Website unter{" "}
          <a
            href={`https://${business.website}`}
            className="text-primary"
          >
            {business.website}
          </a>{" "}
          werden durch den Hosting-Anbieter automatisch technische Daten
          erfasst und in Server-Logfiles gespeichert, z.&nbsp;B.:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite/URL</li>
          <li>Referrer-URL</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an Betrieb, Sicherheit und Stabilität der
          Website).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          4. SSL-/TLS-Verschlüsselung
        </h2>
        <p className="mt-3 leading-relaxed">
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile mit „https://“ beginnt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          5. Kontakt (Telefon, E-Mail, Reservierung)
        </h2>
        <p className="mt-3 leading-relaxed">
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren (z.&nbsp;B. für
          Reservierungen oder Anfragen), verarbeiten wir die von Ihnen
          mitgeteilten Daten (Name, Telefonnummer, E-Mail, Inhalt der Anfrage)
          zur Bearbeitung Ihres Anliegens.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (Kundenkommunikation).
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Speicherdauer:</strong> bis zur Erledigung der Anfrage,
          längstens jedoch gemäß gesetzlicher Aufbewahrungsfristen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          6. WhatsApp
        </h2>
        <p className="mt-3 leading-relaxed">
          Auf unserer Website können Sie uns über WhatsApp kontaktieren oder
          Bestelltexte per WhatsApp senden. Anbieter ist{" "}
          {THIRD_PARTY.whatsapp.name}.
        </p>
        <p className="mt-3 leading-relaxed">
          Wenn Sie WhatsApp nutzen, gelten die Datenschutzbestimmungen von
          WhatsApp/Meta. Wir erhalten nur die Daten, die Sie uns freiwillig
          übermitteln (z.&nbsp;B. Name, Telefonnummer, Bestellinhalt).
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b bzw. lit. f
          DSGVO.
        </p>
        <p className="mt-3 leading-relaxed">
          <a
            href={THIRD_PARTY.whatsapp.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            WhatsApp Datenschutzrichtlinie (EWR)
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          7. SMS-Bestellung
        </h2>
        <p className="mt-3 leading-relaxed">
          Über die digitale Speisekarte können Sie eine Bestellübersicht per SMS
          an unsere Restaurantnummer senden. Die Nachricht wird über Ihr
          Mobilfunkgerät und Ihren Telefonanbieter übermittelt; dabei können
          Metadaten (z.&nbsp;B. Telefonnummer, Zeitpunkt) verarbeitet werden.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (Durchführung der Bestellung/Reservierung).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          8. Digitaler Warenkorb (localStorage)
        </h2>
        <p className="mt-3 leading-relaxed">
          Für die digitale Speisekarte speichern wir Ihre Warenkorbauswahl und
          optionale Anmerkungen lokal in Ihrem Browser (
          <strong>localStorage</strong> auf Ihrem Endgerät). Diese Daten werden
          nicht automatisch an uns übertragen, sondern nur, wenn Sie aktiv eine
          Bestellung per WhatsApp, SMS oder telefonisch aufgeben.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (Nutzerfreundlichkeit der Speisekarte).
        </p>
        <p className="mt-3 leading-relaxed">
          Sie können die gespeicherten Daten jederzeit löschen, indem Sie den
          Warenkorb leeren oder die Website-Daten Ihres Browsers entfernen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          9. Spracheinstellung (localStorage)
        </h2>
        <p className="mt-3 leading-relaxed">
          Ihre gewählte Sprache wird in Ihrem Browser (localStorage)
          gespeichert, damit die Website bei erneutem Besuch in derselben Sprache
          angezeigt wird. Es werden keine personenbezogenen Profile erstellt.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          10. Google Fonts
        </h2>
        <p className="mt-3 leading-relaxed">
          Diese Website nutzt Schriftarten von {THIRD_PARTY.googleFonts.name}.
          Beim Aufruf der Seite kann Ihre IP-Adresse an Google übermittelt
          werden, da die Schriften von Google-Servern geladen werden.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (einheitliche Darstellung der Website).
        </p>
        <p className="mt-3 leading-relaxed">
          <a
            href={THIRD_PARTY.googleFonts.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Google Datenschutzhinweise
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          11. YouTube (Atmosphäre-Video)
        </h2>
        <p className="mt-3 leading-relaxed">
          Im Footer unserer Website kann ein eingebettetes YouTube-Video
          angezeigt werden ({THIRD_PARTY.youtube.name}). Beim Laden kann
          YouTube Cookies setzen und Daten (z.&nbsp;B. IP-Adresse, Nutzungsdaten)
          verarbeiten.
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (darstellerisches Interesse an Atmosphäre auf der Website).
        </p>
        <p className="mt-3 leading-relaxed">
          <a
            href={THIRD_PARTY.youtube.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Google/YouTube Datenschutzhinweise
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          12. Google Maps
        </h2>
        <p className="mt-3 leading-relaxed">
          Wenn Sie über unsere Website einen Link zu Google Maps öffnen, gelten
          die Datenschutzbestimmungen von {THIRD_PARTY.googleMaps.name}. Wir
          haben keinen Einfluss auf die dortige Datenverarbeitung.
        </p>
        <p className="mt-3 leading-relaxed">
          <a
            href={THIRD_PARTY.googleMaps.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Google Datenschutzhinweise
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          13. Facebook und Instagram
        </h2>
        <p className="mt-3 leading-relaxed">
          Unsere Website enthält Links zu unseren Profilen auf Facebook und
          Instagram ({THIRD_PARTY.facebook.name}). Wenn Sie diese Links
          anklicken, verlassen Sie unsere Website. Für die Datenverarbeitung auf
          den Plattformen von Meta gelten deren Datenschutzrichtlinien.
        </p>
        <p className="mt-3 leading-relaxed">
          <a
            href={THIRD_PARTY.facebook.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Meta Datenschutzrichtlinie
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          14. Cookies und Analyse-Tools
        </h2>
        <p className="mt-3 leading-relaxed">
          Wir setzen <strong>kein Google Analytics</strong> und keine
          vergleichbaren Tracking-Tools ein. Technisch notwendige Speicherung
          (localStorage) und ggf. Cookies Dritter (YouTube) sind in den
          obigen Abschnitten beschrieben.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          15. Weitergabe von Daten
        </h2>
        <p className="mt-3 leading-relaxed">
          Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, wenn dies
          zur Vertragserfüllung erforderlich ist, Sie eingewilligt haben, eine
          gesetzliche Pflicht besteht oder technische Dienstleister (Hosting,
          Google Fonts, YouTube, WhatsApp) im Rahmen der genannten Zwecke
          eingesetzt werden.
        </p>
        <p className="mt-3 leading-relaxed">
          Wir verkaufen Ihre Daten nicht an Dritte.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          16. Ihre Rechte
        </h2>
        <p className="mt-3 leading-relaxed">Sie haben das Recht auf:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          Wenden Sie sich hierzu an:{" "}
          <a href={`mailto:${business.email}`} className="text-primary">
            {business.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          17. Beschwerderecht bei einer Aufsichtsbehörde
        </h2>
        <p className="mt-3 leading-relaxed">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Für Schleswig-Holstein (Standort Meldorf) ist u.&nbsp;a.
          zuständig:
        </p>
        <p className="mt-3 leading-relaxed">
          <strong>{DPA_SH.name}</strong>
          <br />
          <a
            href={DPA_SH.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {DPA_SH.url}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          18. Änderungen
        </h2>
        <p className="mt-3 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
          stets den aktuellen rechtlichen Anforderungen entspricht. Die
          jeweils aktuelle Version finden Sie auf dieser Seite.
        </p>
      </section>

      <section>
        <p className="leading-relaxed">
          Weitere Pflichtangaben finden Sie in unserem{" "}
          <Link href="/impressum" className="text-primary underline">
            Impressum
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
