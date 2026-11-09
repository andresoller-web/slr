"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { useCounterAnimation } from "../../../hooks/useCounterAnimation";

// Data de abertura da SLR Engenharia: 17/12/2018.
// O contador mostra os anos completos de atuação e soma +1 automaticamente
// todo dia 17/12 (ex.: 7 até 16/12/2026, 8 a partir de 17/12/2026).
const FOUNDING_DATE = { year: 2018, month: 12, day: 17 };

function getYearsOfOperation(now: Date = new Date()): number {
  const [year, month, day] = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .split("-")
    .map(Number);

  const reachedAnniversary =
    month > FOUNDING_DATE.month ||
    (month === FOUNDING_DATE.month && day >= FOUNDING_DATE.day);
  return year - FOUNDING_DATE.year - (reachedAnniversary ? 0 : 1);
}

// Componente para estatísticas com animação de contador
function StatisticCounter({
  targetValue,
  suffix = "",
  text,
  delay = 0,
}: {
  targetValue: number;
  suffix?: string;
  text: string;
  delay?: number;
}) {
  const { count } = useCounterAnimation({
    targetValue,
    duration: 2000,
    startDelay: delay,
  });

  return (
    <motion.div
      className="flex items-center gap-2 flex-col justify-center text-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 + delay / 1000 }}
    >
      <p className="text-white md:text-4xl sm:text-3xl text-base font-semibold">
        {count}
        {suffix}
      </p>
      <p className="text-white md:text-xl text-[10px]">{text}</p>
    </motion.div>
  );
}

export default function Hero() {
  const t = useTranslations();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="relative w-full h-full min-h-[95vh] lg:min-h-[100dvh] z-10">
        <Image
          src="/hero-home.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Conteúdo Principal */}
        <div className="absolute inset-0 flex items-center flex-col justify-center px-4">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 h-full e w-full flex flex-col lg:items-start items-center justify-center pt-20 gap-10 text-white lg:gap-10 text-center lg:text-left ">
            {/* Título Principal */}
            <motion.h1
              className="text-white xs:text-5xl text-4xl font-semibold max-w-[600px]"
              style={{ wordSpacing: "-0.1em" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtítulo e Descrição */}
            <div className="flex lg:flex-col flex-col-reverse gap-10 w-auto items-center lg:items-start">
              <Link href="/cases">
                <motion.div
                  ref={ref}
                  className="md:text-md text-[12px] uppercase font-semibold rounded-full bg-white hover:text-[#2C2C2C] hover:bg-[#FFBE00]  transition-all duration-300 text-black pl-6 pr-2 py-2 flex items-center gap-2 max-w-[370px] group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t("hero.subtitle")}
                  <div
                    ref={ref}
                    className="md:p-2 p-1 md:w-8 md:h-8 w-6 h-6 rounded-full bg-[#FFBE00] group-hover:bg-[#2C2C2C] group-hover:text-[#FFBE00]  transition-all duration-300 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>

              <motion.p
                className="text-white text-sm xl:text-base max-w-[480px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t("hero.description")}
              </motion.p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="flex items-start justify-between gap-4 max-w-7xl mx-auto left-0  w-full sm:pb-10 pb-15 md:px-8 px-2">
            <StatisticCounter
              targetValue={getYearsOfOperation()}
              suffix="+"
              text={t("hero.years")}
              delay={400}
            />
            <StatisticCounter
              targetValue={1000}
              suffix="+"
              text={t("hero.projects")}
              delay={200}
            />
            <StatisticCounter
              targetValue={5}
              suffix="+"
              text={t("hero.countries")}
              delay={400}
            />
            <StatisticCounter
              targetValue={300}
              suffix="Mil"
              text={t("hero.m2")}
              delay={600}
            />
          </div>

          {/* Linhas de borda */}
          <motion.div
            className="w-full absolute bottom-20 left-0"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.div
            className="w-full pb-22  max-w-7xl mx-auto border-white"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
        </div>
      </div>
    </div>
  );
}
