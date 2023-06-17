//header
import Header from "./Components/Header/Header";

//страницы сайта
import NotesPage from "./Components/NotesPage/NotesPage";
import MainPage from "./Components/MainPage/MainPage";
import WeatherPage from "./Components/WeatherPage/WeatherPage";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/notes" element={<NotesPage
                        state = {props.state.notesPage}
                        getState = {props.getState}
                        dispatch = {props.dispatch}
                        reRender = {props.reRender}
                    />}/>
                    <Route path="/weather" element={<WeatherPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;