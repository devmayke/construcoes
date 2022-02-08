import styled from 'styled-components'



export default styled.div`
  display:flex;
  margin: 25px;
  justify-content:center;
  align-items:center;
  width:80px;
  height:80px;
  border:1px solid rgba(255, 255, 255, 0.898);
  
  /* box-shadow: 0px 0px 8px 3px rgba(255,255,255,.4); */
  /* box-shadow: 0px 0px 16px 4px rgba(255, 165, 0, 0.631), inset 0px 0px 5px 2px rgba(200, 200, 200, 0.6); */
  border-radius:50%; 
  ${props=> props.item?"box-shadow: 0px 0px 16px 4px rgba(255, 165, 0, 0.631), inset 0px 0px 5px 2px rgba(200, 200, 200, 0.6);":''
  }
  
  background-image:url${props=>props.icon};
  color:white;
  &:hover{
    filter:drop-shadow(-0px 0px 5px  rgb(170, 170, 170)) drop-shadow(0px 0px 5px rgb(170, 170, 170));


  }

  `


