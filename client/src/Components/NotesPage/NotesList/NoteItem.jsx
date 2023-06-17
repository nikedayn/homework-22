import s from "./NoteItem.module.scss";
let themeClass;

const NoteItem = (props) => {
    switch (props.theme) {
        case 'black':
            themeClass = s.black_theme_for_note;
            break;

        case 'white':
            themeClass = s.white_theme_for_note;
            break;
        
        case 'darkslategray':
            themeClass = s.darkslategray_theme_for_note;
            break;

        case 'lightyellow':
            themeClass = s.lightyellow_theme_for_note;
            break;

        default:
            themeClass = '';
    }
    return(
        <li className={`${s.notes_list_item} ${themeClass}`}>
            <h2 className={s.note_headline}>{props.title}</h2>
            <article className={s.note_and_time}>
                <p className={s.note_content}>{props.text}</p>
                <p className={s.time_were_note_was_created}>
                    {props.time}
                </p>
            </article>
        </li>
    )
};

export default NoteItem;