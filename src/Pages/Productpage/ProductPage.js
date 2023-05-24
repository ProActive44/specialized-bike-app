import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { handleGetData} from '../Redux/action';
export default function ProductPage() {
  const data = useSelector((state)=>state.Data);
const dispatch = useDispatch();
React.useEffect(()=>{
  dispatch(handleGetData);

},[dispatch]);


  return (
   <div>
     <h2 >ProductPage</h2>
      <div className = "data_cont" >
        {/* map the below div against your coffee data */}
        {data.map((el)=>{
          return  <div className = "item" key={el.id}>
          <img className = "image" alt = "img" width = "70%" src={el.image} />
          <div className = "name"> {el.name}</div>
          <div className = "price"> {el.price}</div>
        </div>
        })}
       
    </div>
   </div>
   
  )
}