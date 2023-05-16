import axios from "axios"

export const startGetProfile = () => {
    return (dispatch) => {
        axios.get("http://localhost:3090/users/profileList", {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
            .then((response) => {
                const list = response.data
                console.log("Profile List", list)
                dispatch(setGetProfile(list))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setGetProfile = (data) => {
    console.log(data)
    return {
        type : "GET_PROFILE",
        payload : data
    }
}

export const startUpdateProfile = (formData , _id) => {
    console.log("form" ,  formData)
    console.log("id" , _id)
    return(dispatch)=>{
        axios.put(`http://localhost:3090/users/profileUpdate/${_id}`, formData ,{
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const profile = response.data
            console.log("Update" , profile)
            dispatch(setEditProfile(profile))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const setEditProfile = (data) => {
    return {
        type : "UPDATE_PROFILE" ,
        payload : data
    }
}

export const startUpdateProfilePic = (formData , id) => {
    console.log("formData" , formData)
    return(dispatch)=>{
        axios.put(`http://localhost:3090/users/profilePicUpdate/${id}`, formData , {
            headers: {
                'authorization': localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const profile = response.data
            console.log("Update pic" , profile)
            dispatch(setEditProfilePic(profile))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const setEditProfilePic = (data) => {
    return{
        type : "UPDATE_PROFILE_PIC" ,
        payload : data
    }
}

