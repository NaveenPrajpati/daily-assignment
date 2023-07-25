import MainBody from "../components/MainBody";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";

function page() {
    return (
        <div className="w-[1440px] mx-auto">
            <Navbar/>
            <div className="flex">
                <SideNavbar/>
                <MainBody/>
            </div>
        </div>
    );
}

export default page;