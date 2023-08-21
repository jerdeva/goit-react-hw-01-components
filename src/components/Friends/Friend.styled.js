import styled from 'styled-components';


export const FriendsCatalog = styled.ul`
margin: 40px auto;
list-style: none;
`

export const FriendBio = styled.div`
display: flex;
`

export const FriendItem = styled.li`
border: 1px solid gray;
width: 250px;
margin-bottom: 8px;
padding: 8px;
box-shadow: 3px 3px 3px gray;
`


export const StatusActiv = styled.span`
margin: 20px 8px;
height: 12px;
width: 12px;
border-radius: 100%;
background-color: ${props => {
switch (props.status) {
    case true:
       return 'green' 
    case false:
        return 'red'
    default:
        return 'gray'
        }
    } 
}
`



