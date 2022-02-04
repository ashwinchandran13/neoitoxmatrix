
export const easeIn = {
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

export const fadeInUp = {
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

export const stagger = {
    initial: {
    },
    animate: { 
        transition: {
            staggerChildren: 0.2
        }
    },
    exit: {
    }
}

export const viewPort = {
    once:true
}

export const slideInRight = {
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

export const slideInLeft = {
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

export const slideInUp = {
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

