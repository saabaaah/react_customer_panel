import React from 'react';
import classnames from 'classnames';

export default function TextInputGroup(props) {
    return (
        <div className="form-group">
                <label for={props.name}>{props.label}</label>
                <input type={props.type} name={props.name} 
                        id={props.name}   
                        defaultValue={props.defaultValue}
                        onChange={props.onChange}
                        className={classnames("form-control",
                                             {"is-invalid":props.error})}
                        placeholder="" aria-describedby="helpId"/>
                <div class="invalid-feedback">{props.error}</div>
            </div>
    )
}