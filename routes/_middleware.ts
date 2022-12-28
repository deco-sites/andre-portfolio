import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 427,
  site: "andre-portfolio",
  domains: ["andre-portfolio.deco.site"],
});