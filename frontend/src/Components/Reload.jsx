import {Placeholder, Loader} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
function Reload(){
    return(
        <>
        <div className='flex justify-center'>
       
   
         <Loader   content="loading..."    />
  
        </div>

        </>
    )
}
export default Reload;