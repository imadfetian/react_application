import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            skillValue:'',
            title:"Keep your smile",
            contact:{
                name:"Imad Fetian",
                profile:'images/imad.png',
                email:"fetian.imad@gmail.com",
            },
            skills:[
                {id:1,skill:'Software Engineer'},
                {id:2,skill:'UI Design'},
                {id:3,skill:'Machine Learning'},
            ]
        }
    }
    setSkill=(event)=>{
        this.setState({
            skillValue:event.target.value
        })
    }
    addSkill=(event)=>{
        event.preventDefault()
       let  skill={
           id:[...this.state.skills].pop().id+1,
           skill:this.state.skillValue
       }
       this.setState({
           skills:[...this.state.skills,skill]
       })

}
    onDelete=(skill)=>{
        let index=this.state.skills.indexOf(skill);
        let listSkills=[...this.state.skills];
        listSkills.splice(index,1);

        this.setState({
            skills:listSkills
        });

    }
    render() {
        return (
            <div>
                <div className="card"></div>
                <div className="card-header text-center"><strong><label >{this.state.title}</label></strong></div>
                <div className="row p-2">
                    <div className="col col-auto">
                        <img width={100} src={this.state.contact.profile}/>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item"> {this.state.contact.name}</li>
                            <li className="list-group-item"> {this.state.contact.email}</li>

                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Skills</div>
                    <div className='card-body'>
                        <form className="row mb-3" onSubmit={this.addSkill}>
                            <div className="col-auto">
                                <input className="form-control"
                                       name="skill"
                                       value={this.state.skillValue}
                                       onChange={this.setSkill}
                                       placeholder="New Skill"/></div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>

                        </form>
                        <table className="table ">
                            <tr>
                                <th>ID</th> <th>Skills</th>
                            </tr>
                            {
                                this.state.skills.map((s,index)=>
                                <tr>
                                    <td>{s.id}</td>
                                    <td>{s.skill}</td>
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={()=>this.onDelete(s)}>X</button>
                                    </td>
                                </tr>)
                            }
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;