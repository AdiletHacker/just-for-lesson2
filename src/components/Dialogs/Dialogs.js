import React from 'react';
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMessage} from "../../Store/dialogs";
import {maxLength10, require} from "../../Others/Validators";

let formComponent = ({ input, meta: { error, touched }, ...rest }) => {
    return <div>
        <textarea { ...input } { ...rest } />
        {touched && error && <div style={{color: 'red'}}>{error}</div>}
    </div>
};

let DialogForm = ({ handleSubmit, pristine, submitting, reset, ...rest }) => {
    return <form onSubmit={handleSubmit}>

            <Field name='newMessage' component={formComponent} validate={[ require, maxLength10 ]} />
            <button disabled={pristine || submitting}>Submit</button>
            <button disabled={pristine || submitting} onClick={reset}>Reset</button>

    </form>
};

let DialogReduxForm = reduxForm({ form: 'dialogs' })(DialogForm);

let Dialogs = props => {

    let submit = (values) => {
        props.addMessage(values.newMessage);
    };

    return <div className={s.wrapper}>
        <DialogReduxForm onSubmit={submit} />
        { props.messages.map(item => <div>{item}</div>) }
    </div>
};

const mapStateToProps = state => ({
    messages: state.dialogs.messages
});


export default compose(connect(mapStateToProps, { addMessage }))(Dialogs);















