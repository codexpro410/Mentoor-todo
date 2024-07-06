import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLanguage } from "../Components/reduxComponents/TodoSlice";
import { transFrom } from "@mongez/localization";
import translations from "../config/localization";
import { RootState } from "../Components/reduxComponents/store";

export default function Navbar() {
  const {currentLanguage} = useSelector((state : RootState) => state.todo)
  const dispatch = useDispatch();
  const handleToggleLanguage = () => {
    dispatch(toggleLanguage());
  };
  return (
    <div className="flex justify-center flex-col">
        <h1 className='uppercase  text-center'>{transFrom(`${currentLanguage}`, translations.todolist)}</h1>
    <div className="flex justify-center gap-5">
    <Link to="/">{transFrom(`${currentLanguage}`, translations.Redux)}</Link>
    <Link to="/mongez">{transFrom(`${currentLanguage}`, translations.mongez)}</Link>
    <Link to="/normal">{transFrom(`${currentLanguage}`, translations.native)}</Link>
    </div>
    <button onClick={handleToggleLanguage}>{transFrom(`${currentLanguage}`, translations.switchLanguage)}</button> 
    </div>
  )
}
