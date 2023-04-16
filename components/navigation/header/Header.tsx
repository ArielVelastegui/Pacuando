import Link from "next/link";
import Icon from "../../assets/svg/Icon";
import { getTokenFromCookie } from "../../../lib/helpers/axios.helper.";
import User_icon from "../../assets/svg/User_icon";
import Heart_icon from "../../assets/svg/Heart_icon";
import { useUserMe } from "../../../lib/services/user.services";

const Header = () => {

  const { data,} = useUserMe()
  
  if (getTokenFromCookie()) {
    
    
    const email = data?.results.email
    return(
      <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm m-0">
      <Link href='/'>
      <Icon />
      </Link>
      
      <div className="flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm gap-4">
       <Link className="text-app-blue app-texto-2" href="/create-publication">+ Crear publicacion</Link>
       <Link className="app-texto-2 flex gap-1" href="/profile">
        <Heart_icon />
        Mis votos
       </Link>
       <Link className="app-texto-2 flex gap-1 text-fuchsia-100 font-thin items-center" href="/profile">
        <span className="bg-white rounded-full p-1">

        <User_icon />
        </span>

        {email}
       </Link>
       <button className="w-fit h-fit p-2" name="op" id="opt" >
        []
       </button>

      </div>
    </div>
    )
  } else {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm m-0">
      <Link href='/'>
      <Icon />
      </Link>

      <div className="flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm gap-4">
       <Link className="text-app-blue app-texto-2" href="/create-publication">+ Crear publicacion</Link>
       <Link className="app-texto-2" href="/login">Log in</Link>
       <Link className="app-texto-2" href="/sign-up">Sign up</Link>
      </div>
    </div>
  );}
};

export default Header;
