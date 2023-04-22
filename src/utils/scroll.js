export function handleScroll(string) {
    document.getElementById(string).scrollIntoView({ behavior: "smooth" });
};