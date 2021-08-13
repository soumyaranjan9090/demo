import React, { useState, useEffect, handleHistory } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
import { Modal, ModalFooter } from "react-bootstrap"
import { Form } from 'react-bootstrap'
import axios from 'axios'

function UserContainer({ fetchUsers, userData }) {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [post, setPost] = useState();
    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [single, setSingle] = useState()
    var all;
    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${input2}`)
            .then(response => {
                all = response.data
            })
    }, [input2])
    function handleHistory() {
        window.location.href = `https://en.wikipedia.org/wiki/${post.name}`
    }
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData}</h2>
    ) : (
        <div className="content">
            <div>

                <h5>Enter CountryName :</h5>
                <input type="name" className="input-box" placeholder="Enter Name" value={input} onChange={e => setInput(e.target.value)}></input>
                <button onClick={() => { return setInput2(input2),setSingle(all), setOpen2(!open2) }}>Click</button>
            </div>
            <div className="main">
                {userData &&
                    userData.users &&
                    userData.users.map((user) => (
                        <div onClick={() => { return  setOpen(!open), setPost(user) }}>
                            <h2>{user.name}</h2>
                            <p>capital:{user.capital}</p>
                            <img className="model" src={user.flag}></img>
                        </div>
                    ))
                }
            </div>
            {post &&
                <Modal size="lg" show={open} onHide={() => setOpen(false)} id="modal">
                    <Modal.Body>
                        <h2>{post.name}</h2>
                        <p>capital:{post.capital}</p>
                        <img className="img" src={post.flag}></img>
                        <p>
                            currency:{post.currencies[0].name} - {""}
                            {post.currencies[0].symbol}
                        </p>
                        <p>Languages : {post.languages[0].name}</p>
                        <p>Population : {post.population} citizens</p>
                        <p>Region : {post.region}</p>
                        <p>Sub region : {post.subregion}</p>
                        <p>Time Zone : {post.timezone}</p>
                    </Modal.Body>
                    <ModalFooter>
                        <button className="btn" onClick={handleHistory}>Know More</button>
                    </ModalFooter>
                </Modal>
            }
            {single &&
                <Modal size="lg" show={open2} onHide={() => setOpen2(false)} id="modal">
                    <Modal.Body>
                        <h2>{single.name}</h2>
                        <p>capital:{single.capital}</p>
                        <img className="img" src={single.flag}></img>
                        <p>
                            currency:{single.currencies[0].name} - {""}
                            {single.currencies[0].symbol}
                        </p>
                        <p>Languages : {single.languages[0].name}</p>
                        <p>Population : {single.population} citizens</p>
                        <p>Region : {single.region}</p>
                        <p>Sub region : {single.subregion}</p>
                        <p>Time Zone : {single.timezone}</p>
                    </Modal.Body>
                    <ModalFooter>
                        <button className="btn" onClick={handleHistory}>Know More</button>
                    </ModalFooter>
                </Modal>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)
