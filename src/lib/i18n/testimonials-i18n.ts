import type { Language } from "./languages";
import type { TestimonialId } from "@/data/testimonials";

const quotes: Record<Language, Record<TestimonialId, string>> = {
  de: {
    pizza:
      "Die beste Pizza weit und breit! Knuspriger Boden, frische Zutaten und ein herzliches Team. Wir kommen immer wieder gerne nach Meldorf.",
    ambience:
      "Gemütliches Ambiente am Südermarkt. Die Pasta ist hausgemacht und schmeckt wie in Italien. Absolut empfehlenswert!",
    family:
      "Perfekt für Familien! Die Kinder lieben die Pizza und wir schätzen die freundliche Bedienung. Mama Leone fühlt sich an wie bei Freunden.",
    service:
      "Schneller Service, faire Preise und eine tolle Auswahl. Der Abend auf der Terrasse war unvergesslich.",
    return:
      "Schon zum dritten Mal hier – jedes Mal top! Antipasti, Pizza, Dessert – alles frisch und lecker. Danke an das ganze Team!",
    woodOven:
      "Pizza aus dem Holzofen — auf Instagram sieht sie genauso gut aus wie sie schmeckt! Absolut empfehlenswert in Meldorf.",
    carbonara:
      "Die Carbonara war ein Traum! Authentische italienische Küche in Dithmarschen. Folgt @mama_leone_meldorf!",
    suedermarkt:
      "Wunderschönes Ambiente am Südermarkt. Perfekt für einen entspannten Abend mit Freunden.",
    weekend:
      "Samstagabend bei Mama Leone — tolles Essen, herzlicher Service und la dolce vita!",
  },
  en: {
    pizza:
      "The best pizza for miles! Crispy crust, fresh ingredients and a warm team. We love coming back to Meldorf.",
    ambience:
      "Cosy atmosphere on Südermarkt. The pasta is homemade and tastes like Italy. Highly recommended!",
    family:
      "Perfect for families! The kids love the pizza and we appreciate the friendly service. Mama Leone feels like visiting friends.",
    service:
      "Quick service, fair prices and a great selection. An unforgettable evening on the terrace.",
    return:
      "Our third visit – excellent every time! Antipasti, pizza, dessert – everything fresh and delicious. Thanks to the whole team!",
    woodOven:
      "Wood-fired pizza — it looks as good on Instagram as it tastes! Highly recommended in Meldorf.",
    carbonara:
      "The carbonara was a dream! Authentic Italian cuisine in Dithmarschen. Follow @mama_leone_meldorf!",
    suedermarkt:
      "Beautiful atmosphere on Südermarkt. Perfect for a relaxed evening with friends.",
    weekend:
      "Saturday night at Mama Leone — great food, warm service and la dolce vita!",
  },
  it: {
    pizza:
      "La migliore pizza in zona! Crosta croccante, ingredienti freschi e un team accogliente. Torniamo volentieri a Meldorf.",
    ambience:
      "Atmosfera accogliente in Südermarkt. La pasta è fatta in casa e sa d'Italia. Consigliatissimo!",
    family:
      "Perfetto per le famiglie! I bambini adorano la pizza e apprezziamo il servizio cordiale. Da Mama Leone ci si sente a casa.",
    service:
      "Servizio veloce, prezzi giusti e ottima scelta. Una serata sulla terrazza indimenticabile.",
    return:
      "Già la terza volta – sempre al top! Antipasti, pizza, dolci – tutto fresco e saporito. Grazie a tutto il team!",
    woodOven:
      "Pizza al forno — su Instagram è bella quanto è buona! Consigliatissima a Meldorf.",
    carbonara:
      "La carbonara era un sogno! Cucina italiana autentica nel Dithmarschen. Seguite @mama_leone_meldorf!",
    suedermarkt:
      "Atmosfera meravigliosa in Südermarkt. Perfetto per una serata rilassata con gli amici.",
    weekend:
      "Sabato sera da Mama Leone — ottimo cibo, servizio caloroso e la dolce vita!",
  },
  fr: {
    pizza:
      "La meilleure pizza des environs ! Pâte croustillante, ingrédients frais et équipe chaleureuse. Nous revenons toujours avec plaisir à Meldorf.",
    ambience:
      "Ambiance conviviale sur la Südermarkt. Les pâtes sont maison et goûtent l'Italie. Fortement recommandé !",
    family:
      "Parfait en famille ! Les enfants adorent la pizza et nous apprécions le service amical. On se sent comme chez des amis.",
    service:
      "Service rapide, prix corrects et bon choix. Une soirée en terrasse inoubliable.",
    return:
      "Déjà notre troisième visite – toujours au top ! Antipasti, pizza, desserts – tout est frais et délicieux. Merci à toute l'équipe !",
    woodOven:
      "Pizza au four à bois — aussi belle sur Instagram qu'au goût ! Fortement recommandé à Meldorf.",
    carbonara:
      "La carbonara était un rêve ! Cuisine italienne authentique au Dithmarschen. Suivez @mama_leone_meldorf !",
    suedermarkt:
      "Magnifique ambiance sur la Südermarkt. Parfait pour une soirée détendue entre amis.",
    weekend:
      "Samedi soir chez Mama Leone — excellent repas, service chaleureux et la dolce vita !",
  },
  sq: {
    pizza:
      "Picë më e mirë në zonë! Brumë i krisur, përbërës të freskët dhe ekip i ngrohtë. Kthehemi me kënaqësi në Meldorf.",
    ambience:
      "Ambient i ngrohtë në Südermarkt. Pastat janë shtëpiake dhe shijojnë si në Itali. E rekomandojmë shumë!",
    family:
      "Perfekt për familjet! Fëmijët e duan picën dhe vlerësojmë shërbimin miqësor. Te Mama Leone ndihesh si në shtëpi.",
    service:
      "Shërbim i shpejtë, çmime të drejta dhe zgjedhje e mirë. Një mbrëmje në tarracë e paharrueshme.",
    return:
      "Herën e tretë këtu – çdo herë shkëlqyeshëm! Antipasti, picë, ëmbëlsira – gjithçka e freskët dhe e shijshme. Faleminderit ekipit!",
    woodOven:
      "Picë nga furra — në Instagram duket po aq mirë sa shijon! E rekomandojmë shumë në Meldorf.",
    carbonara:
      "Carbonara ishte një ëndërr! Kuzhinë autentike italiane në Dithmarschen. Ndiqni @mama_leone_meldorf!",
    suedermarkt:
      "Ambient i mrekullueshëm në Südermarkt. Perfekt për një mbrëmje të relaksuar me miq.",
    weekend:
      "Mbrëmja e shtunës te Mama Leone — ushqim i shkëlqyer, shërbim i ngrohtë dhe la dolce vita!",
  },
  sv: {
    pizza:
      "Den bästa pizzan i trakten! Krispig botten, färska råvaror och ett varmt team. Vi kommer gärna tillbaka till Meldorf.",
    ambience:
      "Mysig atmosfär vid Südermarkt. Pastan är hemlagad och smakar Italien. Rekommenderas varmt!",
    family:
      "Perfekt för familjer! Barnen älskar pizzan och vi uppskattar den vänliga servicen. Hos Mama Leone känns det som hos vänner.",
    service:
      "Snabb service, rimliga priser och bra utbud. En oförglömlig kväll på terrassen.",
    return:
      "Tredje besöket – toppen varje gång! Antipasti, pizza, dessert – allt färskt och gott. Tack till hela teamet!",
    woodOven:
      "Pizza från vedugnen — ser lika bra ut på Instagram som den smakar! Rekommenderas varmt i Meldorf.",
    carbonara:
      "Carbonaran var en dröm! Autentisk italiensk mat i Dithmarschen. Följ @mama_leone_meldorf!",
    suedermarkt:
      "Underbar atmosfär vid Südermarkt. Perfekt för en avslappnad kväll med vänner.",
    weekend:
      "Lördagskväll på Mama Leone — fantastisk mat, varm service och la dolce vita!",
  },
  no: {
    pizza:
      "Den beste pizzaen i området! Sprø bunn, ferske ingredienser og et hyggelig team. Vi kommer gjerne tilbake til Meldorf.",
    ambience:
      "Koselig atmosfære ved Südermarkt. Pastaen er hjemmelaget og smaker Italia. Anbefales på det sterkeste!",
    family:
      "Perfekt for familier! Barna elsker pizzaen og vi setter pris på den vennlige servicen. Hos Mama Leone føles det som hos venner.",
    service:
      "Rask service, fair priser og godt utvalg. En uforglemmelig kveld på terrassen.",
    return:
      "Tredje besøk – topp hver gang! Antipasti, pizza, dessert – alt ferskt og godt. Takk til hele teamet!",
    woodOven:
      "Pizza fra vedovnen — ser like bra ut på Instagram som den smaker! Anbefales på det sterkeste i Meldorf.",
    carbonara:
      "Carbonaraen var en drøm! Autentisk italiensk mat i Dithmarschen. Følg @mama_leone_meldorf!",
    suedermarkt:
      "Nydelig atmosfære ved Südermarkt. Perfekt for en avslappet kveld med venner.",
    weekend:
      "Lørdagskveld hos Mama Leone — fantastisk mat, varm service og la dolce vita!",
  },
  da: {
    pizza:
      "Den bedste pizza i området! Sprød bund, friske ingredienser og et varmt team. Vi kommer gerne tilbage til Meldorf.",
    ambience:
      "Hyggelig stemning ved Südermarkt. Pastaen er hjemmelavet og smager af Italien. Kan varmt anbefales!",
    family:
      "Perfekt til familier! Børnene elsker pizzaen, og vi sætter pris på den venlige betjening. Hos Mama Leone føles det som hos venner.",
    service:
      "Hurtig service, fair priser og godt udvalg. En uforglemmelig aften på terrassen.",
    return:
      "Tredje besøg – top hver gang! Antipasti, pizza, dessert – alt friskt og lækkert. Tak til hele teamet!",
    woodOven:
      "Pizza fra brændeovnen — ser lige så godt ud på Instagram som den smager! Kan varmt anbefales i Meldorf.",
    carbonara:
      "Carbonaraen var en drøm! Autentisk italiensk mad i Dithmarschen. Følg @mama_leone_meldorf!",
    suedermarkt:
      "Skøn atmosfære ved Südermarkt. Perfekt til en afslappet aften med venner.",
    weekend:
      "Lørdag aften hos Mama Leone — fantastisk mad, varm betjening og la dolce vita!",
  },
  fi: {
    pizza:
      "Paras pizza kaukaa! Rapea pohja, tuoreet ainekset ja lämmin tiimi. Palaamme mielellämme Meldorfiin.",
    ambience:
      "Viihtyisä tunnelma Südermarktilla. Pasta on kotitekoista ja maistuu Italialta. Suosittelemme lämpimästi!",
    family:
      "Täydellinen perheille! Lapset rakastavat pizzaa ja arvostamme ystävällistä palvelua. Mama Leonessa tuntuu kuin ystävien luona.",
    service:
      "Nopea palvelu, reilut hinnat ja hyvä valikoima. Unohtumaton ilta terassilla.",
    return:
      "Kolmas kerta – aina huippua! Antipastit, pizza, jälkiruoka – kaikki tuoretta ja herkullista. Kiitos koko tiimille!",
    woodOven:
      "Puu-uunipizza — näyttää Instagramissa yhtä hyvältä kuin maistuu! Suosittelemme lämpimästi Meldorfissa.",
    carbonara:
      "Carbonara oli unelma! Aitoa italialaista ruokaa Dithmarschenissa. Seuraa @mama_leone_meldorf!",
    suedermarkt:
      "Upea tunnelma Südermarktilla. Täydellinen rentoon iltaan ystävien kanssa.",
    weekend:
      "Lauantai-ilta Mama Leonessa — loistavaa ruokaa, lämmin palvelu ja la dolce vita!",
  },
  is: {
    pizza:
      "Besta píaninn í nágrenninu! Stökkur botn, ferskir hráefni og hlýtt teymi. Við komum gjarnan aftur til Meldorf.",
    ambience:
      "Notaleg stemning við Südermarkt. Pasta er heimagerð og bragðast eins og í Ítalíu. Mælum eindregið með!",
    family:
      "Fullkomið fyrir fjölskyldur! Börnin elska pítsuna og við kunnum að meta vingjarnlega þjónustuna. Hjá Mama Leone líður eins og hjá vinum.",
    service:
      "Fljót þjónusta, sanngjörn verð og góður úrval. Ógleymanleg kvöld á veröndinni.",
    return:
      "Þriðja heimsóknin – topp í hvert skipti! Antipasti, pítsa, eftirréttir – allt ferskt og gott. Takk til alls teymisins!",
    woodOven:
      "Pítsa úr viðarofni — lítur jafn vel út á Instagram og bragðast! Mælum eindregið með í Meldorf.",
    carbonara:
      "Carbonaran var draumur! Autentísk ítölsk matargerð í Dithmarschen. Fylgist með @mama_leone_meldorf!",
    suedermarkt:
      "Frábær stemning við Südermarkt. Fullkomið fyrir afslappaða kvöld með vinum.",
    weekend:
      "Laugardagskvöld hjá Mama Leone — frábær matur, hlý þjónusta og la dolce vita!",
  },
};

export function getTestimonialQuote(
  lang: Language,
  id: TestimonialId,
): string {
  return quotes[lang]?.[id] ?? quotes.de[id];
}
