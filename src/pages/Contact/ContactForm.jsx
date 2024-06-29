import {
    Email as EmailIcon,
    Language as LanguageIcon,
    LocationOn as LocationOnIcon,
    Phone as PhoneIcon
} from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

export const ContactForm = () => {
  return (
    <Container>
      <Grid pt={10} container justifyContent='center'>
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ padding: 4 }}>
            <Typography variant='h4' gutterBottom>
              Get in touch
            </Typography>
            <form method='POST' id='contactForm' className='contactForm'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Name'
                    name='name'
                    id='name'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Email'
                    name='email'
                    id='email'
                    type='email'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Subject'
                    name='subject'
                    id='subject'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Message'
                    name='message'
                    id='message'
                    multiline
                    rows={7}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' color='primary' type='submit'>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ padding: 4, backgroundColor: "primary.main", color: "white" }}
        >
          <Paper
            elevation={0}
            sx={{ padding: 4, backgroundColor: "primary.main", color: "white" }}
          >
            <Typography variant='h4' gutterBottom>
              Contact us
            </Typography>
            <Box display='flex' alignItems='center' mb={2}>
              <LocationOnIcon />
              <Box ml={2}>
                <Typography>
                  <strong>Address:</strong> No 212/2 Shiva Nilaya, Ground Floor,
                  7th Cross, 7th Main, Poornaprajna Layout, Uttarahalli,,
                  Bangalore, Bangalore, Karnataka, India, 560061
                </Typography>
              </Box>
            </Box>
            <Box display='flex' alignItems='center' mb={2}>
              <PhoneIcon />
              <Box ml={2}>
                <Typography>
                  <strong>Phone:</strong>{" "}
                  <a href='tel://919900176466' style={{ color: "white" }}>
                    + 91 99001 76466
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box display='flex' alignItems='center' mb={2}>
              <EmailIcon />
              <Box ml={2}>
                <Typography>
                  <strong>Email:</strong>{" "}
                  <a href='mailto:rsiddu@gmail.com' style={{ color: "white" }}>
                    rsiddu@gmail.com
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box display='flex' alignItems='center'>
              <LanguageIcon />
              <Box ml={2}>
                <Typography>
                  <strong>Website:</strong>{" "}
                  <a href='/' style={{ color: "white" }}>
                    www.lnvasuki.com
                  </a>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div
            id='map'
            className='map'
            style={{ height: "400px", width: "100%" }}
          >
            {/* Embed your map here */}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
