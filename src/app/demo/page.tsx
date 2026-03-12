import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./demo.module.css";

const steps = [
  {
    number: "01",
    title: "Stiahnite si mobilnú aplikáciu",
    text: "Demo účet pre hráča je určený pre mobilnú aplikáciu Ludimus. Na otestovanie je potrebné nainštalovať si aplikáciu do telefónu.",
  },
  {
    number: "02",
    title: "Otvorte prihlasovanie",
    text: "Po otvorení aplikácie prejdite na prihlasovaciu obrazovku a pripravte si demo prihlasovacie údaje.",
  },
  {
    number: "03",
    title: "Prihláste sa do FK Example",
    text: "Použite demo účet hráča v ukážkovom klube FK Example a pozrite si fungovanie systému z pohľadu člena klubu.",
  },
  {
    number: "04",
    title: "Vyskúšajte si aplikáciu",
    text: "Prezrite si tréningy, zápasy, oznamy, profil a ďalšie časti aplikácie. Demo sa pravidelne resetuje.",
  },
];

const features = [
  "prehľad tréningov a zápasov",
  "detail tréningu a základné hlasovanie",
  "oznamy a informácie v klube",
  "profil hráča a orientácia v aplikácii",
];

export default function DemoPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Mobilné demo</span>

            <h1>Vyskúšajte si Ludimus v mobilnej aplikácii</h1>

            <p className={styles.lead}>
              Verejné demo je dostupné pre <strong>hráčsky účet</strong> v
              ukážkovom klube <strong>FK Example</strong>. Na vyskúšanie je
              potrebné stiahnuť si mobilnú aplikáciu. Webová verzia je zatiaľ
              určená najmä pre adminov a trénerov.
            </p>

            <div className={styles.heroActions}>
              <a href="/kontakt" className={styles.primaryBtn}>
                Chcem pomôcť s demo prístupom
              </a>
              <a href="/vyskusat" className={styles.secondaryBtn}>
                30 dní zadarmo pre klub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoCard}>
            <div className={styles.infoText}>
              <span className={styles.sectionEyebrow}>Dôležitá informácia</span>
              <h2>Demo je dostupné v mobilnej aplikácii</h2>
              <p>
                Ak si chcete Ludimus vyskúšať ako hráč, je potrebné použiť
                mobilnú aplikáciu. Webové rozhranie momentálne slúži hlavne pre
                administrátorov a trénerov klubu.
              </p>
            </div>

            <div className={styles.infoHighlight}>
              <strong>Hráčske demo</strong>
              <span>mobilná aplikácia</span>
              <strong>Admin / tréner</strong>
              <span>mobilná aplikácia + webové rozhranie</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.credentialsSection}>
        <div className={styles.container}>
          <div className={styles.credentialsCard}>
            <div className={styles.credentialsText}>
              <span className={styles.sectionEyebrow}>Demo účet</span>
              <h2>Prihlasovacie údaje do ukážkového klubu</h2>
              <p>
                Tento účet je verejný a slúži výhradne na ukážku aplikácie.
                Niektoré funkcie môžu byť zámerne obmedzené a demo údaje sa
                pravidelne obnovujú.
              </p>
            </div>

            <div className={styles.credentialsBox}>
              <div className={styles.credentialRow}>
                <span className={styles.credentialLabel}>Klub</span>
                <strong>FK Example</strong>
              </div>

              <div className={styles.credentialRow}>
                <span className={styles.credentialLabel}>Používateľské meno</span>
                <strong>demo_hrac</strong>
              </div>

              <div className={styles.credentialRow}>
                <span className={styles.credentialLabel}>Heslo</span>
                <strong>demo1234</strong>
              </div>

              <a href="/kontakt" className={styles.primaryBtn}>
                Potrebujem pomoc s prihlásením
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Ako postupovať</span>
            <h2>4 jednoduché kroky, ako si vyskúšať Ludimus</h2>
            <p>
              Demo je pripravené tak, aby si návštevník vedel rýchlo pozrieť
              fungovanie aplikácie bez zdĺhavého nastavovania.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresCard}>
            <div className={styles.featuresText}>
              <span className={styles.sectionEyebrow}>Čo si v deme pozriete</span>
              <h2>Ukážka fungovania z pohľadu hráča</h2>
              <p>
                Demo účet je určený na rýchle zoznámenie s aplikáciou v reálnom
                klubovom prostredí. Používateľ si vie pozrieť tie časti, ktoré
                sú pre hráča najdôležitejšie.
              </p>
            </div>

            <ul className={styles.featureList}>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.noticeSection}>
        <div className={styles.container}>
          <div className={styles.noticeBox}>
            <span className={styles.sectionEyebrow}>Obnovenie dema</span>
            <h2>Demo prostredie sa pravidelne resetuje</h2>
            <p>
              Ukážkový klub je určený na verejné testovanie. Dáta sa pravidelne
              obnovujú, aby bolo demo dlhodobo funkčné a pripravené pre ďalších
              záujemcov.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.sectionEyebrow}>Chcete vidieť viac?</span>
            <h2>Ukážeme vám Ludimus aj z pohľadu trénera alebo admina</h2>
            <p>
              Verejné demo je dostupné len pre hráčsky účet. Ak si chcete
              pozrieť správu tréningov, zápasov, nominácií alebo administráciu
              klubu, ozvite sa nám a pripravíme vám prezentáciu systému.
            </p>

            <div className={styles.ctaActions}>
              <a href="/kontakt" className={styles.primaryBtn}>
                Kontaktovať nás
              </a>
              <a href="/navody" className={styles.secondaryBtn}>
                Pozrieť návody
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}