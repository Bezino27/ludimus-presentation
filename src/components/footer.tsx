import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrap}>
            <Image
                src="/logo/ludimus.png"
                alt="Ludimus logo"
                width={50}
                height={50}
                className={styles.logoImage}
            />

            <div>
                <div className={styles.brandTitle}>LUDIMUS</div>
                <div className={styles.brandSubtitle}>SPORT CLUB SYSTEM</div>
            </div>
            </div>

            <p className={styles.brandText}>
              Moderný informačný systém pre športové kluby. Tréningy, zápasy,
              nominácie, dochádzka, platby a komunikácia na jednom mieste.
            </p>

            <div className={styles.contactList}>
              <a href="mailto:support@ludimus.sk">support@ludimus.sk</a>
              <a href="https://ludimus.sk/login">Prihlásenie do aplikácie</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Web</h4>
            <div className={styles.linkList}>
              <Link href="/">Domov</Link>
              <Link href="/funkcie">Funkcie</Link>
              <Link href="/cennik">Cenník</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Riešenie</h4>
            <div className={styles.linkList}>
              <Link href="/funkcie">Pre trénerov</Link>
              <Link href="/funkcie">Pre adminov</Link>
              <Link href="/funkcie">Pre hráčov</Link>
              <a href="https://ludimus.sk/login">Aplikácia</a>
            </div>
          </div>

          <div className={styles.ctaCol}>
            <h4>Začni s Ludimusom</h4>
            <p>
              Chceš modernizovať fungovanie klubu? Ozvi sa a ukážeme ti Ludimus
              v praxi.
            </p>

            <div className={styles.actions}>
              <Link href="/kontakt" className={styles.primaryBtn}>
                Dohodnúť prezentáciu
              </Link>
              <a href="https://ludimus.sk/login" className={styles.secondaryBtn}>
                Prihlásiť sa
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Ludimus. Všetky práva vyhradené.</span>

          <div className={styles.bottomLinks}>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
            <Link href="/podmienky-pouzivania">Podmienky používania</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}