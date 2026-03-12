import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./referencie.module.css";
import Image from "next/image";

const stats = [
  { value: "5+", label: "aktívnych klubov" },
  { value: "300+", label: "hráčov a členov" },
  { value: "20+", label: "trénerov a adminov" },
];

const reviews = [
  {
    text: "Ludimus nám veľmi pomohol zjednodušiť organizáciu tréningov a komunikáciu s hráčmi. Všetko máme konečne na jednom mieste.",
    author: "Rodič",
    club: "FaBK ATU Košice",
  },
  {
    text: "Najviac oceňujeme prehľad o dochádzke a jednoduché vytváranie tréningov. Aplikácia je pre tím veľmi praktická.",
    author: "Manažér klubu",
    club: "ŠK Modrá",
  },
  {
    text: "Pre rodičov aj hráčov je veľká výhoda, že majú informácie vždy poruke. Systém je prehľadný a jednoduchý na používanie.",
    author: "Tréner",
    club: "Žatva 90 Dolný Kubín",
  },
];

export default function ReferenciePage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Referencie</span>
            <h1>Kluby, ktoré už používajú Ludimus</h1>
            <p className={styles.lead}>
              Budujeme moderný informačný systém pre športové kluby. Pomáhame s
              tréningami, zápasmi, dochádzkou, komunikáciou aj správou členov.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Dôvera a výsledky</span>
            <h2>Rastieme spolu s klubmi</h2>
            <p>
              Táto sekcia môže časom ukazovať reálne čísla podľa počtu klubov a
              používateľov, ktorí Ludimus používajú.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Skúsenosti klubov</span>
            <h2>Priestor pre recenzie a spätnú väzbu</h2>
            <p>
              Sem môžeš postupne pridávať reálne vyjadrenia trénerov, adminov,
              hráčov alebo rodičov z klubov, ktoré Ludimus testujú alebo používajú.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <article key={index} className={styles.reviewCard}>
                <div className={styles.quoteMark}>“</div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewFooter}>
                  <strong>{review.author}</strong>
                  <span>{review.club}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.logoSection}>
        <div className={styles.container}>
          <div className={styles.logoBox}>
            <span className={styles.sectionEyebrow}>Loga klubov</span>
            <p>
                Loga klubov ktoré s nami spolupracujú
            </p>

            <div className={styles.logoGrid}>
            <div className={styles.logoGrid}>

            <div className={styles.logoItem}>
                <Image
                src="/clubs/atu.webp"
                alt="Florbalový klub Bratislava"
                width={140}
                height={80}
                />
            </div>

            <div className={styles.logoItem}>
                <Image
                src="/clubs/modra.png"
                alt="HC Prešov"
                width={140}
                height={80}
                />
            </div>

            <div className={styles.logoItem}>
                <Image
                src="/clubs/dolny_kubin.png"
                alt="ŠK Košice"
                width={140}
                height={80}
                />
            </div>

            <div className={styles.logoItem}>
                <Image
                src="/clubs/leopoldov2.png"
                alt="Mládežnícky klub Žilina"
                width={140}
                height={80}
                />
            </div>

            </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.sectionEyebrow}>Chceš sa pridať?</span>
            <h2>Ukáž svojmu klubu, ako môže Ludimus zjednodušiť fungovanie</h2>
            <p>
              Radi ti ukážeme systém v praxi a prejdeme si, ako môže fungovať
              presne pre potreby tvojho klubu.
            </p>

            <div className={styles.ctaActions}>
              <a href="/kontakt" className={styles.primaryBtn}>
                Dohodnúť prezentáciu
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