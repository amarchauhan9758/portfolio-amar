import { useEffect, useRef } from "react";
import { techStackAnimations } from "../utils/gsapAnimations";

export const useTechStackAnimations = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillGroupsRef = useRef([]);
  const skillBarsMap = useRef(new Map());
  const sectionProgressRef = useRef(null);

  useEffect(() => {
    const elements = {
      section: sectionRef.current,
      title: titleRef.current,
      skillGroups: skillGroupsRef.current,
      skillBars: skillBarsMap.current,
      sectionProgress: sectionProgressRef.current,
    };

    techStackAnimations.init(elements);

    return () => {
      techStackAnimations.cleanup(elements);
    };
  }, []);

  const addToSkillGroupsRef = (el) => {
    if (el && !skillGroupsRef.current.includes(el)) {
      skillGroupsRef.current.push(el);
    }
  };

  const addToSkillBarsMap = (
    key,
    element,
    level,
    setDisplayLevel,
    skillName,
  ) => {
    if (!skillBarsMap.current.has(key)) {
      skillBarsMap.current.set(key, {
        element,
        level,
        setDisplayLevel,
        skillName,
      });
    }
  };

  return {
    sectionRef,
    titleRef,
    skillGroupsRef: addToSkillGroupsRef,
    skillBarsMap: addToSkillBarsMap,
    sectionProgressRef,
  };
};
