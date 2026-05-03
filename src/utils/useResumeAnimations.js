import { useEffect, useRef } from 'react';
import { resumeAnimations } from './gsapAnimations';

export const useResumeAnimations = () => {
  const sectionRef = useRef(null);
  const educationTitleRef = useRef(null);
  const experienceTitleRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const timelineLinesRef = useRef([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const elements = {
      section: sectionRef.current,
      educationTitle: educationTitleRef.current,
      experienceTitle: experienceTitleRef.current,
      timelineItems: timelineItemsRef.current,
      timelineLines: timelineLinesRef.current
    };

    resumeAnimations.init(elements);
    
    // Add scroll progress bar
    if (progressBarRef.current) {
      const progressTrigger = resumeAnimations.addScrollProgress(
        sectionRef.current,
        progressBarRef.current
      );
      if (progressTrigger) {
        elements.scrollTriggers?.push(progressTrigger);
      }
    }

    return () => {
      resumeAnimations.cleanup(elements);
    };
  }, []);

  const addToTimelineItemsRef = (el) => {
    if (el && !timelineItemsRef.current.includes(el)) {
      timelineItemsRef.current.push(el);
    }
  };

  const addToTimelineLinesRef = (el) => {
    if (el && !timelineLinesRef.current.includes(el)) {
      timelineLinesRef.current.push(el);
    }
  };

  return {
    sectionRef,
    educationTitleRef,
    experienceTitleRef,
    timelineItemsRef: addToTimelineItemsRef,
    timelineLinesRef: addToTimelineLinesRef,
    progressBarRef
  };
};