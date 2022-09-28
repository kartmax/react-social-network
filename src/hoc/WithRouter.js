import {
   // useLocation,
   // useNavigate,
   useParams,
} from "react-router-dom";


export const WithRouterHOC = (Component) => {
   const ComponentWithRouterProp = (props) => {
      //  let location = useLocation();
      //  let navigate = useNavigate();
       let params = useParams();
       return (
           <Component
               {...props}
               // router={{ location, navigate, params }}
               router={{ params }}
           />
       );
   }
   return ComponentWithRouterProp;
}