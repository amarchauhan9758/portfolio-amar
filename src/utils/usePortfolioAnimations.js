import { useEffect, useRef } from 'react';
import { portfolioAnimations } from './gsapAnimations';

export const usePortfolioAnimations = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const projectCardsRef = useRef([]);
  const scrollProgressRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const elements = {
      section: sectionRef.current,
      title: titleRef.current,
      sliderContainer: sliderContainerRef.current,
      projectCards: projectCardsRef.current,
      scrollProgress: scrollProgressRef.current
    };

    portfolioAnimations.init(elements);

    // Setup slider navigation
    const navigation = portfolioAnimations.setupSliderNavigation(
      sliderContainerRef.current,
      cardsContainerRef.current,
      { prev: prevButtonRef.current, next: nextButtonRef.current }
    );

    return () => {
      portfolioAnimations.cleanup(elements);
      if (navigation) {
        if (prevButtonRef.current) {
          prevButtonRef.current.removeEventListener('click', navigation.prev);
        }
        if (nextButtonRef.current) {
          nextButtonRef.current.removeEventListener('click', navigation.next);
        }
        window.removeEventListener('resize', navigation.handleResize);
      }
    };
  }, []);

  const addToProjectCardsRef = (el) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };

  return {
    sectionRef,
    titleRef,
    sliderContainerRef,
    cardsContainerRef,
    projectCardsRef: addToProjectCardsRef,
    scrollProgressRef,
    prevButtonRef,
    nextButtonRef
  };
};