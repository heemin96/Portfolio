import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div >
      <G.GridContainer>
        <G.GridItemNav>
          <G.NavLeft>
            Name Here/PRODUCT DESIGNER          
            </G.NavLeft>

          <G.NavRight>
            Name Here/PRODUCT DESIGNER
            </G.NavRight>
        </G.GridItemNav>
        
        <G.GridItemLeft>
          LeftSide
          <div style={{fontSize:'10px', display:'grid'}}>
          ㄴㅇ럴ㄹ남ㅇ롬ㄴㄹ어ㅏㅁ놀엄ㄴ어라ㅗㅓ남ㅇㄹㄴㅇ모러ㅏㄴ모ㅓㅏㄻ노ㅓㅏㅗㄴㅇㅁ롤머ㅏ논ㄹ몬ㅇ몬ㄹㅇ
          </div>
        </G.GridItemLeft>
          
        <G.GridItemCenter>
          Center
          ㄴㅇㄹㄴ오런로ㅓ나ㅗㄹㄹ오노ㅓ나오러날오나완ㄹ왕놔아ㅗㄹ
        </G.GridItemCenter>
        
        <G.GridItemRight>
          RightSid
          ㄴㅇ런아ㅣ러나ㅣ어나이ㅓ릴어ㅣ널이너리ㅓㄴㅇ리널이ㅓㄴㅇ리ㅓ니ㅓㄹ니어리어
        </G.GridItemRight>
        
        <G.GridItemBottom>
          Bottom
        </G.GridItemBottom>

      </G.GridContainer>

    </div>
  );
}

const G ={
 GridContainer:styled.div`
 width:100vw;
 height:100vh;
 margin: 40px;

  display:grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  grid-template-areas:
   "header header header"
   "sidebar content sidebar2"
   "footer footer footer";


  @media (max-width: 768px)  {
    grid-template-columns: auto auto;
      grid-template-areas:
      "header   header"
      "sidebar  content"
      "sidebar2 sidebar2"
      "footer   footer";
    }
 `,

 GridItemNav:styled.div`
  grid-area: header;
  color: black;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%; 
  grid-template-columns: 1fr 1fr;
  display:grid;
  background-color:gray;
 
 `,

 NavLeft:styled.div`
  
  display:grid;

 `,

 NavRight:styled.div`
  
  display:grid;
  justify-self: end;
  
 `,

 GridItemLeft:styled.div`
 grid-area: sidebar;
 background-color: #444;
 color: #fff;
 border-radius: 5px;
 padding: 10px;
 font-size: 150%; 
 
 `,

 GridItemCenter:styled.div`
 grid-area: content;
 background-color: #444;
 color: #fff;
 border-radius: 5px;
 padding: 10px;
 font-size: 150%; 
 `,

 GridItemRight:styled.div`
 grid-area: sidebar2;
 background-color: #444;
 color: #fff;
 border-radius: 5px;
 padding: 10px;
 font-size: 150%; 
 `,

 GridItemBottom:styled.div`
 grid-area: footer;
 background-color: #444;
 color: #fff;
 border-radius: 5px;
 padding: 10px;
 font-size: 150%; 
 `

}

export default App;
