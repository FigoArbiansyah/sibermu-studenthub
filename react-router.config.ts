import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default for Vercel deployment
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;

