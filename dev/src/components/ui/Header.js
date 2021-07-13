import React, { useState, useEffect } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, value) => {
    setTab(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && tab !== 0) {
      setTab(0);
    } else if (window.location.pathname === "/services" && tab !== 1) {
      setTab(1);
    } else if (window.location.pathname === "/revolution" && tab !== 2) {
      setTab(2);
    } else if (window.location.pathname === "/about" && tab !== 3) {
      setTab(3);
    } else if (window.location.pathname === "/contact" && tab !== 4) {
      setTab(4);
    } else if (window.location.pathname === "/estimate" && tab !== 5) {
      setTab(5);
    }
  }, [tab]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setTab(0)}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>

            <Tabs
              value={tab}
              onChange={handleTabChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="The Revolution"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About us"
                component={Link}
                to="/about"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      hello
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
