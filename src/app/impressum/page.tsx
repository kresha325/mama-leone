import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import Link from "next/link";
import { legal, legalAddressBlock } from "@/lib/legal";
import { business } from "@/data/menu";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${business.name}, ${business.address.full}`,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="text-xl font-semibold text-foreground">
          Angaben gemäß § 5 TMG
        </h2>
        <p className="mt-3 leading-relaxed">
          <strong>{business.name}</strong>
          <br />
          {business.tagline}
          <br />
          {legal.legalForm}
          <br />
          {legalAddressBlock}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
        <p className="mt-3 leading-relaxed">
          Telefon:{" "}
          <a href={`tel:${business.phoneLink}`} className="text-primary">
            {business.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${business.email}`} className="text-primary">
            {business.email}
          </a>
          <br />
          Website:{" "}
          <a
            href={`https://${business.website}`}
            className="text-primary"
          >
            {business.website}
          </a>
        </p>
      </section>

      {legal.vatId.startsWith("[") ? null : (
        <section>
          <h2 className="text-xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
          <p className="mt-3 leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            {legal.vatId}
          </p>
        </section>
      )}

      {legal.registerInfo.startsWith("[") ? (
        <section className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-950">
          <strong>Hinweis:</strong> Falls {business.name} im Handelsregister
          eingetragen ist, ergänzen Sie Registergericht und Registernummer im
          Impressum.
        </section>
      ) : (
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Registereintrag
          </h2>
          <p className="mt-3 leading-relaxed">{legal.registerInfo}</p>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p className="mt-3 leading-relaxed">
          {legal.responsiblePerson}
          <br />
          {legalAddressBlock}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          EU-Streitschlichtung
        </h2>
        <p className="mt-3 leading-relaxed">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p className="mt-3 leading-relaxed">
          Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          Haftung für Inhalte
        </h2>
        <p className="mt-3 leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          Haftung für Links
        </h2>
        <p className="mt-3 leading-relaxed">
          Unser Angebot enthält Links zu externen Websites Dritter (z.&nbsp;B.
          Facebook, Instagram, Google Maps, WhatsApp, YouTube). Auf die Inhalte
          dieser Seiten haben wir keinen Einfluss. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
        <p className="mt-3 leading-relaxed">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">Datenschutz</h2>
        <p className="mt-3 leading-relaxed">
          Informationen zur Verarbeitung personenbezogener Daten finden Sie in
          unserer{" "}
          <Link href="/datenschutz" className="text-primary underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
