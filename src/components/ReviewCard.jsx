import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const ReviewCard = ({review}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className='app-bar' >
          <Typography variant="h6" color="inherit" noWrap>
            <Button variant='contained'>PLACEHOLDER</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Northcoders Hottest Board Game Reviews!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Northcoders board games, played & reviewed, so you don't have to.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Sort</Button>
              <Button variant="outlined">Order</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={review.review_img_url}
                    alt={review.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {review.title}
                    </Typography>
                    <Typography>
                      Votes: {review.votes}
                      <br></br>
                      Comment Count: {review.comment_count}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"> <Link to={`/reviews/${review.review_id}`}>View</Link> </Button>
                  </CardActions>
                </Card>
              </Grid> 
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Get in Contact
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          GitHub: 
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default ReviewCard