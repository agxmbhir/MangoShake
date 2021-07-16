import React from 'react';

import {Wrapper , Content , DonateButton, ProgressWrapper, Progress} from './Donation.styles'

const Donation = () => (
 <Wrapper>
     <Content>
         <DonateButton>Contribute</DonateButton>
        < ProgressWrapper/>
        <Progress/>
     </Content>
</Wrapper>    
)

export default Donation;
