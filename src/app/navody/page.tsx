import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./navody.module.css";

type GuideCard = {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  sectionId: string;
};

const guideCards: GuideCard[] = [
  {
    title: "Hráči a rodičia",
    subtitle: "Rýchly štart do aplikácie",
    description:
      "Ukážky práce s aplikáciou pre hráčov a rodičov – od prihlásenia až po sledovanie tréningov, zápasov a dôležitých informácií.",
    items: [
      "prihlásenie a orientácia v aplikácii",
      "tréningy a zápasy",
      "hlasovanie o účasti",
      "prehľad informácií a notifikácií",
    ],
    sectionId: "hraci-rodicia",
  },
  {
    title: "Tréneri",
    subtitle: "Práca s tímom a dochádzkou",
    description:
      "Návody pre trénerov, ktorí chcú efektívne spravovať tréningy, zápasy, nominácie a dochádzku hráčov v klube.",
    items: [
      "vytváranie tréningov a zápasov",
      "správa účasti hráčov",
      "nominácie na zápasy",
      "dochádzka a prehľady",
    ],
    sectionId: "treneri",
  },
  {
    title: "Admini",
    subtitle: "Správa klubu v jednom systéme",
    description:
      "Návody pre administrátorov klubu – správa používateľov, rolí, kategórií, klubových nastavení a ďalších funkcií systému.",
    items: [
      "správa používateľov a rolí",
      "kategórie a klubové nastavenia",
      "platby a administrácia",
      "prehľad systému a organizácia klubu",
    ],
    sectionId: "admini",
  },
];

export default function NavodyPage() {
  return (
    <main className={styles.guidesPage}>
      <Header />

      <section className={styles.guidesHero}>
        <div className={styles.guidesHeroInner}>
          <span className={styles.guidesBadge}>Ludimus návody</span>

          <h1>Návody pre hráčov, trénerov a adminov</h1>

          <p className={styles.guidesLead}>
            Pripravili sme prehľadné návody pre hráčov, rodičov, trénerov aj
            adminov. Každá skupina tu nájde presne to, čo potrebuje na
            pohodlné používanie aplikácie v praxi.
          </p>

          <div className={styles.guidesHeroActions}>
            <a href="#sekcie-navodov" className={styles.guidesPrimaryBtn}>
              Pozrieť návody
            </a>
            <a href="#ako-to-funguje" className={styles.guidesSecondaryBtn}>
              Ako sú návody rozdelené
            </a>
          </div>
        </div>
      </section>

      <section className={styles.guidesIntro} id="ako-to-funguje">
        <div className={styles.guidesContainer}>
          <div className={styles.guidesIntroCard}>
            <div>
              <span className={styles.sectionEyebrow}>Jednoducho a prehľadne</span>
              <h2>Každý používateľ vidí len to, čo je preňho dôležité</h2>
              <p>
                Ludimus používajú rôzne typy používateľov. Preto sú návody
                rozdelené podľa rolí, aby sa hráči, rodičia, tréneri aj admini
                vedeli rýchlo dostať k informáciám, ktoré naozaj potrebujú.
              </p>
            </div>

            <div className={styles.guidesMiniStats}>
              <div className={styles.miniStat}>
                <strong>3</strong>
                <span>hlavné sekcie</span>
              </div>
              <div className={styles.miniStat}>
                <strong>video</strong>
                <span>ukážky používania</span>
              </div>
              <div className={styles.miniStat}>
                <strong>prakticky</strong>
                <span>krok za krokom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guidesCardsSection} id="sekcie-navodov">
        <div className={styles.guidesContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Sekcie návodov</span>
            <h2>Vyber si skupinu, pre ktorú chceš zobraziť návody</h2>
            <p>
              Každá sekcia obsahuje priestor pre video návody a stručný prehľad
              toho, čo sa v nich používateľ naučí.
            </p>
          </div>

          <div className={styles.guidesCardsGrid}>
            {guideCards.map((card) => (
              <article key={card.title} className={styles.guideCard}>
                <div className={styles.guideCardTop}>
                  <span className={styles.guideCardSubtitle}>{card.subtitle}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>

                <ul className={styles.guideList}>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href={`#${card.sectionId}`} className={styles.guideCardBtn}>
                  Pozrieť návody
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.guidesDetailSection}>
        <div className={styles.guidesContainer}>
          <div className={styles.guideDetailBlock} id="hraci-rodicia">
            <div className={styles.guideDetailText}>
              <span className={styles.sectionEyebrow}>Hráči a rodičia</span>
              <h2>Návody pre hráčov a rodičov</h2>
              <p>
                Táto sekcia je určená pre bežných používateľov aplikácie. Nájdeš
                tu video návody, ktoré ukazujú základné fungovanie systému,
                hlasovanie účasti, prehľad tréningov, zápasov a orientáciu v
                profile používateľa.
              </p>
            </div>

            <div className={styles.videoEmbed}>
            <iframe
                src="https://www.youtube.com/embed/tqD2NReoGNs"
                title="Návod pre hráčov a rodičov"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>
          </div>

          <div className={styles.guideDetailBlock} id="treneri">
            <div className={styles.guideDetailText}>
              <span className={styles.sectionEyebrow}>Tréneri</span>
              <h2>Návody pre trénerov</h2>
              <p>
                V tejto časti budú návody pre trénerov – vytváranie tréningov a
                zápasov, správa dochádzky, nominácie, prehľad hráčov a ďalšie
                funkcie, ktoré tréner potrebuje pri každodennej práci s tímom.
              </p>
            </div>

            <div className={styles.videoPlaceholder}>
              <div className={styles.videoPlaceholderInner}>
                <span>Ospravedlňujeme sa</span>
                <small>Na videu sa pracuje</small>
              </div>
            </div>
          </div>

          <div className={styles.guideDetailBlock} id="admini">
            <div className={styles.guideDetailText}>
              <span className={styles.sectionEyebrow}>Admini</span>
              <h2>Návody pre adminov</h2>
              <p>
                Táto sekcia bude venovaná administrátorom klubu. Obsahovať môže
                návody na správu používateľov, kategórií, rolí, nastavení klubu,
                platieb a ďalších dôležitých administratívnych častí systému.
              </p>
            </div>

            <div className={styles.videoPlaceholder}>
              <div className={styles.videoPlaceholderInner}>
                <span>Ospravedlňujeme sa</span>
                <small>Na videu sa pracuje</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guidesCtaSection}>
        <div className={styles.guidesContainer}>
          <div className={styles.guidesCtaBox}>
            <span className={styles.sectionEyebrow}>Potrebujete pomoc?</span>
            <h2>Nechajte svoj klub zorientovať sa v Ludimus rýchlo a bez chaosu</h2>
            <p>
              Návody sú pripravené tak, aby sa nový používateľ čo najrýchlejšie
              naučil pracovať so systémom a vedel ho využívať v reálnom fungovaní
              športového klubu.
            </p>
            <a href="/kontakt" className={styles.guidesPrimaryBtn}>
              Kontaktovať nás
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}