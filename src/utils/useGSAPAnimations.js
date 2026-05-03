import { useEffect, useRef } from "react";
import { heroAnimations } from "./gsapAnimations";

export const useHeroAnimations = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);
  const socialIconsRef = useRef([]);
  const buttonsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const elements = {
      section: sectionRef.current,
      background: backgroundRef.current,
      content: contentRef.current,
      heading: headingRef.current,
      paragraphs: paragraphsRef.current,
      socialIcons: socialIconsRef.current,
      buttons: buttonsRef.current,
      scrollIndicator: scrollIndicatorRef.current,
    };

    heroAnimations.init(elements);

    return () => {
      heroAnimations.cleanup(elements);
    };
  }, []);

  const addToParagraphsRef = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  const addToSocialIconsRef = (el) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  const addToButtonsRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return {
    sectionRef,
    backgroundRef,
    contentRef,
    headingRef,
    paragraphsRef: addToParagraphsRef,
    socialIconsRef: addToSocialIconsRef,
    buttonsRef: addToButtonsRef,
    scrollIndicatorRef,
  };
};
