import NaviBar from "../Navbar/nav";
import { BackgroundDiv } from "../../styleComponant/styleComp";
const Product = () => {
    return (
        <>
            <NaviBar/>  
            <BackgroundDiv style={{height: "100vh"}}>
                <div style={{paddingTop:"3.5rem"}}>Here is Product Page</div>
            </BackgroundDiv>
        </>
    )
}

export default Product;