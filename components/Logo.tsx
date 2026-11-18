import styles from "./Logo.module.css";

// Vector pieces of the AspenView lockup, positioned exactly as in Figma
// (inset percentages: top right bottom left).
const PIECES: string[] = [
  "10.73% 88.68% 38.43% 2.02%",
  "9.52% 80.45% 37.21% 11.43%",
  "10.73% 71.6% 38.42% 20.46%",
  "10.73% 63.02% 38.43% 29.4%",
  "10.73% 53.55% 38.43% 38.34%",
  "10.73% 45% 38.43% 47.18%",
  "10.73% 42.47% 38.43% 55.96%",
  "10.73% 33.91% 38.43% 59.52%",
  "10.73% 21.61% 38.43% 66.64%",
  "71.36% 95.03% 10.54% 2.18%",
  "71.36% 91.05% 10.54% 6.25%",
  "70.93% 86.67% 10.11% 10.24%",
  "71.36% 82.44% 10.54% 14.66%",
  "71.36% 78.12% 10.54% 19%",
  "70.93% 73.52% 10.11% 23.23%",
  "71.36% 69.78% 10.54% 27.82%",
  "70.93% 65.28% 10.11% 31.47%",
  "70.93% 60.94% 10.11% 35.97%",
  "71.36% 56.65% 10.54% 40.09%",
  "71.36% 50.36% 10.54% 46.81%",
  "71.36% 46.42% 10.54% 50.27%",
  "71.36% 42.25% 10.54% 54.73%",
  "71.36% 38.47% 10.54% 58.75%",
  "71.36% 34.29% 10.54% 62.82%",
  "71.36% 30.16% 10.54% 67.14%",
  "71.36% 25.75% 10.54% 71.23%",
  "70.93% 21.84% 10.11% 75.27%",
];

type LogoProps = {
  variant?: "blue" | "white";
  className?: string;
};

export default function Logo({ variant = "blue", className }: LogoProps) {
  const dir = variant === "blue" ? "/assets/nav" : "/assets/footer";
  return (
    <span className={`${styles.logo} ${className ?? ""}`} role="img" aria-label="AspenView Technology Partners">
      {PIECES.map((inset, i) => (
        <span key={i} className={styles.piece} style={{ inset }}>
          <img alt="" src={`${dir}/logo-v${i}.svg`} />
        </span>
      ))}
      {/* Vertical divider */}
      <span className={styles.piece} style={{ inset: "10.71% 16.82% 10.71% 83.18%" }}>
        <span className={styles.divider}>
          <img alt="" src={`${dir}/logo-v27.svg`} />
        </span>
      </span>
      {/* Aspen trees mark (clip-path group) */}
      <span className={styles.mark}>
        <span className={variant === "blue" ? styles.markInnerBlue : styles.markInnerWhite}>
          <img alt="" src={`${dir}/logo-group.svg`} />
        </span>
      </span>
    </span>
  );
}
