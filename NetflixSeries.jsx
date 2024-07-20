
 import seriesData from "../api/seriesApi.json";
import {Card} from "../components/Netflixcard"

 export const NetflixSeires= ()=> {

     return (
     <ul>
          {seriesData.map((CurrEle)=>(
           <Card key={CurrEle.id} CurrEle={CurrEle} />
      
       ))}
     </ul>
          
     );
};

