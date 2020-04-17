import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
border: 1px solid black;
height: 140px;
display: flex;
margin: 10px;
padding: 10px;
`
const P = styled.p`
font-size: 12px;
`
const Image = styled.img`
margin-right: 8px;
width: 140px;
object-fit: cover;
`

function IdCard(props){
return(
    <Section>
        <Image src={props.image} alt={props.firstName}></Image>
        <div>
            <P><strong>First name:</strong> {props.firstName}</P>
            <P><strong>Last name:</strong>  {props.lastName}</P>
            <P><strong>Gender:</strong>  {props.gender}</P>
            <P><strong>Height:</strong>  {props.height}</P>
            <P><strong>Birth:</strong>  {props.birth}</P>
        </div>
    </Section>
)
}

export default IdCard