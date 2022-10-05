import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import bgforum from "../../../../assets/images/worldfoof.png";

const Forums = () => {
const [searchData,setSearchData]= useState(['Türkiye','Switzerland','Germany','France','U.S.A','England','Spain']);
const [show, setShow] = useState([]);
const [isShow, setIsShow] = useState(false);
const [city, setCity] = useState(['gaziantep','hatay','istanbul']);
const [foodType, setFoodType] = useState(['kebab','taco','soup']);
const [search, setSearch] = useState('');
useEffect(()=>{
  if(search.trim()!== ''){
    setIsShow(true);
  }else{
    setIsShow(false);
  }
},[search])
const handleChange = (e)=>{
  setSearch(e.target.value);
  setShow(searchData.filter((item)=>{
    return item.toLowerCase().trim().includes(search)
  }))
}
const handleSubmit= (e)=>{
e.preventDefault();
}
const handleClick = (e)=>{
  setSearch(e.target.innerText);
}


  return (
    <>
      <section
        className="forum-search"
        style={{ backgroundImage: `url(${bgforum})` }}
      >
        <div className="search-bar container d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} action="" className="d-flex align-items-center p-3 bg-dark rounded rounded-pill">
            <div className="countries mx-3">
              <input type="text" placeholder="Countries" onChange={handleChange} value={search} className="form-control" />
              {isShow && 
              <div className="country-search-zone" onMouseLeave={()=>{setIsShow(false)}}>
                <ul>
                {
                  show.map((item,index)=>(
                    <li key={index}> <Link onClick={handleClick} >{item}</Link></li>
                  ))
                }
              </ul>
              </div>

              }
            </div>
            <div className="city mx-3">
              <select name="" className="form-control" id="">
                {
                  city.map((item,index)=>(
                    <option key={index}>{item}</option>
                  ))
                }
              </select>
            </div>
            <div className="food-type mx-3">
              <select name="food" className="p-2 bg-danger" id="">
              {
                  foodType.map((item,index)=>(
                    <option key={index}>{item}</option>
                  ))
                }
              </select>
            </div>
            <button type="submmit" className="btn btn-outline-warning mx-3">
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Forums;
