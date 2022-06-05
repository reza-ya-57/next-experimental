import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// To use RTL through the application and the provider is in index.tsx
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
