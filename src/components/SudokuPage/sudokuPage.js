import React from "react";
import AppBar from "@material-ui/core/AppBar";
import SportsEsports from "@material-ui/icons/SportsEsports";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import image from "../../assets/img/profile-bg.jpg";

// import Tictactoe from "./GamePage/tictactoe.js";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "100%",
    height: "300px",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardPlayButton: {
    background: "linear-gradient(45deg, #2F2FA2 30%, #2196F3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 30,
    padding: "0 30px",
  },
  cardRules: {
    background: "white",
    border: "1px solid #2F2FA2",
    borderRadius: 3,
    color: "#2F2FA2",
    height: 30,
    padding: "0 30px",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SportsEsports className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Puzzle page
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              style={{ color: "white" }}
              gutterBottom
            >
              Play Time!!!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ color: "white" }}
              backgroundColor="white"
              paragraph
            >
              Sharpen your brain with classic puzzles
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid>
            <h1>Coming Soon</h1>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          style={{ color: "#2F2FA2", fontWeight: "bold" }}
          component="p"
        >
          Made by Patrick Ho!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
