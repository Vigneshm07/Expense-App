import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from 'antd'
import { startGetProfile, startUpdateProfile, startUpdateProfilePic } from "../actions/profileAction"

const AddProfile = (props) => {

    const profileList = useSelector((state) => {
        return state.profile.profile
    })
    console.log("profile", profileList)

    const [modal, setModal] = useState(false)
    const [name, setName] = useState(profileList.name ? profileList.name : '')
    const [age, setAge] = useState(profileList.age ? profileList.age : '')
    const [occupation, setOccupation] = useState(profileList.occupation ? profileList.occupation : '')
    const [bio, setBio] = useState(profileList.bio ? profileList.bio : '')
    const [file, setFile] = useState(profileList.avatar ? profileList.avatar : {})
    const [formError, setFormError] = useState({})

    const errors = {}

    const runValidation = () => {
        if (name.trim().length === 0) {
            errors.name = "Name is required"
        } else if (age.trim().length === 0) {
            errors.age = "Age is required"
        } else if (occupation.trim().length === 0) {
            errors.occupation = "Occupation is required"
        } else if (bio.trim().length === 0) {
            errors.bio = "Bio is required"
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetProfile())
    }, [dispatch])

    const showModal = () => {
        setModal(!modal)
    }

    const handleOk = () => {
        setModal(false)
    }

    const handleCancel = () => {
        setModal(false)
    }

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === "name") {
            setName(e.target.value)
        } else if (attr === "age") {
            setAge(e.target.value)
        } else if (attr === "occupation") {
            setOccupation(e.target.value)
        } else if (attr === "bio") {
            setBio(e.target.value)
        } else if (attr === "file") {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const formData = {
                name: name,
                age: age,
                occupation: occupation,
                bio: bio
            }
            dispatch(startUpdateProfile(formData, profileList._id))
        } else {
            setFormError(errors)
        }
    }
    console.log(profileList._id)

    const handlePicSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("avatar", file)
        console.log("append", formData)
        dispatch(startUpdateProfilePic(formData, profileList._id))
    }

    useEffect(() => {
        setName(profileList.name)
        setAge(profileList.age)
        setOccupation(profileList.occupation)
        setBio(profileList.bio)
        setFile(profileList.avatar)
    }, [profileList.name, profileList.age, profileList.occupation, profileList.bio, profileList.avatar])

    return (
        <div>
            <Modal
                visible={modal}
                isOpen={modal}
                onOk={handleOk}
                handleOk={handleCancel}
            >
                <form onSubmit={handleSubmit}>
                    <h1>Profile</h1>

                    <label>Name</label><br />
                    <input type="text" value={name} name="name" onChange={handleChange} /><br />

                    <label>Age</label><br />
                    <input type="text" value={age} name="age" onChange={handleChange} /><br />

                    <label>Occupation</label><br />
                    <input type="text" value={occupation} name="occupation" onChange={handleChange} /><br />

                    <label>Bio</label><br />
                    <input type="text" value={bio} name="bio" onChange={handleChange} /><br />

                    <input type="submit" />
                </form><br />
                <form onSubmit={handlePicSubmit}>
                    <input type="file" placeholder="Choose file" name="file" onChange={handleChange} /><br />
                    <input type="submit" />
                </form>
            </Modal>
            <h3><button
                onClick={showModal}
            >Edit</button>
            </h3>
            {
                profileList.name  &&
                <div>
                    <h2>Name-{profileList.name}</h2>
                    <h2>Age-{profileList.age}</h2>
                    <h2>Occupation-{profileList.occupation}</h2>
                    <h2>Bio-{profileList.bio}</h2>
                    {
                        profileList.avatar ? (
                            <img width="200x" src={`http://localhost:3090/${profileList.avatar}`} alt="" />
                        ) : (
                            <img width="200x" src={'https://i.stack.imgur.com/l60Hf.png'} alt="" />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default AddProfile