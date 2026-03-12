"use client";

import { useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./cennik.module.css";

type UserRange = "1-30" | "30-100" | "100-150" | "150-250" | "250+";
type BillingPeriod = "month" | "quarter" | "half" | "year";

const userOptions: { value: UserRange; label: string; hint: string }[] = [
  { value: "1-30", label: "1-30 členov", hint: "Malé kluby a tímy" },
  { value: "30-100", label: "30-100 členov", hint: "Rastúce kluby" },
  { value: "100-150", label: "100-150 členov", hint: "Stredne veľké kluby" },
  { value: "150-250", label: "150-250 členov", hint: "Väčšie organizácie" },
  { value: "250+", label: "250+ členov", hint: "Veľké kluby a akadémie" },
];

const periodOptions: { value: BillingPeriod; label: string; short: string }[] = [
  { value: "month", label: "Mesačne", short: "1 mesiac" },
  { value: "quarter", label: "Štvrťročne", short: "3 mesiace" },
  { value: "half", label: "Polročne", short: "6 mesiacov" },
  { value: "year", label: "Ročne", short: "12 mesiacov" },
];

const basePrices: Record<UserRange, number> = {
  "1-30": 230,
  "30-100": 290,
  "100-150": 320,
  "150-250": 400,
  "250+": 700,
};

const periodMultiplier: Record<BillingPeriod, number> = {
  month: 1.2,
  quarter: 1.15,
  half: 1.1,
  year: 1,
};

const includedFeatures = [
  "Tréningy a zápasy",
  "Dochádzka hráčov",
  "Nominácie a hlasovania",
  "Platby a prehľady",
  "Web + mobilná aplikácia",
  "Notifikácie a komunikácia",
];

export default function CennikPage() {
  const [users, setUsers] = useState<UserRange>("100-150");
  const [period, setPeriod] = useState<BillingPeriod>("year");
  const [vat, setVat] = useState(false);

  const VAT_RATE = 1.23;

  const calculations = useMemo(() => {
    const annualBase = basePrices[users];

    let intervalPriceWithoutVat = annualBase * periodMultiplier[period];

    if (period === "month") intervalPriceWithoutVat = intervalPriceWithoutVat / 12;
    if (period === "quarter") intervalPriceWithoutVat = intervalPriceWithoutVat / 4;
    if (period === "half") intervalPriceWithoutVat = intervalPriceWithoutVat / 2;

    const intervalPriceWithVat = intervalPriceWithoutVat * VAT_RATE;
    const intervalPriceFinal = vat ? intervalPriceWithVat : intervalPriceWithoutVat;

    const monthlyEquivalentWithoutVat =
      period === "month"
        ? intervalPriceWithoutVat
        : period === "quarter"
        ? intervalPriceWithoutVat / 3
        : period === "half"
        ? intervalPriceWithoutVat / 6
        : intervalPriceWithoutVat / 12;

    const monthlyEquivalentWithVat = monthlyEquivalentWithoutVat * VAT_RATE;
    const monthlyEquivalentFinal = vat ? monthlyEquivalentWithVat : monthlyEquivalentWithoutVat;

    const monthlyPlanPriceWithoutVat = (annualBase * periodMultiplier.month) / 12;

    const savingsVsMonthlyPercent = Math.max(
      0,
      Math.round((1 - monthlyEquivalentWithoutVat / monthlyPlanPriceWithoutVat) * 100)
    );

    const annualPriceSelectedWithoutVat =
      period === "month"
        ? intervalPriceWithoutVat * 12
        : period === "quarter"
        ? intervalPriceWithoutVat * 4
        : period === "half"
        ? intervalPriceWithoutVat * 2
        : intervalPriceWithoutVat;

    const annualPriceMonthlyWithoutVat = monthlyPlanPriceWithoutVat * 12;

    const savingsVsMonthlyYearWithoutVat = Math.max(
      0,
      annualPriceMonthlyWithoutVat - annualPriceSelectedWithoutVat
    );

    const periodLabel =
      period === "month"
        ? "mesačne"
        : period === "quarter"
        ? "za štvrťrok"
        : period === "half"
        ? "za polrok"
        : "za rok";

    return {
      intervalPrice: intervalPriceFinal.toFixed(2),
      monthlyEquivalent: monthlyEquivalentFinal.toFixed(2),
      annualBase: annualBase,
      savingsVsMonthlyPercent,
      savingsVsMonthlyYear:
        (vat
          ? savingsVsMonthlyYearWithoutVat * VAT_RATE
          : savingsVsMonthlyYearWithoutVat
        ).toFixed(2),
      periodLabel,
    };
  }, [users, period, vat]);

  const selectedUserLabel =
    userOptions.find((item) => item.value === users)?.label ?? users;

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Cenník</span>
            <h1>Jednoduché a férové ceny pre športové kluby</h1>
            <p>
              Cena závisí od veľkosti klubu a zvoleného obdobia. Čím dlhšie
              obdobie platby, tým výhodnejšia cena pre klub.
            </p>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={styles.pricingInner}>
            <div className={styles.leftColumn}>
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <span className={styles.panelEyebrow}>Nastavenie ceny</span>
                  <h2>Vyber si variant pre svoj klub</h2>
                </div>

                <div className={styles.controlBlock}>
                  <div className={styles.controlTitle}>Počet aktívnych členov</div>
                  <div className={styles.segmentGrid}>
                    {userOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`${styles.segmentButton} ${
                          users === option.value ? styles.segmentButtonActive : ""
                        }`}
                        onClick={() => setUsers(option.value)}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.hint}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.controlBlock}>
                  <div className={styles.controlTitle}>Obdobie platby</div>
                  <div className={styles.periodGrid}>
                    {periodOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`${styles.periodCard} ${
                          period === option.value ? styles.periodCardActive : ""
                        } ${option.value === "year" ? styles.periodCardRecommended : ""}`}
                        onClick={() => setPeriod(option.value)}
                      >
                        {option.value === "year" && (
                          <span className={styles.recommendedBadge}>Najvýhodnejšie</span>
                        )}
                        <strong>{option.label}</strong>
                        <span>{option.short}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.controlBlock}>
                  <div className={styles.controlTitle}>Zobrazenie ceny</div>
                  <div className={styles.vatSwitch}>
                    <button
                      type="button"
                      className={`${styles.vatButton} ${!vat ? styles.vatButtonActive : ""}`}
                      onClick={() => setVat(false)}
                    >
                      Bez DPH
                    </button>
                    <button
                      type="button"
                      className={`${styles.vatButton} ${vat ? styles.vatButtonActive : ""}`}
                      onClick={() => setVat(true)}
                    >
                      S DPH (23 %)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.summaryCard}>
                <span className={styles.summaryEyebrow}>Výsledná cena</span>
                <h2>{selectedUserLabel}</h2>

                <div className={styles.priceRow}>
                  <div className={styles.price}>
                    od {calculations.monthlyEquivalent} €
                  </div>
                  <div className={styles.priceMeta}>mesačne</div>
                </div>

                <p className={styles.billingInfo}>
                  Fakturované <strong>{calculations.intervalPrice} €</strong>{" "}
                  {calculations.periodLabel}
                </p>

                <div className={styles.miniStats}>
                  <div className={styles.miniStat}>
                    <span>Priemer na mesiac</span>
                    <strong>{calculations.monthlyEquivalent} €</strong>
                  </div>

                  <div className={styles.miniStat}>
                    <span>Ročná základná cena</span>
                    <strong>
                      {vat
                        ? (calculations.annualBase * VAT_RATE).toFixed(2)
                        : calculations.annualBase.toFixed(2)}{" "}
                      €
                    </strong>
                  </div>
                </div>

                {period !== "month" && calculations.savingsVsMonthlyPercent > 0 && (
                  <div className={styles.savingsBox}>
                    Ušetríš až <strong>{calculations.savingsVsMonthlyPercent} %</strong>{" "}
                    oproti mesačnej platbe.
                  </div>
                )}

                {period !== "month" && (
                  <p className={styles.savingsNote}>
                    Pri tomto variante je orientačná úspora oproti mesačnému
                    režimu približne <strong>{calculations.savingsVsMonthlyYear} €</strong>{" "}
                    ročne.
                  </p>
                )}

                <div className={styles.buttonGroup}>
                  <a href="/kontakt" className={styles.primaryButton}>
                    Dohodnúť prezentáciu
                  </a>

                  <a href="/vyskusat" className={styles.secondaryButton}>
                    Vyskúšať v klube na 30 dní zadarmo
                  </a>
                </div>

                <div className={styles.featureBox}>
                  <div className={styles.featureTitle}>V cene je zahrnuté:</div>
                  <ul className={styles.featureList}>
                    {includedFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}