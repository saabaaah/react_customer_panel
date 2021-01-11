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
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Ajouter Contact</h4>
                        <div className="form-group">
                          <label for="">Nom</label>
                          <input type="text" name="nom" id="nom"   value={nom} className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                        <div className="form-group">
                          <label for="">Email</label>
                          <input type="text" name="email" id="email" value={email} className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                        <div className="form-group">
                          <label for="">Phone</label>
                          <input type="text" name="phone" id="phone" value={phone} className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default AddContact;
