import { useState } from "react";
import axios from "axios";
import "./changepass.css"
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import Siderbar from "../siderbar";
function ChangePassword() {
    const { currentAdmin } = useSelector((state) => state.admin);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            if (newPassword != confirmNewPassword) {
                setError("confirm password is not correct")
            }
            else {
                let response = await axios.post("/admin/change_password", { id: currentAdmin._id, currentPassword: oldPassword, newPassword });
                setSuccess(response.data.message);
            }
        } catch (err) {
            setError(err.response.data.message);
        };

    }


    return <>

        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8  " style={{ marginLeft: "120px", marginTop: "120px" }}>
                    <div className="row" id="head">
                        <div id="" className="col-lg-5 ">
                            <h1 id="heading">ChangePassword</h1>
                            <div>
                            <img className="ms-5" id="img" src="data:image/jpeg;base64,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">
                            </img></div>
                         
                            <p id="info" className="card-text">Your New Password Must be Different<br /> From Previously Used Password</p>

                        </div>
                        <div className="col-lg-5">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <p>Current Password</p>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}>

                                    </input>
                                </div>
                                <div className="form-group">
                                    <p>New Password</p>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}>

                                    </input>
                                </div>
                                <div className="form-group">
                                    <p>Confirm New Password</p>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}>

                                    </input>
                                </div>
                                <button className="btn mt-3" style={{color:"white",background:"#004E8F"}} type="submit">ChangePassword</button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default ChangePassword;