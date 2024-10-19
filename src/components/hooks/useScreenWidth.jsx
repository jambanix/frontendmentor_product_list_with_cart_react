import { useEffect, useState } from "react"

// Inspiration from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
// Inspiration from https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

const getScreenWidth = () => {
    return window.innerWidth;
}

export const useScreenWidth = () => {

    const [width, setWidth] = useState(getScreenWidth());
    const screensizes = {
        tablet: 768,
        desktop: 1280
    }

    const handleWidthChange = () => {
        setWidth(width => getScreenWidth());
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleWidthChange);
        return () => window.removeEventListener("resize", handleWidthChange);
    }, [])

    if (width < screensizes.tablet) {
        return "mobile";
    }
    else if (width >= screensizes.tablet && width <= screensizes.desktop) {
        return "tablet";
    }
    else {
        return "desktop";
    }
}