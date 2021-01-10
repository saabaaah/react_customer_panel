import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        nom:"",
        email:"",
        phone:""
    };

    render() {
        const {nom, email, phone} = this.state;
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Ajouter Contact</h4>
                        <div class="form-group">
                          <label for="">Nom</label>
                          <input type="text" name="nom" id="nom"   value={nom} class="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                        <div class="form-group">
                          <label for="">Email</label>
                          <input type="text" name="email" id="email" value={email} class="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                        <div class="form-group">
                          <label for="">Phone</label>
                          <input type="text" name="phone" id="phone" value={phone} class="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default AddContact;
