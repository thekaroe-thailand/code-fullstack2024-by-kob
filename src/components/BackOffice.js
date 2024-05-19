import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';

function BackOffice(props) {
    return <>
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                {props.children}
            </div>

            <Footer />
            <ControlSidebar />
        </div>
    </>
}

export default BackOffice;