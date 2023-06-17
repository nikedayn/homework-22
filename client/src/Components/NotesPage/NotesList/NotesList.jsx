import NoteItem from './NoteItem';
import s from "./NotesList.module.scss";

const NotesList = (props) => {
    let noteRender = props.notes.map((noteInformation, index)=> {
        return <NoteItem key={`note${index}`} title={noteInformation.title} text={noteInformation.text} time={noteInformation.time} theme={noteInformation.theme}/>
    })
    return(
        <ul className={s.notes_list}>
            {noteRender}
        </ul>
    )
}

export default NotesList;