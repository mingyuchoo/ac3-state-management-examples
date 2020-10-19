import React from "react";
import PropTypes from "prop-types";

import { VisibilityFilter } from "../models/VisibilityFilter";
import Footer from "./Footer";

import TodoListContainer from "../containers/TodoListContainer";

interface MainSectionProps {
  activeVisibilityFilter: VisibilityFilter;
  todosCount: number;
  completedCount: number;
  actions: any;
}

/**
 * This is a view component. It doesn't define anything that
 * is responsible for querying or mutating, it just relies
 * on it from the upper layer component (namely, actions)
 */

const MainSection: React.FC<MainSectionProps> = ({
  activeVisibilityFilter,
  todosCount,
  completedCount,
  actions,
}: MainSectionProps): React.ReactElement => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input className="toggle-all" type="checkbox" checked={completedCount === todosCount} readOnly />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <TodoListContainer />
    {!!todosCount && (
      <Footer
        activeVisibilityFilter={activeVisibilityFilter}
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompletedTodos}
        setVisibilityFilter={actions.setVisibilityFilter}
      />
    )}
  </section>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default MainSection;
