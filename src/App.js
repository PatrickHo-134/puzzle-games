import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import image from "./assets/img/profile-bg.jpg";

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
              // color="white"
              style={{ color: "white" }}
              gutterBottom
            >
              Play Time!!!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              // color="textSecondary"
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
          <Grid container spacing={4}>
            {/* tictac toe card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("./assets/img/tictactoe.jpg")}
                  title="Tictactoe"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tic tac toe
                  </Typography>
                  <Typography>
                    Place three marks in a horizontal, vertical, or diagonal row
                    to win.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.cardPlayButton}>Play</Button>
                  <Button className={classes.cardRules}>Rules</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Sudoku card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("./assets/img/sudoku.jpg")}
                  title="Sudoku"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sudoku
                  </Typography>
                  <Typography>
                    Fill a 9×9 grid with digits so that each column, each row,
                    and each of the nine 3×3 subgrids that compose the grid
                    contain all of the digits from 1 to 9
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.cardPlayButton}>Play</Button>
                  <Button className={classes.cardRules}>Rules</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Crossword card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("./assets/img/crossword.jpg")}
                  title="Crossword"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crossword
                  </Typography>
                  <Typography>
                    Fill the white squares with letters, forming words or
                    phrases, by solving clues, which lead to the answers
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.cardPlayButton}>Play</Button>
                  <Button
                    className={classes.cardRules}
                    size="small"
                    color="primary"
                  >
                    Rules
                  </Button>
                </CardActions>
              </Card>
            </Grid>
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
