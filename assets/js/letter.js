// Kích hoạt ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Gọi các hiệu ứng có sẵn
document.addEventListener("DOMContentLoaded", () => {
  gsapFlipIn(".animate-flip");
  gsapFlipInThenYoyo(".animate-flip-yoyo");
  gsapFadeIn(".fade-in");
  gsapFadeInForEnd(".fade-in-end");
  gsapFadeInThenYoyo(".fade-in-yoyo");
  gsapFadeRight(".fade-right");
  gsapFadeLeft(".fade-left");
  gsapFadeUp(".fade-up");
  gsapFadeDown(".fade-down");
  gsapRotateBottomLeft(".rotate-bl");
  gsapRotateBottomRight(".rotate-br");
  gsapRotateBottomLeftThenYoyo(".rotate-bl-yoyo");
  gsapRotateBottomRightThenYoyo(".rotate-br-yoyo");
  gsapFlipVerticalLeft(".flip-vertical-left");
  gsapRollInLeft(".roll-in-left");
  gsap_rotate_bl__float(".rotate-bl--float");

  const tl = gsap.timeline({
    repeatDelay: 0,  // delay giữa các lần lặp
    defaults: { duration: .8, ease: "power2.out" }, // giá trị mặc định
    scrollTrigger: {
      trigger: ".letter-section",
      start: "top 85%", // khi phần tử xuất hiện 80% trong viewport
    }
  });

  // Thêm các animation theo thứ tự
  tl.from(".couple-names", { x: 80, opacity: 0 }, "=0.8")        
    .from(".date", { x: -80, opacity: 0 }, "-=0.5")       
    tl.fromTo(
      ".loveanyway",
      {
        rotation: -120,
        scale: 0,
        opacity: 0
      },
      {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.6)",
        transformOrigin: "50% 50%"
      },
      "-=0.4"
    );    
});
