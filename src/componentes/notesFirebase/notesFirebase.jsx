import { getFirestore } from "../../firebase/index,js";
import { useEffect, useState } from "react";

const NotesFirebase = () =>{
    const [datosFire, setDatosFire] = useState([])
    const [isEmptyCategory, setIsEmptyCategory] = useState(false)


    useEffect(
        ()=>{
            const db = getFirestore()
            const usersCollection = db.collection("users")
            usersCollection.get().then(
              (querySnapshot)=>{
                if(querySnapshot.size === 0){
                  setIsEmptyCategory(true)
                }
                setDatosFire(querySnapshot.docs.map((doc)=> doc.data()))
              }).catch((er) => console.log("error: ", er))
        },[])


    return (
        <div className="verData">
        <p>Aca van a estar las nota desde firebase</p>

        {
            isEmptyCategory ?( <p> todavia no hay notas cargadas</p>):
            (
            datosFire.map((e)=>(
                <h2>datosFire.id</h2>
            ))
            )
        }
        </div>
    );
}   

export default NotesFirebase;