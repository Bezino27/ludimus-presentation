"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroOrbit.module.css";

type OrbitBaseItem = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

type OrbitItem = OrbitBaseItem & {
  angle: number;
  x: number;
  y: number;
};

const baseItems: OrbitBaseItem[] = [
  {
    id: "notifikacie",
    label: "Notifikácie",
    description: "Okamžité upozornenia na dôležité udalosti v klube.",
    icon: "/hero/notifikacie.svg",
  },
  {
    id: "platby",
    label: "Platby",
    description: "Evidencia členských platieb a úhrad na jednom mieste.",
    icon: "/hero/platby.svg",
  },
  {
    id: "tabulka",
    label: "Tabuľka",
    description: "Prehľadné klubové dáta, štatistiky a organizácia.",
    icon: "/hero/tabulka.svg",
  },
  {
    id: "spravy",
    label: "Správy",
    description: "Komunikácia medzi hráčmi, trénermi a vedením klubu.",
    icon: "/hero/spravy.svg",
  },
  {
    id: "treningy",
    label: "Tréningy",
    description: "Plánovanie tréningov a rýchla evidencia dochádzky.",
    icon: "/hero/treningy.svg",
  },
  {
    id: "dochadzka",
    label: "Dochádzka",
    description: "Prehľad účasti hráčov a tímovej aktivity.",
    icon: "/hero/dochadzka.svg",
  },
];

function buildDesktopOrbitItems(radius = 205): OrbitItem[] {
  const count = baseItems.length;
  const startAngleDeg = -90;
  const stepDeg = 360 / count;

  return baseItems.map((item, index) => {
    const angleDeg = startAngleDeg + index * stepDeg;
    const angleRad = (angleDeg * Math.PI) / 180;

    return {
      ...item,
      angle: angleDeg,
      x: Math.cos(angleRad) * radius,
      y: Math.sin(angleRad) * radius,
    };
  });
}

function buildMobileColumnItems(): OrbitItem[] {
  const positions = [
    { x: -118, y: -78 },
    { x: 118, y: -78 },
    { x: -118, y: 0 },
    { x: 118, y: 0 },
    { x: -118, y: 78 },
    { x: 118, y: 78 },
  ];

  return baseItems.map((item, index) => ({
    ...item,
    angle: 0,
    x: positions[index].x,
    y: positions[index].y,
  }));
}

export default function HeroOrbit() {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");

    const update = () => setIsMobile(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    } else {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, []);

  const orbitItems = useMemo(() => {
    return isMobile ? buildMobileColumnItems() : buildDesktopOrbitItems(205);
  }, [isMobile]);

  const activeItem = useMemo(
    () => orbitItems.find((item) => item.id === activeId) ?? null,
    [activeId, orbitItems]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [isMobile]);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openItem = (id: string) => {
    clearCloseTimeout();
    setActiveId(id);
  };

  const scheduleClose = () => {
    if (isMobile) return;
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveId(null);
    }, 160);
  };

  const handleItemClick = (id: string) => {
    if (!isMobile) return;
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.backgroundGlow} />

        {!isMobile &&
          orbitItems.map((item) => {
            const isActive = activeId === item.id;
            const lineLength = Math.sqrt(item.x * item.x + item.y * item.y) - 92;

            return (
              <div key={`line-wrap-${item.id}`} className={styles.centerAnchor}>
                <motion.div
                  className={`${styles.line} ${isActive ? styles.lineActive : ""}`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={
                    expanded
                      ? {
                          opacity: activeId === null ? 0.12 : isActive ? 0.65 : 0.04,
                          scaleX: 1,
                          width: lineLength,
                          rotate: `${Math.atan2(item.y, item.x)}rad`,
                        }
                      : {
                          opacity: 0,
                          scaleX: 0,
                          width: 0,
                          rotate: "0rad",
                        }
                  }
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            );
          })}

        <div className={styles.centerAnchor}>
          <motion.div
            className={styles.centerWrap}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <motion.div
              className={styles.centerPulse}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.42, 0.68, 0.42],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div
              className={styles.centerCardPerspective}
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={scheduleClose}
            >
              <motion.div
                className={styles.centerCardInner}
                animate={{ rotateY: activeItem ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.centerCardFaceFront}>
                  <div className={styles.centerLogoCard}>
                    <Image
                      src="/hero/ludimus_logo.svg"
                      alt="Ludimus logo"
                      width={170}
                      height={170}
                      className={styles.centerLogo}
                      priority
                    />
                  </div>
                </div>

                <div className={styles.centerCardFaceBack}>
                  <div className={styles.centerBackContent}>
                    <h3>{activeItem?.label ?? "Ludimus"}</h3>
                    <p>
                      {activeItem?.description ??
                        "Moderný informačný systém pre športové kluby."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {orbitItems.map((item, index) => {
          const isActive = activeId === item.id;
          const isDimmed = activeId !== null && activeId !== item.id;

          return (
            <div key={`icon-anchor-${item.id}`} className={styles.centerAnchor}>
              <motion.button
                type="button"
                className={styles.iconWrap}
                initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                animate={{
                  x: expanded ? item.x : 0,
                  y: expanded ? item.y : 0,
                  opacity: expanded ? (isDimmed ? 0.42 : 1) : 0,
                  scale: expanded ? (isActive ? 1.12 : isDimmed ? 0.92 : 1) : 0.2,
                }}
                transition={{
                  x: {
                    duration: 0.6,
                    delay: expanded ? 0.06 + index * 0.04 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  y: {
                    duration: 0.6,
                    delay: expanded ? 0.06 + index * 0.04 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: { duration: 0.18 },
                  scale: { duration: 0.18 },
                }}
                onMouseEnter={() => openItem(item.id)}
                onMouseLeave={scheduleClose}
                onFocus={() => openItem(item.id)}
                onBlur={scheduleClose}
                onClick={() => handleItemClick(item.id)}
                aria-label={item.label}
              >
                <div className={`${styles.iconCard} ${isActive ? styles.iconCardActive : ""}`}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={34}
                    height={34}
                    className={styles.iconImage}
                  />
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className={styles.bottomCard}>
        <strong>
          Dochádzka, tréningy, správy, notifikácie a platby v jednom systéme
        </strong>
      </div>
    </div>
  );
}