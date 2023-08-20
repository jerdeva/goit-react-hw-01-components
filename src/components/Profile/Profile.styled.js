import styled from 'styled-components'

export const Wrapper = styled.div`
width: 300px;
border-radius: 10%;
background-color:Linen ; 
margin: 40px auto;
`

export const UserCrdInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Avatar = styled.img`
width: 124px;
border-radius: 100px;
background-color:peru; 
margin: 20px 0 0;
`

export const UserNameParagrapher = styled.p`
font-size: 20px;
font-weight: 800;
margin: 12px 0 0;

`

export const TagParagrapher = styled.p`
font-weight: 300;
color: gray;
font-size: 16px;
margin: 12px 0 0;

`

export const LocationParagrapher = styled.p`
font-weight: 600;
color: gray;
margin: 12px 0;
`

export const StatisticList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
padding-left:0;
opacity: 20;
:first-child{border-bottom-left-radius :10%;
}
:last-child{border-bottom-right-radius:10%;
    width: 44px;
}
`

export const StatisticListItem = styled.li`
padding: 22px;
background-color: #DCDCDC	;
padding-bottom: 28px;
color: DimGray;
font-weight: 700;
border: 0.5px solid grey;
`

export const StatisticListItemInfo = styled.div`
color: black;
font-weight: 200;
display: flex;
justify-content: center;
`
