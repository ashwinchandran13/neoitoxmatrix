import { Variants } from "framer-motion"

export const easeIn: Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: 'easeInOut'
        }
    }
}

export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const stagger: Variants = {
    initial: {
    },
    animate: {
        transition: {
            staggerChildren: 0.4
        }
    },
    exit: {
    }
}

export const viewPort = {
    once: true
}

export const slideInRight: Variants = {
    initial: {
        x: -50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const slideInLeft: Variants = {
    initial: {
        x: 50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const slideInUp: Variants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const dashInUp = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100
    }
}

export const headerSlide: Variants = {
    initial: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0.6
        }
    },
    animate: {
        opacity: 0,
        y: -25,
        transition: {
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0.6
        }
    }
}

export const keepAfloat: Variants = {
    initial: {},
    animate: {
        y: -10,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
        }
    }
}

export const draw:Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
                opacity: { delay, duration: 1.5 }
            }
        };
    }
};

export const infiniteLineDraw:Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: 1, type: "spring", duration: 1.5, bounce: 0, repeat: Infinity, repeatType: "reverse"},
                opacity: { delay: 0.1, duration: 0.01 }
            }
    }
};



