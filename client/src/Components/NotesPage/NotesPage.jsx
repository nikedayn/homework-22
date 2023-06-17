//import стилей
import './notes_page.scss';

import React from 'react';
import {useRef} from 'react';

//import redux
import {addNoteAC} from '../../redux/reducers/notesReducer'

//import компонентов
import Section from '../Common/Section/Sectiom';
import NotesList from './NotesList/NotesList';
import Form from './Form/Form';
import Button from './Button/Button';

let formElements = [
    {
        htmlType:'Input',
        type:'title',
        label:'Title',
    },
    {
        htmlType:'Input',
        type:'text',
        label:'Text',
    },
    {
        htmlType:'Select',
        type:'theme',
        label:'Theme',
        answerOptions: [
            {
                value:'black',
                text:'Black'
            },
            {
                value:'white',
                text:'White'
            },
            {
                value:'darkslategray',
                text:'Dark-slate-gray'
            },
            {
                value:'lightyellow',
                text:'Light-yellow'
            }
        ]
    }
];

let timeFormat = (date) => {
    if (date < 10) {
        return `0${date}`;
    }
    else{
        return date;
    }
}

//function componet
const NotesPage = (props) => {
    const refs = {
        btnRef: useRef(null),
        textRef: useRef(null),
        titleRef: useRef(null),
        themeRef: useRef(null)
    }

    const createNote = () => {
        let dateNow = new Date();
        let time = `${timeFormat(dateNow.getHours())}:${timeFormat(dateNow.getMinutes())}`;
        let date = `${timeFormat(dateNow.getDate())}.${timeFormat(dateNow.getMonth())}.${timeFormat(dateNow.getFullYear())}`;

        let newNote = {
            id: props.state.length,
            title: refs.titleRef.current.value,
            text: refs.textRef.current.value,
            time: `${time} | ${date}`,
            theme: refs.themeRef.current.value
        };

        props.dispatch(addNoteAC(newNote));
        props.reRender(props.getState(), props.getState, props.dispatch);

        refs.titleRef.current.value = '';
        refs.textRef.current.value = '';
    }

    return(
        <main>
            <Section classForSection='notes_section' key='notes' content={
                <NotesList notes={props.state}/>
            }/>
            <Section classForSection='form_section' key='form' content={[
                <Form 
                    titleRef={refs.titleRef}
                    textRef={refs.textRef}
                    themeRef={refs.themeRef}
                    formElements={formElements}
                />,
                <Button createNote={createNote} btnRef={refs.btnRef} btnClass="create_note" btnText="Create Note"/>
            ]}/>
        </main>
    )
};

export default NotesPage;