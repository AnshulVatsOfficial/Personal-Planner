import CSS from'./style.css';
import {useState} from 'react';
import BgVideo from './todolistbgvideo.mp4';

function Home(){

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItems(){
        if(!input){
            
        }
        else{
            setItems([...items, input]);
            setInput("");
        }
    }

    function deleteItem(idx){
        const remainingItems = items.filter((element, index)=>{         
            return idx != index;
        });
        setItems(remainingItems);
    }

    function deteleAllItems(){
        alert("Do you really want to drop all your plans?");
        setItems([]);
    }

    return(
        <div className="main_div">
            <video src={BgVideo} autoPlay loop muted/>
            <div className="overlay">
            <div className="container my_container">
                <div className="row main_container">
                    <div className="title mt-5">
                        <h1>Personal Planner</h1>
                    </div>

                    <div className="items mt-5">
                        <input className="my-3 px-3 shadow" type="text" placeholder="What's next !" value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button className="add_plan shadow" onClick={addItems}>Add Now &nbsp;<i className="fa-solid fa-rocket add_plan_icon"></i></button>
                    </div>

                    <div className="show_items mt-3 mx-3">
                        {//a simple BLOCK as we use in Java
                            items.map((element, index)=>{
                                return(
                                    <div className="my_item mt-3" key={index}>
                                        <h5 className="mx-3 my-0">{index+1}. {element}</h5>
                                        <i className="fa-solid fa-trash-can px-3 py-2" onClick={()=>deleteItem(index)}></i>
                                    </div>
                                );
                            })
                        } 
                    </div>

                    <div className="items mt-3">
                        <button className="add_plan shadow mb-5" onClick={deteleAllItems}>Delete All &nbsp;<i class="fa-solid fa-trash-arrow-up delete_all_icon"></i></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;