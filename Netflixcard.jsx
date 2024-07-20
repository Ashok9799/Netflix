
export const Cards = (props)=>{

         return(
               <>
                <li>                  
                <div>
                 <img 
                 
                 src={props.CurrEle.img_url} 
                 width="30%"
                  height="40%"/>
                  </div>  
                      <h2>{props.CurrEle.name}</h2>
                      <p>{props.CurrEle.rating}</p>
                      <p>{props.CurrEle.description}</p>
                      <p>{props.CurrEle.cast}</p>
                      <p>genre:{props.CurrEle.genre}</p>
                      <a href={props.CurrEle.watch_url} target="_blank">
                      <button>Watch Now</button>
                      </a>
                
                 </li>
  
               </>




         )




}
