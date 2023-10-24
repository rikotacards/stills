import { Dialog, Drawer, Paper } from "@mui/material";
import React from "react";
import { modalStyles } from "./DrawerProvider.styles";

interface DrawerData {
  author?: string;
  postId?: string;
}
interface DrawerContextProps {
  onOpen: () => void;
  onClose: () => void;
  setComponent: (cName: string) => void;
  setData: (data: DrawerData) => void;
  drawerData: DrawerData;
  setRenderComponent: (arg: React.FC<{ postId: string, isModal?: boolean; }>) => void
}
export const DrawerContext = React.createContext({} as DrawerContextProps);
export const useDrawerContext = () => React.useContext(DrawerContext);

interface DrawerProviderProps {
  children: React.ReactNode;
  postId: string;
  enablePopup?: boolean;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = (props) => {
  const { children, postId, enablePopup } = props;
  const [open, setOpen] = React.useState(false);
  const [Render, setRender] = React.useState<React.FC<{ postId: string, isModal?: boolean; }> | null>(null);
  const [componentName, setComponentName] =
    React.useState<string>("linkEditForm");

  const [drawerData, setDrawerData] = React.useState({} as DrawerData);
  const setRenderComponent = (arg: React.FC<{ postId: string, isModal?: boolean }>) => {
    setRender(() => arg)
  }
  const setData = React.useCallback((data: DrawerData) => {
    setDrawerData((prev) => ({ ...prev, ...data }));
  }, []);

  const setComponent = React.useCallback((cName: string) => {
    setComponentName(cName);
  }, []);

  const onOpen = () => {
   
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => { }, [componentName]);

  const context = {
    onOpen,
    onClose,
    setComponent,
    setData,
    drawerData,
    setRenderComponent,

  };
  if (enablePopup) {
    return (
      <DrawerContext.Provider value={context}>

        {children}

        <Dialog open={open} onClose={onClose}>
          <Paper sx={modalStyles} elevation={3}>
            {Render && <Render postId={postId} />}
          </Paper>
        </Dialog>
      </DrawerContext.Provider>)
  }

  return (
    <DrawerContext.Provider value={context}>

      {children}

      <Drawer 
      PaperProps={{square:false, elevation: 0, style: { backgroundColor: "transparent", borderTopLeftRadius:20, borderTopRightRadius: 20 } }}
        sx={{ overflow: 'hidden', borderRadius: 9, height: '50%' }} anchor={"bottom"} open={open} onClose={onClose}>
        <Paper sx={{ backdropFilter: 'blur(20px)', overflow: "hidden" }} elevation={3}>
          {Render && <Render postId={postId} isModal={enablePopup} />}
        </Paper>
      </Drawer>
    </DrawerContext.Provider>
  );
};
