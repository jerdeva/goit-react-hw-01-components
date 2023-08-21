import styled from 'styled-components'

export const AreaSetting = styled.section`
width: 251px;
margin: 0 auto;
;
`

export const StatisticsName = styled.h2`
text-align: center;
font-weight: 600;
text-transform: uppercase;
color: gray;
font-size: 16px;
border: 0.5px solid black;
margin: 0;
padding: 20px;
`

export const List = styled.ul`
list-style: none;
display: flex;
padding-left: 0;
margin: 0;
`

export const ListItem = styled.li`
padding: 8px;
border: 0.5px solid black;
margin: 0;
text-align: center;
background-color: ${getRandomHexColor}
`

export const ListItemFormat = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}