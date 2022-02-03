import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import { sidebarActions } from "../store/sidebar-slice";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../navigation";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebar.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);

  return (
    
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(sidebarActions.set({ sidebarShow: visible }));
      }}
    >
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch(sidebarActions.unflod({ sidebarUnfoldable: !unfoldable }))
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
