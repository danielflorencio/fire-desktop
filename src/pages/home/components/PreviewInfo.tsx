import { useState } from "react";
import  { useNavigate}  from 'react-router-dom';
export default function PreviewInfo(){
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [monthPreview, setMonthPreview] = useState('');

    async function fetchUserPreview(){
      console.log('fetchUserPreview being called.');
        (async () => {
          // const response = await fetch('http://localhost:8080/getUserMonthPreview', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({ 
            const response = await fetch(`http://localhost:8080/getUserMonthPreview?userId=${userId}`);
          //     userId: userId,
          //   })
          // })
          console.log('response being received in the browser: ', response)
          const data = await response.json() 
          console.log('data being received: ', data)
          setMonthPreview(data)
          // if(data.user){
          //   setMonthPreview(data.monthPreview)
          //   // await navigate('/user-page') 
          // } else{
            
          // }
      })();
    }

    fetchUserPreview();
    return(
        <p>
            U$ {monthPreview}
        </p>
    )  
}