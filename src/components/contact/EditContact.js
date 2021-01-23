import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';

// importer axios
import axios from 'axios';

class EditContact extends Component {
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

    submit = (dispatch, e) => {
        // ne oas refraichir la page!
        e.preventDefault();
        console.log(this.state);

        // récupérer l'id
        const id = this.props.match.params.id;

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
        let updatedContact = {
            id: id,
            name: this.state.nom,
            email: this.state.email,
            phone: this.state.tel
        };

        console.log("id :", id);
        console.log("state :", this.state);
        console.log("props :", this.props.match.params);

        // modifier le contact au serveur
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.put(url+"/"+id, updatedContact)
             .then(res =>{
                 // lancer l'action de l'ajout
                 console.log("Resultat de mise à jour :", res);
                 // remplacer les clés name et phone par nom et tel !
                 Object.defineProperty(res.data, "nom", Object.getOwnPropertyDescriptor(res.data, "name"));
                    delete res.data["name"];
                    Object.defineProperty(res.data, "tel", Object.getOwnPropertyDescriptor(res.data, "phone"));
                    delete res.data["phone"];
                dispatch({
                    type: "EDIT_CONTACT",
                    payload:res.data
                    });
             })
             .catch(err => console.log("Erreur :", err))

        // vider le formulaire si aucune erreur
        this.setState({
                id:'',
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

    // chargement des données du contact à modifier
    componentDidMount(){
        const id = this.props.match.params.id;
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url+"/"+id)
             .then(res => {
                this.setState({
                    nom: res.data.name,
                    tel: res.data.phone,
                    email: res.data.email,
                    id: res.data.email,
                    errors: {}
                });
             })
             .catch(err => {
                 console.log("Erreur : ", err);
             })
    }

    render() {
        const {nom, email, tel, errors} = this.state;
        return (
            <Consumer>
                {value =>{ 
                    const {dispatch} = value;
                    return (
                    <div>
                        <form onSubmit={this.submit.bind(this, dispatch)}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Modifier Contact</h4>
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
                                <div><button className="btn btn-danger btn-block" type="submit">Valider </button></div>
                            </div>
                        </form>
                    </div>
                )}}
            </Consumer>
        )
    }
}

export default EditContact;
