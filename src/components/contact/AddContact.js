import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../Helpers/TextInputGroup';

class AddContact extends Component {
    state = {
        nom:"",
        email:"",
        tel:"",
        errors: {}
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

        // tester les champs 
        const {nom, email, tel, errors} = this.state;
        if(nom == ''){
            this.setState({errors: {nom: "Erreur le nom est vide!"}})
            return;
        }
        if(email == ''){
            this.setState({errors: {email: "Erreur l'email est vide!"}})
            return;
        }
        if(tel == ''){
            this.setState({errors: {tel: "Erreur le numéro de téléphone est vide!"}})
            return;
        }

        // lancer l'action de l'ajout
        dispatch({
            type: "ADD_CONTACT",
            payload:{
                id: taille+1,
                nom: this.state.nom,
                email: this.state.email,
                tel: this.state.tel
            }
        });
        // vider le formulaire si aucune erreur
        this.setState({
                nom:'',
                email:'',
                tel:'',
                errors: {}
            }, () => {
                console.log("Appel après setState ....")
                this.setState({nom:''})
            }
        );
        

    }

    render() {
        const {nom, email, tel, errors} = this.state;
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
                                    <TextInputGroup label="Nom" name="nom" type="text" 
                                                    onChange={this.onChangeInput}
                                                    error={errors.nom}
                                                    defaultValue={this.state.nom}/>
                                    <TextInputGroup label="Email" name="email" type="text" 
                                                    onChange={this.onChangeInput} 
                                                    error={errors.email}
                                                    defaultValue={this.state.email}/>
                                    <TextInputGroup label="Tel" name="tel" type="text" 
                                                    onChange={this.onChangeInput} 
                                                    error={errors.tel}
                                                    defaultValue={this.state.tel}/>
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
