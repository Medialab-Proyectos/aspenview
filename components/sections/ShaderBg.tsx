"use client";

import { ShaderFill, type Shader } from "@figma/expressive-components";
import {
  setup,
  render,
  manifest,
} from "@/lib/custom-effects/CodeComponentId_8ce92017e53431a2f04b3574f4ba7c98f6f55f1e_625";

// "Moving gradient" shader exported from Figma (used by hero + CTA sections) — params verbatim.
const shader: Shader = {
  setup,
  render,
  params: {
    intensity: 0,
    gradient: {
      stops: [
        { position: 0, color: { r: 0, g: 0.545098066329956, b: 0.7882353067398071, a: 1 } },
        { position: 0.5, color: { r: 0.0470588244497776, g: 0.10196078568696976, b: 0.1568627506494522, a: 1 } },
        { position: 1, color: { r: 0.0470588244497776, g: 0.10196078568696976, b: 0.1568627506494522, a: 1 } },
      ],
    },
    gradientBalance: 0,
    material: 0,
    morphSpeed: 1,
    detail: 0.22999998927116394,
    twist: 1.2200000286102295,
    zoom: 31,
    gradientMethod: 0,
    warp: 0.8100000023841858,
    rotationSpeed: 6,
  },
  manifest,
};

export default function ShaderBg({ className }: { className?: string }) {
  return <ShaderFill className={className} shader={shader} />;
}
