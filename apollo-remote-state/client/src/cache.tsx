import { InMemoryCache, makeVar } from "@apollo/client";
import { VisibilityFilters, VisiblityFilter } from "./models/VisibilityFilter";

/**
 * Set initial values when we create cache variables.
 */
export const visibilityFilterVar = makeVar<VisiblityFilter>(VisibilityFilters.SHOW_ALL);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        visibilityFilter: {
          read() {
            return visibilityFilterVar();
          },
        },
      },
    },
  },
});
