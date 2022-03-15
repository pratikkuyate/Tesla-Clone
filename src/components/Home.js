import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest cost solar panel in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar roof cost less than a new roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                
            />

        </Container>

    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`