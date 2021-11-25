import React from 'react';
import { Button } from 'reactstrap';
import FA from 'react-fontawesome';
import { useHistory } from "react-router-dom";

export default function SidebarToggleButton({ isSidebarCollapsed, toggleSidebar }) {
  let history = useHistory();
  const chevronClassName = isSidebarCollapsed ? 'is-collapsed' : 'is-not-collapsed';
  const screenReaderLabel = isSidebarCollapsed ? 'Expand Sidebar Navigation' : 'Collapse Sidebar Navigation';
  return (
    <Button onClick={history.goBack} className={`m-r sidebar-toggle ${chevronClassName}`} aria-label={screenReaderLabel}>
      <FA name={'chevron-left'} />
    </Button>
  );
}
