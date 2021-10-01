import React, { useEffect, useState } from 'react';

// material-ui
import { Card, Grid } from '@material-ui/core';

// project imports
import EarningCard from './EarningCard';
// import LienCard from './LienCard';
import UpDossierCard from './UpDossierCard';
import GarantCard from './GarantCard';

// ===========================|| DEFAULT DASHBOARD ||=========================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid>
            <Grid>
                {/* <LienCard /> */}
                <UpDossierCard />
                <EarningCard isLoading={isLoading} />
            </Grid>
            <Grid>
                <GarantCard />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
