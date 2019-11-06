import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {require} from "../../Others/Validators";
import {connect} from "react-redux";
import {login} from "../../Store/auth";



let formComponent = ({ input, meta: { touched, error }, ...rest }) => {
    return <div>
        <input { ...input } { ...rest } />
        { error && touched && <div style={{ color: 'red' }}>{ error }</div> }
    </div>
};


let LoginForm = ({handleSubmit, pristine, submitting, reset, ...rest}) => {
    return <form onSubmit={handleSubmit}>

        <Field name='email'
               placeholder='Email'
               component={formComponent}
               validate={[require]}/>

        <Field name='password'
               placeholder='Password'
               type='password'
               component={formComponent}
               validate={[require]}/>

        <Field name='rememberMe'
               type='checkbox'
               component={formComponent} />

        <button disabled={pristine || submitting}>Sign in</button>
        <button disabled={pristine || submitting} onClick={reset}>Reset</button>
    </form>
};

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

let Login = (props) => {
    let submit = values => {
        props.login(values.email, values.password, values.rememberMe);
    };

    return <div className={s.wrapper}>
        <LoginReduxForm onSubmit={submit} />
    </div>
};

export default connect(null, { login })(Login);















