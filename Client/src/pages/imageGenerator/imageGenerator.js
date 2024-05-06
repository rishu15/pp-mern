import Navbar from '../../common/navbar/navbar'
import {useState} from "react"
const ImageGenerator = () => {

    const [searchText,setSearchText] = useState("");
    const textChanged = (val) =>{
        setSearchText(val);
    }
    const getData =async()=>{
        const req = fetch('http://localhost:1400/api/image-generator',{
            method:"POST",
        });
        const data = await req.json();
        console.log(data);
    }
    return (
        <div>
            <Navbar/>
            <div className="image-generator-main-container">
                <div className="image-container">
                    <img src='https://img.freepik.com/premium-psd/image-3d-graphic-illustration_689261-193.jpg?size=626&ext=jpg&ga=GA1.1.482985772.1714508851&semt=ais'></img>
                </div>
                <div className="search-container">
                    
                    <input onChange={(e)=>{textChanged(e.target.value)}} />
                    <button>Generate</button>
                    <p>{searchText}</p>
                    </div>

                
            </div>
        </div>   
    );
}

export default ImageGenerator;