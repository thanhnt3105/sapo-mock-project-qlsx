import React from "react";
import PropTypes from "prop-types";
import { Divider, List, Typography, useTheme } from "@mui/material";
import NavCollapse from "./NavCollapse";
import NavItem from "./NavItem";

const NavGroup = ({ item }) => {
  const theme = useTheme();
  const itemList = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        );
    }
  });
  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant='caption'
              sx={{ ...theme.typography.menuCaption }}
              display='block'
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant='caption'
                  sx={{ ...theme.typography.menuCaption }}
                  display='block'
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {itemList}
      </List>
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;