"use client";
import styles from "./FaqSection.module.scss";
import { FAQdata, FAQdataEN } from "@/data";
import { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslation } from "react-i18next";
import PlusIcon from "./Icons/PlusIcon";
import { currentLanguages } from "@/data";
import Link from "next/link";


const FaqSection = () => {
  const { t, i18n } = useTranslation();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);

  const data = i18n.language === currentLanguages.EN ? FAQdataEN : FAQdata;

  const motionAcc = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: "auto",
        transition: {
          height: {
            type: "ease",
            duration: 0.5,
          },
          opacity: {
            easings: "ease",
            duration: 0.5,
          },
        },
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        transition: {
          height: {
            easings: "ease",
            duration: 0.5,
          },
          opacity: {
            easings: "ease",
            duration: 0.5,
          },
        },
      },
    },
  };

  return (
    <section>
      <div className={`container ${styles.faq__container}`}>
        <h2 className={`titleGradient ${styles.faq__title}`}>FAQ</h2>
        <Accordion
          selectionMode="multiple"
          showDivider={false}
          motionProps={motionAcc}
          className={styles.accordion}
          variant="shadow"
        >
          {data.map((item) => (
            <AccordionItem
              classNames={{
                base: styles.base,
                trigger: styles.trigger,
                title: styles.title,
                content: styles.content,
              }}
              key={item.id}
              title={item.question}
              indicator={({ isOpen }) =>
                isOpen ? <PlusIcon svgOpen={true} /> : <PlusIcon />
              }
            >
              {item.answer} {item.link && <Link className="titleGradient" href={item.href}>{item.link}</Link>}.
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section >
  );
};

export default FaqSection;
