import React from 'react';
import s from './Profile.module.css';
import {compose} from "redux";
import {addPost} from "../../Store/profile";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {maxLength10, require} from "../../Others/Validators";


let formComponent = ({ input, meta: {touched, error}, ...rest }) => {
    return <div>
        <textarea { ...input } { ...rest } />
        {touched && error && <div style={{ color: 'red' }}>{error}</div> }
    </div>
};

let ProfileForm = ({ handleSubmit, pristine, submitting, reset, ...rest }) => {
    return <form onSubmit={handleSubmit}>
        <Field name='newPost' component={formComponent} validate={[ require, maxLength10 ]} />
        <button disabled={pristine || submitting}>Submit</button>
        <button disabled={pristine || submitting} onClick={reset}>Reset</button>
    </form>
};

const ProfileReduxForm = reduxForm({ form: 'profile' })(ProfileForm);

let Profile = (props) => {
    let submit = values => {
        props.addPost(values.newPost)
    };
    return <div className={s.wrapper}>

        <ProfileReduxForm onSubmit={submit} />
        { props.posts.map(item => <div>{item}</div>) }

    </div>
};

let mapStateToProps = state => ({
    posts: state.profile.posts
});

export default compose(connect(mapStateToProps, { addPost }))(Profile);




















