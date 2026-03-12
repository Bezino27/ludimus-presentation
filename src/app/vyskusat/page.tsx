import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./vyskusat.module.css";

const benefits = [
  {
    title: "30 dní zadarmo",
    text: "Otestujete si Ludimus vo vašom klube bez záväzku a bez potreby okamžitého rozhodnutia.",
  },
  {
    title: "Všetky funkcie od prvého dňa",
    text: "Skúšobná verzia nie je obmedzená. Klub môže používať systém naplno už počas testovania.",
  },
  {
    title: "Plynulý prechod do ostrej prevádzky",
    text: "To, čo nastavíte počas testu, môže zostať pripravené aj pre bežné používanie v klube.",
  },
];

const included = [
  "tréningy a zápasy",
  "dochádzka hráčov",
  "nominácie a účasť",
  "oznamy a komunikácia",
  "hráčske, trénerské a admin roly",
  "pomoc s prvotným nastavením",
];

export default function VyskusatPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>30 dní zadarmo</span>

            <h1>Ludimus si môžete vyskúšať vo vašom klube bez obmedzení</h1>

            <p className={styles.lead}>
              Otestujte si celý systém v reálnom fungovaní klubu. Všetky
              funkcie sú dostupné od prvého dňa a po skúšobnom období môžete
              plynulo prejsť do ostrej prevádzky bez straty dát.
            </p>

            <div className={styles.heroActions}>
              <a href="#formular" className={styles.primaryBtn}>
                Chcem skúšobnú verziu
              </a>
              <a href="/kontakt" className={styles.secondaryBtn}>
                Kontaktovať nás
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {benefits.map((item) => (
              <article key={item.title} className={styles.benefitCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.includedCard}>
            <div className={styles.includedText}>
              <span className={styles.sectionEyebrow}>Čo získate</span>
              <h2>Plnohodnotné testovanie v reálnom klubovom prostredí</h2>
              <p>
                Skúšobná verzia je pripravená tak, aby klub vedel Ludimus
                používať od začiatku naplno. Nejde o obmedzené demo, ale o
                reálne testovanie systému v praxi.
              </p>
            </div>

            <ul className={styles.featureList}>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.transitionSection}>
        <div className={styles.container}>
          <div className={styles.transitionBox}>
            <span className={styles.sectionEyebrow}>Bez komplikácií</span>
            <h2>Plynulý prechod do ostrej prevádzky</h2>
            <p>
              Ak sa po skúšobnom období rozhodnete pokračovať, nie je potrebné
              začínať od nuly. Klub môže pokračovať v rovnakom prostredí, ktoré
              si už počas testovania nastavil a naplnil dátami.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection} id="formular">
        <div className={styles.container}>
          <div className={styles.formWrap}>
            <div className={styles.formText}>
              <span className={styles.sectionEyebrow}>Skúšobná verzia</span>
              <h2>Požiadajte o Ludimus na 30 dní zadarmo</h2>
              <p>
                Vyplňte krátky formulár a ozveme sa vám s ďalším postupom.
                Pripravíme testovacie prostredie pre váš klub a pomôžeme vám s
                prvým nastavením.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Meno a priezvisko</label>
                  <input type="text" placeholder="Vaše meno" />
                </div>

                <div className={styles.field}>
                  <label>Názov klubu</label>
                  <input type="text" placeholder="Názov klubu" />
                </div>

                <div className={styles.field}>
                  <label>Email</label>
                  <input type="email" placeholder="vas@email.sk" />
                </div>

                <div className={styles.field}>
                  <label>Telefón</label>
                  <input type="text" placeholder="+421..." />
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label>Počet členov klubu</label>
                  <input type="text" placeholder="Napr. 60 členov" />
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label>Poznámka</label>
                  <textarea
                    rows={5}
                    placeholder="Napíšte nám, čo by ste si chceli vyskúšať alebo aký typ klubu máte."
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Chcem 30 dní zadarmo
              </button>

              <p className={styles.formNote}>
                Po odoslaní vás budeme kontaktovať a dohodneme ďalší postup.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.sectionEyebrow}>Najprv si to pozrite</span>
            <h2>Chcete najskôr vidieť ukážku aplikácie?</h2>
            <p>
              Pozrite si verejné demo pre hráča alebo si prejdite video návody,
              aby ste získali predstavu o fungovaní systému ešte pred spustením
              skúšobnej verzie vo vašom klube.
            </p>

            <div className={styles.ctaActions}>
              <a href="/demo" className={styles.primaryBtn}>
                Otvoriť demo
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