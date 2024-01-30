import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {



  jobTitle: 'Operation Himalayan Haul',
  Description: 'Operation Himalayan Express involves the transportation of a vital cargo from Dhangadi to Itahari. The mission focuses on delivering essential medical supplies, including vaccines, pharmaceuticals, and medical equipment, to support healthcare facilities in the Itahari region. The mission will prioritize efficient route planning, stringent security measures, and effective communication protocols to ensure the safe and timely delivery of the critical load.',

};

export const JobProfile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >

        <Typography
          gutterBottom
          variant="h5"
        >
          {user.jobTitle}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
          className='text-justify p-2'
        >
          {user.Description}
        </Typography>

      </Box>
    </CardContent>
    <Divider />
    {/* <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions> */}
  </Card>

);
