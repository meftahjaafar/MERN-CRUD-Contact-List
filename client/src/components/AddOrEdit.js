import React from 'react'
import { Link } from "react-router-dom"

const AddOrEdit = ({ fullName, email, phone, setFullName, setEmail, setPhone, action, edit, cancel }) => {
    return (
        <div className="card card-body  my-3">

            <form>
                <div className="form-group ">
                    <div className="input-group-prepend">
                        <div className="col-sm-8">
                            <h2>{edit ? "Update Contact" : "Add Contact"}</h2>
                        </div>
                        <div className="col">
                            <div className={edit ? "input-group-text bg-primary text-white" : "input-group-text bg-success text-white"}>
                                <i className={edit ? "fas fa-pen" : "fas fa-user-plus"}></i>
                            </div>
                        </div>
                        <div className="col">
                            <img src={process.env.PUBLIC_URL + 'avatar.png'} alt={fullName} width="100x" height="100px" />
                        </div>

                    </div>
                    <label>Full Name:</label>
                    <input type="text" className="form-control" placeholder="Enter your fullname..." value={fullName} onChange={(e) => setFullName(e.target.value)} ></input>
                    <label>Email:</label>
                    <div className="input-group-prepend ">
                        <div className="input-group-text">@</div>
                        <input type="text" className="form-control" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <label>Phone Number:</label>
                    <input type="text" className="form-control" placeholder="Enter your phone number..." value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <Link to="/contact-list">
                    <button type="submit" className={edit ? "btn btn-block btn-primary mt-3" : "btn btn-block btn-success mt-3"} onClick={action}>
                        {edit ? "Update" : "Add"} <i className={edit ? "fas fa-pen" : "fas fa-book"}></i></button>
                    <button type="submit" style={{ color: "white" }} className="btn btn-block btn-warning mt-3" onClick={cancel}>Cancel
                    <span style={{ color: "white" }}>
                            <i className="far fa-window-close"></i>
                        </span>
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddOrEdit
