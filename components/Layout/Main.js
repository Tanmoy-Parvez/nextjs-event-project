import Header from './Header/Header';

const Main = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Main;