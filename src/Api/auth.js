import { toast } from "react-hot-toast";


export const auth = (user) => {
    console.log("Received user object:", user);

    const userInfo = {
        email: user?.email,
        
    }


    fetch(`https://shopwish-surver-shammi-riya.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success(`welcome ${user?.email}`)
            }
        })


};

