import React, {useState} from "react";
import Star from "./Star";

const Raiting = (props: any) => {
    const [activeStar, setActiveStar] = useState(0);
    return (
        <div style={{display: 'flex', padding: '100px'}}>
            <Star setACtiveStar = {setActiveStar} value = {1} isActive ={activeStar >= 1} />
            <Star setACtiveStar = {setActiveStar} value = {2} isActive ={activeStar >= 2} />
            <Star setACtiveStar = {setActiveStar} value = {3} isActive ={activeStar >= 3} />
            <Star setACtiveStar = {setActiveStar} value = {4} isActive ={activeStar >= 4} />
            <Star setACtiveStar = {setActiveStar} value = {5} isActive ={activeStar >= 5} />

        </div>
    )
}
export default Raiting;