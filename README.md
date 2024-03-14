# V-FASH



add this in header.js
    const [theme,settheme]=useState("Light");
  useEffect(()=>{
    if(theme=="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");

    }
  },[theme]);

  const handlethemeSwith=()=>{
    settheme(theme=="dark"?"Light":"dark");
  }
