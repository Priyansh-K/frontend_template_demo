import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { JobProfile } from 'src/sections/job/job-profile';
import { JobProfileDetails } from 'src/sections/job/job-details';

const Page = () => (
    <>
        <Head>
            <title>
                Job | Synapse
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <div>
                        <Typography variant="h4">
                            Job Details
                        </Typography>
                    </div>
                    <div>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <JobProfile />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <JobProfileDetails />
                            </Grid>
                        </Grid>
                    </div>
                </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
