import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';

// importer axios
import axios from 'axios';

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

        // créer un contact
        let newContact = {
            id: taille+1,
            name: this.state.nom,
            email: this.state.email,
            phone: this.state.tel
        };

        // ajouter le contact au serveur
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.post(url, newContact)
             .then(res =>{
                 // lancer l'action de l'ajout
                 console.log("Resultat d'ajout :", res);
                 // remplacer les clés name et phone par nom et tel !
                 Object.defineProperty(res.data, "nom", Object.getOwnPropertyDescriptor(res.data, "name"));
                    delete res.data["name"];
                    Object.defineProperty(res.data, "tel", Object.getOwnPropertyDescriptor(res.data, "phone"));
                    delete res.data["phone"];
                dispatch({
                    type: "ADD_CONTACT",
                    payload:res.data
                    });
             })
             .catch(err => console.log("Erreur :", err))

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

        // rediriger vers la liste des contacts 
        this.props.history.push('/');

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
