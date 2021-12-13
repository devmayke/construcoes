import styled from 'styled-components'



export default styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100px;
  height:100px;
  border:2px solid ${props=>props.cor};
  border-radius:50%; 
  background-image:url${props=>props.icon}
  `


