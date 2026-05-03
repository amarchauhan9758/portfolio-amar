import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
export const heroAnimations = {
  // Initialize and setup hero animations
  init: (elements) => {
    // Set initial states
    gsap.set(elements.background, { scale: 1.2 });
    gsap.set(elements.content, { opacity: 0, y: 50 });
    gsap.set(elements.heading, { opacity: 0, y: 30 });
    gsap.set(elements.paragraphs, { opacity: 0, y: 20 });
    gsap.set(elements.socialIcons, { opacity: 0, scale: 0 });
    gsap.set(elements.buttons, { opacity: 0, y: 20 });
    gsap.set(elements.scrollIndicator, { opacity: 0, y: -20 });

    // Create main timeline for hero entrance
    const heroTimeline = gsap.timeline();

    heroTimeline
      // Background zoom effect
      .to(elements.background, {
        scale: 1,
        duration: 4,
        ease: "power2.out",
      })
      // Content fade in
      .to(
        elements.content,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=2.5",
      )
      // Heading animation
      .to(
        elements.heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      )
      // Paragraphs stagger
      .to(
        elements.paragraphs,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3",
      )
      // Social icons stagger with rotation
      .to(
        elements.socialIcons,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
          rotate: 360,
        },
        "-=0.2",
      )
      // Buttons animation
      .to(
        elements.buttons,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2",
      )
      // Scroll indicator
      .to(
        elements.scrollIndicator,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "bounce.out",
        },
        "-=0.1",
      );

    // Continuous floating animation for scroll indicator
    gsap.to(elements.scrollIndicator, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Parallax effect for background on scroll
    ScrollTrigger.create({
      trigger: elements.section,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(elements.background, {
          y: self.progress * 200,
          scale: 1 + self.progress * 0.3,
          duration: 0,
          overwrite: true,
        });
      },
    });

    // Add hover animations for buttons
    elements.buttons.forEach((button) => {
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    // Add hover animations for social icons
    elements.socialIcons.forEach((icon) => {
      if (icon) {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            y: -5,
            scale: 1.2,
            duration: 0.3,
            ease: "back.out(1)",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1)",
          });
        });
      }
    });

    // Text color animation for heading (subtle pulsing effect on the word "Amar")
    if (elements.heading) {
      const amarText = elements.heading.querySelector(".amar-name");
      if (amarText) {
        gsap.to(amarText, {
          textShadow: "0 0 10px rgba(230, 255, 153, 0.5)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }
  },

  // Cleanup function
  cleanup: (elements) => {
    // Kill all ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Remove event listeners if needed
    if (elements.buttons) {
      elements.buttons.forEach((button) => {
        if (button) {
          button.removeEventListener("mouseenter", () => {});
          button.removeEventListener("mouseleave", () => {});
        }
      });
    }

    if (elements.socialIcons) {
      elements.socialIcons.forEach((icon) => {
        if (icon) {
          icon.removeEventListener("mouseenter", () => {});
          icon.removeEventListener("mouseleave", () => {});
        }
      });
    }
  },
};

export const techStackAnimations = {
  // Initialize and setup tech stack animations
  init: (elements) => {
    // Set initial states
    gsap.set(elements.title, { opacity: 0, y: -30 });
    gsap.set(elements.skillGroups, { opacity: 0, y: 20 });

    // Store all ScrollTrigger instances for cleanup
    const scrollTriggers = [];

    // Animate title
    const titleTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 85%",
      toggleActions: "play none none reverse",
      onEnter: () => techStackAnimations.animateTitle(elements.title),
      onEnterBack: () => techStackAnimations.animateTitle(elements.title),
    });
    scrollTriggers.push(titleTrigger);

    // Animate skill groups with stagger
    const groupsTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 75%",
      toggleActions: "play none none reverse",
      onEnter: () =>
        techStackAnimations.animateSkillGroups(elements.skillGroups),
      onEnterBack: () =>
        techStackAnimations.animateSkillGroups(elements.skillGroups),
    });
    scrollTriggers.push(groupsTrigger);

    // Animate each skill bar
    if (elements.skillBars && elements.skillBars.size > 0) {
      elements.skillBars.forEach(
        ({ element, level, setDisplayLevel, skillName }, idx) => {
          const barTrigger = ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            onEnter: () => {
              techStackAnimations.animateSkillBar(
                element,
                level,
                setDisplayLevel,
                skillName,
                idx * 0.02,
              );
            },
            onEnterBack: () => {
              techStackAnimations.animateSkillBar(
                element,
                level,
                setDisplayLevel,
                skillName,
                idx * 0.02,
              );
            },
            toggleActions: "play none none reverse",
          });
          scrollTriggers.push(barTrigger);
        },
      );
    }

    // Add hover effects for skill groups
    techStackAnimations.addHoverEffects(elements.skillGroups);

    // Add scroll progress animation for skill section
    const progressTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (elements.sectionProgress) {
          const progress = self.progress;
          gsap.to(elements.sectionProgress, {
            scaleX: progress,
            duration: 0,
            overwrite: true,
          });
        }
      },
    });
    scrollTriggers.push(progressTrigger);

    // Store triggers for cleanup
    elements.scrollTriggers = scrollTriggers;
  },

  // Animate title
  animateTitle: (titleElement) => {
    if (!titleElement) return;

    gsap.to(titleElement, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
      overwrite: true,
    });
  },

  // Animate skill groups
  animateSkillGroups: (skillGroups) => {
    if (!skillGroups || skillGroups.length === 0) return;

    gsap.to(skillGroups, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      overwrite: true,
    });
  },

  // Animate individual skill bar
  animateSkillBar: (
    barElement,
    targetLevel,
    setDisplayLevel,
    skillName,
    delay = 0,
  ) => {
    if (!barElement) return;

    const bars = barElement.children;
    if (!bars || bars.length === 0) return;

    const fullBars = Math.floor(targetLevel);
    const partialBar = targetLevel % 1;

    // Update counter display if function provided
    if (setDisplayLevel && typeof setDisplayLevel === "function") {
      techStackAnimations.animateCounter(setDisplayLevel, targetLevel, delay);
    }

    // Reset all bars to default color
    Array.from(bars).forEach((bar) => {
      gsap.set(bar, { backgroundColor: "#374151" }); // gray-700
    });

    // Create timeline for this skill bar
    const tl = gsap.timeline({ delay });

    // Animate full bars with stagger
    for (let i = 0; i < fullBars; i++) {
      if (bars[i]) {
        tl.to(
          bars[i],
          {
            backgroundColor: "#e6ff99",
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          i * 0.08,
        );
      }
    }

    // Animate partial bar if exists
    if (partialBar > 0 && bars[fullBars]) {
      tl.to(
        bars[fullBars],
        {
          backgroundColor: "#e6ff99",
          duration: 0.4,
          ease: "power2.out",
        },
        fullBars * 0.08,
      );
    }

    // Add pulse effect on completion
    tl.call(() => {
      techStackAnimations.addPulseEffect(bars);

      // Optional: Add skill name animation
      if (skillName) {
        const skillText = barElement
          .closest(".skill-item")
          ?.querySelector(".skill-name");
        if (skillText) {
          gsap.fromTo(
            skillText,
            { color: "#9ca3af" },
            { color: "#e6ff99", duration: 0.3, yoyo: true, repeat: 1 },
          );
        }
      }
    });

    return tl;
  },

  // Animate counter numbers
  animateCounter: (setDisplayLevel, targetLevel, delay = 0) => {
    // Animate from 0 to target level
    let start = 0;
    const duration = 1;
    const increment = targetLevel / (duration * 60); // 60fps

    setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetLevel) {
          setDisplayLevel(targetLevel);
          clearInterval(interval);
        } else {
          setDisplayLevel(start);
        }
      }, 1000 / 60);
    }, delay * 1000);
  },

  // Add pulse effect to bars
  addPulseEffect: (bars) => {
    if (!bars) return;

    gsap.to(bars, {
      scale: 1.02,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      stagger: 0.02,
      ease: "power1.inOut",
      overwrite: true,
    });
  },

  // Add hover effects for skill groups
  addHoverEffects: (skillGroups) => {
    if (!skillGroups) return;

    skillGroups.forEach((group) => {
      if (!group) return;

      const handleMouseEnter = () => {
        gsap.to(group, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(group, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      };

      group.addEventListener("mouseenter", handleMouseEnter);
      group.addEventListener("mouseleave", handleMouseLeave);

      // Store event listeners for cleanup
      if (!group._gsapEvents) {
        group._gsapEvents = { handleMouseEnter, handleMouseLeave };
      }
    });
  },

  // Cleanup all animations
  cleanup: (elements) => {
    // Kill all ScrollTriggers
    if (elements.scrollTriggers) {
      elements.scrollTriggers.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
    }

    // Kill all ScrollTriggers globally
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Remove event listeners from skill groups
    if (elements.skillGroups) {
      elements.skillGroups.forEach((group) => {
        if (group && group._gsapEvents) {
          group.removeEventListener(
            "mouseenter",
            group._gsapEvents.handleMouseEnter,
          );
          group.removeEventListener(
            "mouseleave",
            group._gsapEvents.handleMouseLeave,
          );
          delete group._gsapEvents;
        }
      });
    }

    // Kill any ongoing animations
    if (elements.title) gsap.killTweensOf(elements.title);
    if (elements.skillGroups) gsap.killTweensOf(elements.skillGroups);
  },
};

export const portfolioAnimations = {
  // Initialize portfolio animations
  init: (elements) => {
    // Set initial states
    gsap.set(elements.title, { opacity: 0, y: -30 });
    gsap.set(elements.sliderContainer, { opacity: 0 });
    gsap.set(elements.projectCards, { opacity: 0, x: 50 });

    const scrollTriggers = [];

    // Animate title
    const titleTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 85%",
      toggleActions: "play none none reverse",
      onEnter: () => portfolioAnimations.animateTitle(elements.title),
      onEnterBack: () => portfolioAnimations.animateTitle(elements.title),
    });
    scrollTriggers.push(titleTrigger);

    // Animate slider container
    const sliderTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 75%",
      toggleActions: "play none none reverse",
      onEnter: () =>
        portfolioAnimations.animateSlider(elements.sliderContainer),
      onEnterBack: () =>
        portfolioAnimations.animateSlider(elements.sliderContainer),
    });
    scrollTriggers.push(sliderTrigger);

    // Animate project cards with stagger
    if (elements.projectCards && elements.projectCards.length > 0) {
      const cardsTrigger = ScrollTrigger.create({
        trigger: elements.section,
        start: "top 70%",
        toggleActions: "play none none reverse",
        onEnter: () =>
          portfolioAnimations.animateProjectCards(elements.projectCards),
        onEnterBack: () =>
          portfolioAnimations.animateProjectCards(elements.projectCards),
      });
      scrollTriggers.push(cardsTrigger);
    }

    // Add hover effects for cards
    portfolioAnimations.addCardHoverEffects(elements.projectCards);

    // Add scroll progress indicator
    if (elements.scrollProgress) {
      const progressTrigger = ScrollTrigger.create({
        trigger: elements.sliderContainer,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(elements.scrollProgress, {
            scaleX: progress,
            duration: 0,
            overwrite: true,
          });
        },
      });
      scrollTriggers.push(progressTrigger);
    }

    elements.scrollTriggers = scrollTriggers;
  },

  // Animate title
  animateTitle: (titleElement) => {
    if (!titleElement) return;

    gsap.to(titleElement, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
      overwrite: true,
    });
  },

  // Animate slider container
  animateSlider: (sliderContainer) => {
    if (!sliderContainer) return;

    gsap.to(sliderContainer, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
  },

  // Animate project cards with stagger
  animateProjectCards: (cards) => {
    if (!cards || cards.length === 0) return;

    gsap.to(cards, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(0.8)",
      overwrite: true,
    });
  },

  // Add hover effects for cards
  addCardHoverEffects: (cards) => {
    if (!cards) return;

    cards.forEach((card) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Store event listeners for cleanup
      if (!card._gsapEvents) {
        card._gsapEvents = { handleMouseEnter, handleMouseLeave };
      }
    });
  },

  // Setup slider navigation animations
  setupSliderNavigation: (
    sliderRef,
    cardsContainer,
    navButtons,
    onNavigate,
  ) => {
    if (!sliderRef || !cardsContainer) return;

    let currentIndex = 0;
    const cardWidth = cardsContainer.children[0]?.offsetWidth + 16; // 16px gap
    const maxIndex = Math.max(0, cardsContainer.children.length - 1);

    const updateNavigation = () => {
      if (navButtons.prev && navButtons.next) {
        navButtons.prev.style.opacity = currentIndex === 0 ? "0.5" : "1";
        navButtons.prev.style.pointerEvents =
          currentIndex === 0 ? "none" : "auto";
        navButtons.next.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
        navButtons.next.style.pointerEvents =
          currentIndex >= maxIndex ? "none" : "auto";
      }
    };

    const slideTo = (index) => {
      index = Math.max(0, Math.min(index, maxIndex));
      if (index === currentIndex) return;

      currentIndex = index;
      const newPosition = -currentIndex * cardWidth;

      gsap.to(cardsContainer, {
        x: newPosition,
        duration: 0.8,
        ease: "power3.inOut",
        overwrite: true,
      });

      updateNavigation();

      // Trigger callback
      if (onNavigate) onNavigate(currentIndex);
    };

    const next = () => slideTo(currentIndex + 1);
    const prev = () => slideTo(currentIndex - 1);

    // Add click handlers
    if (navButtons.next) navButtons.next.addEventListener("click", next);
    if (navButtons.prev) navButtons.prev.addEventListener("click", prev);

    // Update on window resize
    const handleResize = () => {
      const newCardWidth = cardsContainer.children[0]?.offsetWidth + 16;
      if (newCardWidth !== cardWidth) {
        const newPosition = -currentIndex * newCardWidth;
        gsap.set(cardsContainer, { x: newPosition });
      }
    };

    window.addEventListener("resize", handleResize);
    updateNavigation();

    return { next, prev, slideTo, handleResize };
  },

  // Cleanup animations
  cleanup: (elements) => {
    if (elements.scrollTriggers) {
      elements.scrollTriggers.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
    }

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Remove event listeners from cards
    if (elements.projectCards) {
      elements.projectCards.forEach((card) => {
        if (card && card._gsapEvents) {
          card.removeEventListener(
            "mouseenter",
            card._gsapEvents.handleMouseEnter,
          );
          card.removeEventListener(
            "mouseleave",
            card._gsapEvents.handleMouseLeave,
          );
          delete card._gsapEvents;
        }
      });
    }

    // Kill animations
    if (elements.title) gsap.killTweensOf(elements.title);
    if (elements.sliderContainer) gsap.killTweensOf(elements.sliderContainer);
    if (elements.projectCards) gsap.killTweensOf(elements.projectCards);
  },
};

export const resumeAnimations = {
  // Initialize resume animations
  init: (elements) => {
    // Set initial states
    gsap.set(elements.educationTitle, { opacity: 0, x: -50 });
    gsap.set(elements.experienceTitle, { opacity: 0, x: 50 });
    gsap.set(elements.timelineItems, { opacity: 0, y: 30, scale: 0.95 });
    gsap.set(elements.timelineLines, { scaleY: 0 });
    gsap.set(elements.dateBadges, { opacity: 0, x: -20 });
    gsap.set(elements.contentBoxes, { opacity: 0, x: 20 });

    const scrollTriggers = [];

    // Animate education title
    const eduTitleTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 85%",
      toggleActions: "play none none reverse",
      onEnter: () =>
        resumeAnimations.animateTitle(elements.educationTitle, "left"),
      onEnterBack: () =>
        resumeAnimations.animateTitle(elements.educationTitle, "left"),
    });
    scrollTriggers.push(eduTitleTrigger);

    // Animate experience title
    const expTitleTrigger = ScrollTrigger.create({
      trigger: elements.section,
      start: "top 85%",
      toggleActions: "play none none reverse",
      onEnter: () =>
        resumeAnimations.animateTitle(elements.experienceTitle, "right"),
      onEnterBack: () =>
        resumeAnimations.animateTitle(elements.experienceTitle, "right"),
    });
    scrollTriggers.push(expTitleTrigger);

    // Animate timeline items with stagger
    if (elements.timelineItems && elements.timelineItems.length > 0) {
      const timelineTrigger = ScrollTrigger.create({
        trigger: elements.section,
        start: "top 75%",
        toggleActions: "play none none reverse",
        onEnter: () =>
          resumeAnimations.animateTimelineItems(elements.timelineItems),
        onEnterBack: () =>
          resumeAnimations.animateTimelineItems(elements.timelineItems),
      });
      scrollTriggers.push(timelineTrigger);
    }

    // Animate timeline lines
    if (elements.timelineLines && elements.timelineLines.length > 0) {
      elements.timelineLines.forEach((line, index) => {
        const lineTrigger = ScrollTrigger.create({
          trigger: line,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () =>
            resumeAnimations.animateTimelineLine(line, index * 0.2),
          onEnterBack: () =>
            resumeAnimations.animateTimelineLine(line, index * 0.2),
        });
        scrollTriggers.push(lineTrigger);
      });
    }

    // Add hover effects
    resumeAnimations.addHoverEffects(elements.timelineItems);

    // Add parallax effect on scroll
    if (elements.section) {
      const parallaxTrigger = ScrollTrigger.create({
        trigger: elements.section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (elements.timelineItems) {
            gsap.to(elements.timelineItems, {
              y: self.progress * 50,
              duration: 0,
              overwrite: true,
            });
          }
        },
      });
      scrollTriggers.push(parallaxTrigger);
    }

    elements.scrollTriggers = scrollTriggers;
  },

  // Animate title
  animateTitle: (titleElement, direction = "left") => {
    if (!titleElement) return;

    const xValue = direction === "left" ? -50 : 50;

    gsap.to(titleElement, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
      overwrite: true,
    });
  },

  // Animate timeline items
  animateTimelineItems: (items) => {
    if (!items || items.length === 0) return;

    gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: true,
      onComplete: () => {
        // Add pulsing effect to newly animated items
        items.forEach((item, index) => {
          gsap.to(item, {
            boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)",
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            delay: index * 0.1,
          });
        });
      },
    });
  },

  // Animate timeline line
  animateTimelineLine: (lineElement, delay = 0) => {
    if (!lineElement) return;

    gsap.to(lineElement, {
      scaleY: 1,
      duration: 0.8,
      delay: delay,
      ease: "power2.out",
      overwrite: true,
    });
  },

  // Animate individual timeline item details
  animateTimelineDetails: (dateBadge, contentBox, delay = 0) => {
    const tl = gsap.timeline({ delay });

    tl.to(dateBadge, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "back.out(1)",
    }).to(
      contentBox,
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2",
    );

    return tl;
  },

  // Add hover effects for timeline items
  addHoverEffects: (items) => {
    if (!items) return;

    items.forEach((item) => {
      if (!item) return;

      const handleMouseEnter = () => {
        // Scale effect on the entire item
        gsap.to(item, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });

        // Highlight the border
        const borderElement = item.querySelector(".timeline-border");
        if (borderElement) {
          gsap.to(borderElement, {
            borderColor: "#4ade80",
            duration: 0.3,
            overwrite: true,
          });
        }

        // Glow effect on date badge
        const dateBadge = item.querySelector(".date-badge");
        if (dateBadge) {
          gsap.to(dateBadge, {
            scale: 1.05,
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)",
            duration: 0.3,
            overwrite: true,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });

        const borderElement = item.querySelector(".timeline-border");
        if (borderElement) {
          gsap.to(borderElement, {
            borderColor: "#374151",
            duration: 0.3,
            overwrite: true,
          });
        }

        const dateBadge = item.querySelector(".date-badge");
        if (dateBadge) {
          gsap.to(dateBadge, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            overwrite: true,
          });
        }
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      if (!item._gsapEvents) {
        item._gsapEvents = { handleMouseEnter, handleMouseLeave };
      }
    });
  },

  // Add scroll progress indicator
  addScrollProgress: (section, progressBar) => {
    if (!section || !progressBar) return;

    return ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(progressBar, {
          scaleX: progress,
          duration: 0,
          overwrite: true,
        });
      },
    });
  },

  // Cleanup animations
  cleanup: (elements) => {
    if (elements.scrollTriggers) {
      elements.scrollTriggers.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
    }

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Remove event listeners
    if (elements.timelineItems) {
      elements.timelineItems.forEach((item) => {
        if (item && item._gsapEvents) {
          item.removeEventListener(
            "mouseenter",
            item._gsapEvents.handleMouseEnter,
          );
          item.removeEventListener(
            "mouseleave",
            item._gsapEvents.handleMouseLeave,
          );
          delete item._gsapEvents;
        }
      });
    }

    // Kill animations
    if (elements.educationTitle) gsap.killTweensOf(elements.educationTitle);
    if (elements.experienceTitle) gsap.killTweensOf(elements.experienceTitle);
    if (elements.timelineItems) gsap.killTweensOf(elements.timelineItems);
  },
};
