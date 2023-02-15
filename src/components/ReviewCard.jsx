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
import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import {Link, useParams} from 'react-router-dom'


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

const ReviewCard = ({reviews, setReviews}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState('title')
    const [order, setOrder] = useState('DESC')
    const {category} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getReviews(category, sortBy, order).then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [category, sortBy, order])

    if (isLoading) {
        return <p>Loading reviews ...</p>
    } else 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className='app-bar' >
          <Typography variant="h6" color="inherit" noWrap>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/dexterity'>Dexterity</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/hidden-roles'>Hidden Roles</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/strategy'>Strategy</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/deck-building'>Deck Building</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/engine-building'>Engine Building</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/push-your-luck'>Push Your Luck</Link></Button>
            <Button className='nav-button' variant='contained'><Link className='link-text' to='/categories/roll-and-write'>Roll & Write</Link></Button>
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
              Northcoders Board Game Reviews!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Board games played & reviewed, so you don't have to.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Button variant="contained" onClick={() => setSortBy('designer')}>Designer</Button>
              <Button variant="contained" onClick={() => setSortBy('owner')}>Owner</Button>
              <Button variant="contained" onClick={() => setSortBy('created_at')}>Created At</Button>
              <Button variant="contained" onClick={() => setSortBy('votes')}>Votes</Button>
              <Button variant="contained" onClick={() => setSortBy('title')}>Title</Button>
            </Stack>
            <Stack
            sx={{pt: 4}}
            direction="row"
            spacing={2}
            justifyContent="center">
              <Button variant="contained" onClick={() => setOrder('ASC')}>ASC</Button>
              <Button variant="contained" onClick={() => setOrder('DESC')}>DESC</Button>

            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {reviews.map((review) => (
              <Grid item key={review.review_id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
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
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          GitHub: https://github.com/CJOROURKE96 
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default ReviewCard
