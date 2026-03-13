"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <span>We create. We Move. We play.</span>
          </div>

          <div className={styles.topRight}>
            <a href="mailto:info@ludimus.sk">support@ludimus.sk</a>
            <a href="https://app.ludimus.sk/login">Prihlásenie</a>
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoImageWrap}>
              <Image
                src="/logo/ludimus.png"
                alt="Ludimus logo"
                width={160}
                height={52}
                className={styles.logoImage}
                priority
              />
              <div className={styles.logoText}>
                  <span className={styles.logoTitleWrap}>
                    <Image
                      src="/logo/ludimus_font_white.svg"
                      alt="Ludimus logo"
                      width={150}
                      height={60}
                      className={styles.logoTitleImage}
                      priority
                    />
                    <Image
                      src="/logo/ludimus_font_red.svg"
                      alt="Ludimus logo"
                      width={150}
                      height={60}
                      className={styles.logoTitleImageHover}
                      priority
                    />
                  </span>
              </div>
            </div>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Domov</Link>
            <Link href="/funkcie">Funkcie</Link>
            <Link href="/cennik">Cenník</Link>
            <Link href="/navody">Návody</Link>
            <Link href="/referencie">Referencie</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>

          <div className={styles.actions}>
            <a href="https://app.ludimus.sk/login" className={styles.loginBtn}>
              Prihlásiť sa
            </a>

            <Link href="/demo" className={styles.ctaBtn}>
              Vyskúšať Ludimus
            </Link>
          </div>

          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Otvoriť menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={closeMenu}>
              Domov
            </Link>
            <Link href="/funkcie" onClick={closeMenu}>
              Funkcie
            </Link>
            <Link href="/cennik" onClick={closeMenu}>
              Cenník
            </Link>
            <Link href="/navody" onClick={closeMenu}>
              Návody
            </Link>
            <Link href="/referencie" onClick={closeMenu}>
              Referencie
            </Link>
            <Link href="/kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
          </nav>

          <div className={styles.mobileActions}>
            <a
              href="https://app.ludimus.sk/login"
              className={styles.mobileLoginBtn}
              onClick={closeMenu}
            >
              Prihlásiť sa
            </a>

            <Link
              href="/demo"
              className={styles.mobileCtaBtn}
              onClick={closeMenu}
            >
              Vyskúšať Ludimus
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}