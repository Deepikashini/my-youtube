import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_AUTO_SUGGESTIONS } from '../utils/constants';
import { Link } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector;
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[querySearch]) {
        setSuggestions(searchCache[querySearch]);
      }
      else {
        getAutoSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [querySearch]);

  const getAutoSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTO_SUGGESTIONS + querySearch);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [querySearch]: json[1],
    }))
    
  }

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  

  return (
    <div className="sticky top-0 grid grid-flow-col my-3 p-2 w-full bg-white">
      <div className="flex col-span-1">
        
      <img 
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-2 cursor-pointer" alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
         
            <img className="h-6 mt-1" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            /> 
         
      </div>

      <div className="col-span-10 px-10">
        <input 
        className="w-1/2 border border-gray-300 p-2 rounded-l-full"  
        type="text"
        value={querySearch}
        onChange={(e) => setQuerySearch(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}/>

        <button className=" border border-gray-300 p-2 rounded-r-full bg-gray-200">
          🔍
        </button >    
        {showSuggestions && 
        <div className="absolute bg-white px-2 w-[29rem] rounded-lg shadow-lg border border-gray-100">
          <ul>
            {suggestions.map(s => <li key={s} className="py-2 px-3 hover:bg-gray-200">🔍 {s}</li>)}
          </ul>
        </div>}
      </div>  
      
      <div className="col-span-1">
        <img className="h-8" alt="user-account" src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
        />
      </div>

    </div>
  )
}

export default Head;
