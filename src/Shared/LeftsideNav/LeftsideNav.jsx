import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-xl">All Category</h1>
            <h1 className="bg-[#E7E7E7] p-5 text-center text-xl font-semibold mt-3 rounded">National News</h1>
            {
                categories.map(category => <Link className="block" key={category.id}><p className="text-center py-5 text-xl font-semibold text-[#9F9F9F]">{category.name}</p></Link>)
            }
        </div>
    );
};

export default LeftsideNav;