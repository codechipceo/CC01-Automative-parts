import {
  Box,
  Button,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Footer } from "../../components/Footer/Footer";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div>
      <HeaderTwo pageName={"Contact Us"} />
      <Box bgcolor={'whitesmoke'}>

      <ContactForm />
      </Box>

      <Footer />
    </div>
  );
};

const ContactUs = () => {
  return (
    <Paper>
      <Typography variant='h4' gutterBottom>
        Contact Us
      </Typography>
      <form noValidate>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              autoComplete='name'
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              name='message'
              label='Message'
              id='message'
              multiline
              rows={4}
            />
          </Grid2>
        </Grid2>
        <Button type='submit' fullWidth variant='contained' color='primary'>
          Send
        </Button>
      </form>
    </Paper>
  );
};

export default ContactUs;
