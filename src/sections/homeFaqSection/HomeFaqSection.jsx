"use client";
// import Link from "next/link";
import styles from "./HomeFaqSection.module.scss";
// import HomeFaqSectionItem from "./homeFaqSectionItem/homeFaqSectionItem";
// import { FAQdata } from "@/data/FAQ.data";
import { FAQdataEN } from "@/data/FAQEN.data";
// import { currentLanguages } from "@/data/languages.data";
// import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import PlusIcon from "./Icons/PlusIcon";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import { currentLanguages } from "@/data/languages.data";
import { useWindowResize } from "@/hooks/useWindowResize";

const HomeFaqSection = () => {
  const { isMobile } = useWindowResize();
  const isBrowser = typeof window !== "undefined"; //The approach recommended by Next.js
  // const [activeIndex, setActiveIndex] = useState(0);
  // const { i18n } = useTranslation();
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
  // const currentLanguageFAQData = () => {
  //   return i18n.language === currentLanguages.UA ? FAQdata : FAQdataEN;
  // };

  const howManyItemsToDisplay = () => {
    // const currentLanguageFAQData = () => {
    //   return i18n.language === currentLanguages.UA ? FAQdata : FAQdataEN;
    // };
    if (!isMobile) {
      return FAQdataEN.slice(0, 6);
    }
    return FAQdataEN.slice(0, 4);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={`titleGradient ${styles.faqSection__title}`}>FAQ</h2>
      <h3 className={styles.faqSection__title2}>Find your question here</h3>
      <NavigationBtn
        href={"/faq"}
        className={styles.faqSection__readMore}
        title={"Read more"}
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
    </section>
  );
};

export default HomeFaqSection;
