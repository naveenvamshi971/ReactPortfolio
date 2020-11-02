import React, {Component} from "react";

class Contact extends Component{
 
        state={
            name:"",
            email:"",
            description:"",
            submitMessage:"",
            submitMessageTextColor:"",
        };
 
    onChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        );
    };
 
    onSubmit = (event) => {
        event.preventDefault();

        let isSuccessful = true;
        const {name} = this.state;

        if(isSuccessful){
            this.setState({
                submitMessage: `Thank you ${name}. Will contact you soon! `,
                submitMessageTextColor: "text-info",
            });
        }
        else{
            this.setState({
                submitMessage:"Oops! Something went wrong",
                submitMessageTextColor: "text-danger",
            });
        }
    };
 
   
    render(){
        const {submitMessageTextColor,submitMessage} = this.state;
        return(
            <div className = "container my-5">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thanks!</span> for showing your interest
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <input type="text" name="name" className="form-control" 
                                  onChange={this.onChange} required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="text" name="email" className="form-control"
                                  onChange={this.onChange} required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Tell me about projeect*</label>
                                <textarea  name="description" className="form-control"
                                  onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark float-right" style={{backgroundColor:"black"}}>
                                Let's talk business
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="py-5 mx-2 text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5> 
                </div>
            </div>

          
        );
    };
}

export default Contact;