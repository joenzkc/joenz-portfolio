import AOS from "aos";

export function initAOS() {
  AOS.init({
    duration: 1200,
    easing: "ease-out-cubic",
    once: false,
  });
}
