import React from 'react'
import styled from "styled-components"
import Section from "./section"
function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online For Touchless Delivery "
            backgroundImg="Custom Order"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-s.jpg"
            />
            <Section 
             title="Model Y"
             description="Order Online For Touchless Delivery "
             backgroundImg="Custom Order"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
             backgroundImg="model-Y.jpg" />
            <Section 
             title="Model 3"
             description="Order Online For Touchless Delivery "
             backgroundImg="Custom Order"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
             backgroundImg="model-3.jpg"/>
            <Section
             title="Model X"
             description="Order Online For Touchless Delivery "
             backgroundImg="Custom Order"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
             backgroundImg="model-X.jpg" />
            <Section
             title="Lowers Cost Solar Penels in America "
             description="Money-back guarantee "
           
             leftBtnText="Order Now"
             rightBtnText="Learn more"
             backgroundImg="solar-panel.jpg" />
                <Section
             title="Solar For New Roofs "
             description="Solar Roof Costs Less Than New Roof Plus Solar Panel "
             leftBtnText="Order Now "
             rightBtnText="Learn more"
             backgroundImg="solar-roof.jpg" />
                <Section
             title="Accessories"
             description=""
             backgroundImg="accessories"
             leftBtnText="Shop Now"
            
             backgroundImg="accessories.jpg" />
        </Container>  
    )
}

export default Home
    const Container = styled.div`
     height: 100vh;
    `