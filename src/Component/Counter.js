
import { useSelector,useDispatch} from 'react-redux'

const Counter =()=>{
    const State =useSelector((s)=>s.val);
    const Dispatch=useDispatch();
    const Increase=()=>{ console.log('send')
        Dispatch({type:'addtion',payload:1})
    }
    const Decrease=()=>{
        Dispatch({type:'subtraction',payload:-1})
    }
return(
    <>
    <div>
        <h1>this Counter</h1>
        <p>this value Counter :{State}</p>
        <button onClick={()=>{Increase()}}>increase</button>
        <button onClick={()=>{Decrease()}}>decrease</button>


    </div>
    
    </>
)

}

export default Counter; 

