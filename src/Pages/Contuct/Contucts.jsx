import Title from "../../Component/Title";
import { useForm } from "react-hook-form";
const Contucts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container my-5">
            <Title>Contact</Title>
           <div className="d-flex gap-5 my-5">
           <div className="w-100 ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.39755436964!2d90.38119147609235!3d23.733198589435155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka%20New%20Market!5e0!3m2!1sen!2sbd!4v1690818963238!5m2!1sen!2sbd"
                    width="100%"
                    height="380"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-100">
                <form className="w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Name" className="py-3 px-2 w-100 my-2" {...register("example")} /> <br />


                    <input placeholder="Email" className="py-3 px-2 w-100 my-2" {...register("exampleRequired", { required: true })} /><br/>
                  
                  <textarea rows={5} className="w-100 my-y px-2" placeholder="Message"></textarea>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input style={{ background: '#fd7e14'}}  className="py-2 my-2 w-100 text-light" type="submit" value='send message'/>
                </form>
            </div>
           </div>





            
        </div>
    );
};

export default Contucts;
