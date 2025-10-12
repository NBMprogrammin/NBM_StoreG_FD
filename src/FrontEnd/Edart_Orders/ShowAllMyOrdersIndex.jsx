import UserForOllOrdersForZeboune from "./UserForOllOrdersForZeboune";
import BssShowAllMyOrderZeboune from "./BssShowAllMyOrderZeboune";
import Header from "../layoute/Hedaer";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
const token = Cookies.get("token");

export default function ShowAllMyOrdersIndex() {
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

useEffect(() => {
        const checkAuthentication = () => {
          const token = Cookies.get("token");
          if (!token) {
            // إعادة التوجيه بدون إعادة تحميل
            navigate("/home");
            return;
          }
        };
        checkAuthentication();
      }, [navigate === "My-Orders", ProfileSnageNow]);
      
      return (
        <div className="stlefirstdivcontrolinpage">
          <Header typeactive={"Edartorders"} />
          {ProfileSnageNow.TypProf == "user"
            ? <UserForOllOrdersForZeboune />
            : "" ||
              ProfileSnageNow.TypProf == "bss" ||
              ProfileSnageNow.TypProf == "teweve"
            ? <BssShowAllMyOrderZeboune />
            : ""}
        </div>
      );
}
