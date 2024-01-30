import { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

import MultipleSelectCheckmarks from 'src/components/role-dropdown';

export const JobProfileDetails = () => {
  const [values, setValues] = useState({
    jobinfo: 'Dhangadi',
    location: 'Dhangadi',
    status: 'ongoing',
    driver_id: '1',
    conductor_id: '1',
    source: 'kathmandu',
    destination: 'dhangadi'

  });

  useEffect(() => {
    console.log(values);
  }, [values.status]);

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Job"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please add the job information"
                  label="Jobinfo"
                  name="jobinfo"
                  onChange={handleChange}
                  required
                  value={values.jobinfo}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  onChange={handleChange}
                  required
                  value={values.location}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Status"
                  name="status"
                  onChange={handleChange}
                  required
                  value={values.status}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Driver ID"
                  name="driverid"
                  onChange={handleChange}
                  type="number"
                  required
                  value={values.driver_id}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Conductor ID"
                  name="conductorid"
                  onChange={handleChange}
                  required
                  value={values.conductor_id}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Source"
                  name="source"
                  onChange={handleChange}
                  required
                  value={values.source}
                />

              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Destination"
                  name="destination"
                  onChange={handleChange}
                  required
                  value={values.destination}
                />

              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
