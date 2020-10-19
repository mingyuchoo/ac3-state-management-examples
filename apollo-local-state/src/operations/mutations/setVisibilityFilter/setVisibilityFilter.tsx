import { VisibilityFilter } from "../../../models/VisibilityFilter";
import { ReactiveVar } from "@apollo/client";

export default function (visibilityFilterVar: ReactiveVar<VisibilityFilter>) {
  return (filter: VisibilityFilter) => {
    visibilityFilterVar(filter);
  };
}
