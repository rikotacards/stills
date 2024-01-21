import { Dialog, Drawer, Paper } from "@mui/material";
import React from "react";
import { modalStyles } from "./DrawerProvider.styles";

interface DrawerContextProps {
  onOpen: () => void;
  onClose: () => void;
  setRenderComponent: (component: React.ReactNode) => void
}
export const DrawerContext = React.createContext({} as DrawerContextProps);
export const useDrawerContext = () => React.useContext(DrawerContext);

interface DrawerProviderProps {
  children: React.ReactNode;
  enablePopup?: boolean;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = (props) => {
  const { children, enablePopup } = props;
  const [open, setOpen] = React.useState(false);
  const [component, setC] = React.useState<React.ReactNode | null>();


  const setRenderComponent = (component: React.ReactNode) => {
    setC(component)
  }


  const onOpen = () => {

    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const context = {
    onOpen,
    onClose,
    setRenderComponent,

  };
  if (enablePopup) {
    return (
      <DrawerContext.Provider value={context}>

        {children}

        <Dialog open={open} onClose={onClose}>
          <Paper sx={modalStyles} elevation={0}>
            {component && component}
          </Paper>
        </Dialog>
      </DrawerContext.Provider>)
  }

  return (
    <DrawerContext.Provider value={context}>

      {children}

      <Drawer
        PaperProps={{ square: false, elevation: 0, style: { backgroundColor: "transparent", borderTopLeftRadius: 20, borderTopRightRadius: 20 } }}
        sx={{ overflow: 'hidden', borderRadius: 9, height: '50%' }} anchor={"bottom"} open={open} onClose={onClose}>
        <Paper sx={{ backdropFilter: 'blur(20px)', overflow: "hidden" }} elevation={3}>
          {component && component}
        </Paper>
      </Drawer>
    </DrawerContext.Provider>
  );
};
