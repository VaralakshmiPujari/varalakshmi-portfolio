import React from 'react'

const profile_image ="https://previews.123rf.com/images/grgroup/grgroup1612/grgroup161204998/67411271-woman-icon-girl-female-avatar-person-people-and-human-theme-isolated-design-vector-illustration.jpg"


function About()  {
    return (
       <section id="about" className="d-flex align-items-start">
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">About</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis itaque, quae, earum magnam excepturi deserunt alias tempore beatae necessitatibus, reiciendis cum odio neque dolores ipsum totam veritatis consectetur repellat?</p>
            </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={profile_image} alt="no image"
                        className="card-img-top"/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-center text-teal card-title">Personal Details</h5>
                            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut minima veritatis molestiae ab fuga natus, Magni!</p>

                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong className="text-secondary">DOB</strong>
                                        <span className="text-teal float-end"> 18-03-2000</span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong className="text-secondary">Email</strong>
                                        <span className="text-teal float-end"> Varalakshmipujari@gmail.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong className="text-secondary">Mobile</strong>
                                        <span className="text-teal float-end"> 9346575330</span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong className="text-secondary">City</strong>
                                        <span className="text-teal float-end">Bangaluru,Karnataka</span>
                                    </li>
                                    </ul>
                                    </div>  
                                    <div className="col-md-6">
                                    <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong className="text-secondary">Qualification</strong>
                                        <span className="text-teal float-end"> Degree(Bsc)</span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong className="text-secondary">Father Name</strong>
                                        <span className="text-teal float-end">P.Sreenivasulu </span>
                                        </li>
                                        <li className="list-group-item">
                                        <strong className="text-secondary">Mother Name</strong>
                                        <span className="text-teal float-end">p.Lakshmi Devi</span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong className="text-secondary">Gender</strong>
                                        <span className="text-teal float-end">Female</span>
                                    </li>
                                </ul>
                           </div>
                        </div>
                    </div>
                 </div>
             </div>

             <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">Skills</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">HTML</strong>
                                            <strong className="text-teal float-end">98%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width : '98%'}} >98%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" style={{width : '70%'}} >70%</div>
                                        </div>
                                    </li>
                                    
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">JQUERY</strong>
                                            <strong className="text-teal float-end">50%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" style={{width : '50%'}} >50%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">BOOTSTRAP</strong>
                                            <strong className="text-teal float-end">65%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" style={{width : '65%'}} >65%</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card">
                 <div className="card-body">
                 <ul className="list-group">
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-primary">React and Redux</strong>
                                            <strong className="text-teal float-end">80%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" style={{width : '80%'}} >80%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Node JS</strong>
                                            <strong className="text-teal float-end">10%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" style={{width : '10%'}} >10%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Express JS</strong>
                                            <strong className="text-teal float-end">5%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" style={{width : '5%'}} >5%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Mongo DB</strong>
                                            <strong className="text-teal float-end">2%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" style={{width : '2%'}} >2%</div>
                                        </div>
                                    </li>
                                </ul>
                 </div>
                </div>
             </div>
         </div>
     </div>
     </div>
 </section>
    )
    }

    
           
   
                    


export default About