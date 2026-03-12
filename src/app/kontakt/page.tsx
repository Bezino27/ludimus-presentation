import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./kontakt.module.css";

export const metadata = {
  title: "Kontakt | Ludimus",
  description:
    "Kontaktujte Ludimus a dohodnite si ukážku moderného informačného systému pre športové kluby.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Kontakt</span>
            <h1>Ozvite sa nám a ukážeme vám Ludimus v praxi</h1>
            <p>
              Máš záujem o moderný informačný systém pre športový klub? Napíš
              nám a radi ti predstavíme, ako môže Ludimus zjednodušiť tréningy,
              zápasy, dochádzku, platby aj komunikáciu v klube.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactInner}>
            <div className={styles.infoCard}>
              <span className={styles.eyebrow}>Spojme sa</span>
              <h2>Kontakt pre kluby a spoluprácu</h2>
              <p className={styles.infoText}>
                Najčastejšie pomáhame klubom s prezentáciou systému, nastavením
                fungovania a ukážkou konkrétnych modulov podľa potrieb klubu.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Email</div>
                  <a href="mailto:support@ludimus.sk">support@ludimus.sk</a>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Telefón</div>
                  <a href="tel:+421910811911">+421 910 811 911</a>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Typ spolupráce</div>
                  <span>Ukážka systému, konzultácia, nasadenie pre klub</span>
                </div>
              </div>

              <div className={styles.noteBox}>
                <strong>Čo si môžeme prejsť?</strong>
                <p>
                  Tréningy, zápasy, nominácie, dochádzku, platby, komunikáciu aj
                  administráciu klubu – podľa toho, čo práve potrebujete.
                </p>
              </div>
            </div>

            <div className={styles.formCard}>
              <span className={styles.eyebrow}>Napíš nám</span>
              <h2>Kontaktný formulár</h2>

              <form className={styles.form}>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label htmlFor="name">Meno a priezvisko</label>
                    <input id="name" name="name" type="text" placeholder="Tvoje meno" />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="club">Názov klubu</label>
                    <input id="club" name="club" type="text" placeholder="Názov klubu" />
                  </div>
                </div>

                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="tvoj@email.sk" />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Telefón</label>
                    <input id="phone" name="phone" type="text" placeholder="+421 ..." />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Správa</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Napíš nám, čo by ste vo vašom klube chceli riešiť..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Odoslať správu
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}