import React from 'react'

import TestImage from '../../images/test.jpg'

import { Wrapper, Title , Image , Text } from './Content.styles'

const Content = () => (
    <Wrapper>
       <Title/>
        <Image src={TestImage}/>
        

    </Wrapper>
)

export default Content