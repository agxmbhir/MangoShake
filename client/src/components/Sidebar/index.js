import React from 'react'

import Donation from './Donation'

import {Wrapper , DonationDiv , Withdraw} from './sidebar.styles'


const SideBar = () => (
<Wrapper>
  <DonationDiv>
           <Donation/>
  </DonationDiv>
  </Wrapper>
)

export default SideBar