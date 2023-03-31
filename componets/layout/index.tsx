import type {NextPage} from 'next'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ReactNode } from 'react';

type ILayoutProps = {
    children: ReactNode
}

const Layout:NextPage<ILayoutProps> = ({children}) =>{
    return(
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
    
};
export default Layout;