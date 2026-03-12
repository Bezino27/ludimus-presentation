import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import styles from "./funkcie.module.css";

export const metadata = {
  title: "Funkcie | Ludimus",
  description:
    "Objav funkcie systému Ludimus pre športové kluby. Tréningy, zápasy, nominácie, dochádzka, platby, komunikácia a mobilná aplikácia na jednom mieste.",
};

const sections = [
  {
    eyebrow: "Tréningy a dochádzka",
    title: "Prehľad tréningov a účasti hráčov bez chaosu",
    text: "Tréneri majú prehľad o plánovaných tréningoch, účasti hráčov a histórii dochádzky. Hráči vedia jednoducho potvrdiť svoju účasť a klub má všetko evidované na jednom mieste.",
    image: "/mockups/treningy.png",
    imageAlt: "Mockup Ludimus aplikácie – tréningy a dochádzka",
    reverse: false,
    bullets: [
      "Rýchle potvrdenie účasti",
      "Prehľad podľa kategórií",
      "Dochádzka hráčov na pár klikov",
    ],
  },
  {
    eyebrow: "Zápasy a nominácie",
    title: "Správa zápasov a nominácií priamo v aplikácii",
    text: "Ludimus umožňuje vytvárať zápasy, sledovať hlasovanie hráčov o účasti a zostavovať nominácie. Tréner má všetko prehľadne usporiadané a hráči okamžite vidia svoj status.",
    image: "/mockups/zapasy.png",
    imageAlt: "Mockup Ludimus aplikácie – zápasy a nominácie",
    reverse: true,
    bullets: [
      "Tvorba zápasov a nominácie",
      "Hlasovanie hráčov o účasti",
      "Prehľad stavu potvrdení",
    ],
  },
  {
    eyebrow: "Platby členov",
    title: "Jednoduchší prehľad o členských platbách",
    text: "Administrátor klubu má prehľad o vytvorených platbách, stave úhrad a členoch, ktorí už zaplatili alebo ešte nie. Tým sa výrazne znižuje ručná administratíva a dohľadávanie informácií.",
    image: "/mockups/menu.jpg",
    imageAlt: "Mockup Ludimus aplikácie – platby členov",
    reverse: false,
    bullets: [
      "Prehľad uhradených a neuhradených platieb",
      "Jednoduchšia kontrola členov",
      "Menej ručnej administratívy",
    ],
  },
  {
    eyebrow: "Komunikácia a notifikácie",
    title: "Dôležité informácie sa dostanú k správnym ľuďom",
    text: "Oznamy, správy a push notifikácie pomáhajú klubu komunikovať rýchlejšie a prehľadnejšie. Hráči, tréneri aj rodičia majú informácie vždy poruke v mobile.",
    image: "/mockups/oznamy.png",
    imageAlt: "Mockup Ludimus aplikácie – komunikácia a notifikácie",
    reverse: true,
    bullets: [
      "Rýchle klubové oznamy",
      "Push notifikácie do mobilu",
      "Správy na jednom mieste",
    ],
  },
  {
    eyebrow: "Správy a konverzácie",
    title: "Priama komunikácia v prípade potreby",
    text: "Keď je potrebné niečo vyriešiť rýchlo, správy v Ludimuse umožnia okamžitú komunikáciu medzi členmi klubu. Tréner, hráč aj rodič majú všetko na jednom mieste bez chaosu v externých aplikáciách.",
    image: "/mockups/spravy.jpg",
    imageAlt: "Mockup Ludimus aplikácie – správy a konverzácie",
    reverse: false,
    bullets: [
      "Súkromné aj praktické klubové konverzácie",
      "Rýchla komunikácia pri zmenách a potrebe riešenia",
      "Všetko priamo v aplikácii Ludimus",
    ],
  },
];

export default function FunkciePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Funkcie systému</span>
            <h1>Všetko, čo športový klub potrebuje na jednom mieste</h1>
            <p>
              Ludimus prepája hráčov, trénerov a vedenie klubu do jedného
              moderného systému. Tréningy, zápasy, nominácie, dochádzka,
              platby aj komunikácia fungujú prehľadne a bez zbytočného chaosu.
            </p>
          </div>
        </section>

        <section className={styles.sections}>
          <div className={styles.sectionsInner}>
            {sections.map((section, index) => (
              <article
                key={section.title}
                className={`${styles.featureSection} ${
                  section.reverse ? styles.featureSectionReverse : ""
                } ${index % 2 === 0 ? styles.featureLight : styles.featureDark}`}
              >
                <div className={styles.textCol}>
                  <span className={styles.sectionEyebrow}>{section.eyebrow}</span>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>

                  <ul className={styles.bulletList}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.imageCol}>
                  <div className={styles.visualWrap}>
                    <div className={styles.glow} />
                    <div className={styles.phoneShell}>
                      <div className={styles.phoneNotch} />
                      <div className={styles.phoneFrame}>
                        <Image
                          src={section.image}
                          alt={section.imageAlt}
                          fill
                          sizes="(max-width: 700px) 280px, (max-width: 980px) 340px, 420px"
                          className={styles.mockupImage}
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    <div className={styles.floatingCardTop}>
                      <strong>Moderné rozhranie</strong>
                      <span>Rýchle a prehľadné ovládanie</span>
                    </div>

                    <div className={styles.floatingCardBottom}>
                      <strong>Web + mobil</strong>
                      <span>Klub má všetko poruke</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <span className={styles.sectionEyebrow}>Pripravené pre kluby</span>
            <h2>Chceš vidieť Ludimus na reálnych dátach tvojho klubu?</h2>
            <p>
              Radi ti ukážeme, ako môže Ludimus fungovať vo vašom každodennom
              fungovaní – od tréningov a zápasov až po platby a komunikáciu.
            </p>

            <a href="/kontakt" className={styles.ctaButton}>
              Dohodnúť prezentáciu
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}