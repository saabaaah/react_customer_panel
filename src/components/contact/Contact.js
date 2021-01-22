import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import { Consumer } from '../context';

class Contact extends Component {

    state = {
        showContentToggle: true
    }

    showContact(params) {
        console.log("showContact",params);
        this.setState({
            showContentToggle: ! this.state.showContentToggle
        })
        
    }

    onDeleteContact(id, dispatch) {
        console.log("onDeleteContact",id, dispatch);
        dispatch({
            type:'DELETE_CONTACT',
            payload:id
        })
        
    }    
    
    render() {
        const {id, nom, tel, email} = this.props.data;
        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return (
                        <div className="card-text">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {nom} 
                                    <i onClick={this.showContact.bind(this, nom)}  style={{curssor: 'pointer'}} className="fa fa-sort-desc"></i>
                                    <i onClick={this.onDeleteContact.bind(this, id, dispatch) } style={{color:'red', float:'right', curssor: 'pointer'}} className="fa fa-times"></i>
            
                                </h4>
                                <p className="card-text">
                                    {(this.state.showContentToggle)? (
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Tel :  {tel}</li>
                                        <li className="list-group-item">Email :  {email}</li>
                                    </ul>
                                    ) : null}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}


// propriétés par défaut!
Contact.defaultProps = {
    nom:" Sans nom",
    tel:" Sans tel",
    emai:" Sans emai"
};

// les types des propriétés
Contact.propTypes = {
    data: PropTypes.object.isRequired
};
export default Contact;