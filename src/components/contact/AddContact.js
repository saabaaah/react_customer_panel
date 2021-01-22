import React, { Component } from 'react'
import {Consumer} from '../context';

class AddContact extends Component {
    state = {
        nom:"",
        email:"",
        tel:""
    };

    // fonction onchange du changeent des inputs
    onChangeInput = (e) => {
        console.log("onChangeInput", e);
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    submit = (dispatch, taille, e) => {
        // ne oas refraichir la page!
        e.preventDefault();
        console.log(this.state);

        // lancer l'action de l'ajout
        dispatch({
            type: "ADD_CONTACT",
            payload:{
                id: taille+1,
                nom: this.state.nom,
                email: this.state.email,
                tel: this.state.tel
            }
        })

        this.state = {
            nom:"",
            email:"",
            tel:""
        }

    }

    render() {
        const {nom, email, tel} = this.state;
        return (
            <Consumer>
                {value =>{ 
                    const {dispatch} = value;
                    return (
                    <div>
                        <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Ajouter Contact</h4>
                                    <div className="form-group">
                                    <label for="">Nom</label>
                                    <input type="text" name="nom" id="nom"   defaultValue={nom}
                                            onChange={this.onChangeInput}
                                            className="form-control" placeholder="" aria-describedby="helpId"/>
                                    </div>
                                    <div className="form-group">
                                    <label for="">Email</label>
                                    <input type="text" name="email" id="email" defaultValue={email}
                                            onChange={this.onChangeInput}
                                            className="form-control" placeholder="" aria-describedby="helpId"/>
                                    </div>
                                    <div className="form-group">
                                    <label for="">Tel</label>
                                    <input type="text" name="tel" id="tel" defaultValue={tel}
                                            onChange={this.onChangeInput}
                                            className="form-control" placeholder="" aria-describedby="helpId"/>
                                    </div>
                                </div>
                                <div><button type="submit">Valider </button></div>
                            </div>
                        </form>
                    </div>
                )}}
            </Consumer>
        )
    }
}

export default AddContact;
