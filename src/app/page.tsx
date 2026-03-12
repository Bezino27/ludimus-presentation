import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import styles from "./page.module.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Ludimus | Moderný informačný systém pre športové kluby",
  description:
    "Ludimus je moderný informačný systém pre športové kluby. Tréningy, zápasy, nominácie, dochádzka, platby a komunikácia na jednom mieste.",
};

const features = [
  {
    title: "Tréningy a dochádzka",
    text: "Jednoduché vytváranie tréningov, prehľad účasti hráčov a rýchla evidencia dochádzky bez chaosu v správach.",
  },
  {
    title: "Zápasy a nominácie",
    text: "Správa zápasov, hlasovanie hráčov o účasti, nominácie a potvrdenia priamo v aplikácii.",
  },
  {
    title: "Platby a prehľad",
    text: "Prehľad členských platieb, evidencia úhrad a jednoduchšia administratíva pre vedenie klubu.",
  },
  {
    title: "Komunikácia v klube",
    text: "Rýchle oznamy, správy a dôležité informácie pre hráčov, trénerov aj adminov na jednom mieste.",
  },
];

const roles = [
  "Pre administrátorov klubov",
  "Pre trénerov a realizačné tímy",
  "Pre hráčov a členov klubu",
  "Pre rodičov mladších hráčov",
];

const benefits = [
  "Menej chaosu v komunikácii",
  "Menej ručnej administratívy",
  "Lepší prehľad o fungovaní klubu",
  "Moderný systém dostupný v mobile aj na webe",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>Platforma pre moderné športové kluby</div>

              <h1 className={styles.heroTitle}>
                Riadenie športového klubu
                <span> prehľadne a moderne</span>
              </h1>

              <p className={styles.heroText}>
                Ludimus pomáha klubom spravovať tréningy, zápasy, nominácie,
                dochádzku, platby aj komunikáciu medzi hráčmi, trénermi a
                vedením klubu.
              </p>

              <div className={styles.heroActions}>
                <Link href="/demo" className={styles.primaryBtn}>
                  Vyskúšať Ludimus
                </Link>

                <a href="https://app.ludimus.sk/login" className={styles.secondaryBtn}>
                  Prihlásiť sa do aplikácie
                </a>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <strong> Plánovanie</strong>
                  <span>tréningy a zápasy v pár klikoch</span>
                </div>
                <div className={styles.statCard}>
                  <strong>Prehľad</strong>
                  <span>dochádzka a nominácie hráčov</span>
                </div>
                <div className={styles.statCard}>
                  <strong>Dostupnosť</strong>
                  <span>webové aj mobilné rozhranie </span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageCard}>
                <Image
                  src="/images/hero-club.webp"
                  alt="Športový klub a digitálne riadenie tréningov"
                  fill
                  className={styles.heroImage}
                  priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroMiniCard}>
                  <strong>Dochádzka, zápasy, nominácie a platby v jednom systéme</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>Prečo Ludimus</span>
              <h2>Všetko dôležité pre klub na jednom mieste</h2>
              <p>
                Namiesto správ v Messengeri, Excelov, papierov a nejasnej
                komunikácie má klub jeden moderný systém, v ktorom vidí všetko
                podstatné.
              </p>
            </div>

            <div className={styles.reasonGrid}>
              <article className={styles.reasonCard}>
                <h3>Prehľad pre vedenie</h3>
                <p>
                  Administrátor klubu má kontrolu nad kategóriami, používateľmi,
                  platbami a dôležitými informáciami.
                </p>
              </article>

              <article className={styles.reasonCard}>
                <h3>Lepšia práca trénera</h3>
                <p>
                  Tréner má na jednom mieste tréningy, zápasy, nominácie a
                  dochádzku svojich hráčov.
                </p>
              </article>

              <article className={styles.reasonCard}>
                <h3>Jednoduchosť pre hráčov</h3>
                <p>
                  Hráči rýchlo vidia, čo ich čaká, a vedia potvrdiť účasť bez
                  zdĺhavého vypisovania správ.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>Funkcionality</span>
              <h2>Kľúčové moduly systému Ludimus</h2>
              <p>
                Systém je navrhnutý pre každodenné fungovanie športových klubov
                a reálne potreby trénerov, hráčov aj adminov.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature) => (
                <article key={feature.title} className={styles.featureCard}>
                  <div className={styles.featureIcon} />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.twoCol}>
              <div className={styles.imageBlock}>
                <div className={styles.sideImageWrap}>
                  <Image
                    src="/images/team-management.png"
                    alt="Moderný športový tím a digitálna správa klubu"
                    fill
                    className={styles.sideImage}
                  />
                </div>
              </div>

              <div className={styles.textBlock}>
                <span className={styles.sectionEyebrow}>Pre koho je Ludimus</span>
                <h2>Systém, ktorý spája celý klub</h2>
                <p className={styles.textLead}>
                  Ludimus je navrhnutý tak, aby mal každý používateľ vo svojom
                  rozhraní to, čo skutočne potrebuje.
                </p>

                <ul className={styles.roleList}>
                  {roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>Výhody</span>
              <h2>Čo klub získa nasadením Ludimusu</h2>
            </div>

            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div key={benefit} className={styles.benefitCard}>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div>
              <span className={styles.sectionEyebrow}>Začni jednoducho</span>
              <h2>Chceš ukázať Ludimus aj vo svojom klube?</h2>
              <p>
                Ozvi sa a pripravíme ti krátku ukážku systému, aby si videl, ako
                môže Ludimus fungovať vo vašom klube v praxi.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/kontakt" className={styles.primaryBtn}>
                Kontaktovať nás
              </Link>
              <Link href="/vyskusat" className={styles.secondaryBtnDark}>
                Vyskúšať na 30 dni zadarmo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}