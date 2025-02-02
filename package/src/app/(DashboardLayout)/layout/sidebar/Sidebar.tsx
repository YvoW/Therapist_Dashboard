import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Upgrade";
import { useTheme } from "@mui/material/styles";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const sidebarWidth = 270;

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#eff2f7",
      borderRadius: "15px",
    },
  };

  if (lgUp) {
    return (
      <Box sx={{ width: sidebarWidth, flexShrink: 0 }}>
        {/* Sidebar for desktop */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
              ...scrollbarStyles,
            },
          }}
        >
          {/* Sidebar Box */}
          <Box sx={{ height: "100%", padding: 2 }}>
            <img src="/images/logos/dark-logo.svg" alt="Logo" width="200" />
            <SidebarItems />
            <Upgrade />
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          boxShadow: theme.shadows[8],
          ...scrollbarStyles,
        },
      }}
    >
      {/* Sidebar Box */}
      <Box sx={{ padding: 2 }}>
        <img src="/images/logos/dark-logo.svg" alt="Logo" width="200" />
        <SidebarItems />
        <Upgrade />
      </Box>
    </Drawer>
  );
};

export default MSidebar;
