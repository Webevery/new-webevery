"use client";
// import Link from "next/link";
import styles from "./HomeFaqSection.module.scss";
// import HomeFaqSectionItem from "./homeFaqSectionItem/homeFaqSectionItem";
import { FAQdata, FAQdataEN } from "@/data";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import PlusIcon from "./Icons/PlusIcon";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import { currentLanguages } from "@/data";
import { useWindowResize } from "@/hooks/useWindowResize";

const HomeFaqSection = () => {
  const { isMobile } = useWindowResize();
  const isBrowser = typeof window !== "undefined"; //The approach recommended by Next.js
  const { t, i18n } = useTranslation();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);

  const data = i18n.language === currentLanguages.EN ? FAQdataEN : FAQdata;
  // const [activeIndex, setActiveIndex] = useState(0);

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

  const howManyItemsToDisplay = () => {
    if (!isMobile) {
      return data.slice(0, 6);
    }
    return data.slice(0, 4);
  };

  return (
    <section className={styles.faqSection}>
      <div className={"container"}>
        <h2 className={`titleGradient ${styles.faqSection__title}`}>FAQ</h2>
        {!isLoad && (
          <>
            <h3 className={styles.faqSection__title2}>
              {t("MainPage.FaqSubTitle")}
            </h3>
            <NavigationBtn
              href={"/faq"}
              className={styles.faqSection__readMore}
              title={t("Buttons.HomeFaqBtn")}
            />
            {/* <Link href={"/faq"} className={styles.faqSection__readMore}>
        Read more
      </Link> */}
            <Accordion
              selectionMode="multiple"
              showDivider={false}
              motionProps={motionAcc}
              className={styles.accordion}
              variant="shadow"
            >
              {howManyItemsToDisplay().map((item) => (
                <AccordionItem
                  classNames={{
                    indicator: styles.indicator,
                    base: styles.base,
                    heading: styles.heading,
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
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </>
        )}
        {/* <ul className={styles.faqSection__list}>
        {FAQdataEN.map((item) => (
          <HomeFaqSectionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            link={item.link}
            href={item.href}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            answerHeight={item.answerHeight}
          />
        ))}
      </ul> */}
      </div>
    </section>
  );
};

export default HomeFaqSection;
