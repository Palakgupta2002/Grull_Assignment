import { Button, Card, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import girlImage from "../assets/OfferImage.png"
import { useState } from "react";
import "../App.css"
import { useDispatch } from "react-redux";
import { isAuth } from "../utils/userSlice";


const LoginPage = ({ onClose }) => {
    const dispatch=useDispatch()
   
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues);
        dispatch(isAuth(formValues));
        
    };
    

    return (
        <div>
            <Modal show={true} onClose={onClose}>
                <Modal.Header>{isSignUp ? "Sign Up" : "Login"}</Modal.Header>
                <Modal.Body className="flex justify-center ">
                    <img className=" w-1/3" src={girlImage} />
                    <Card className="w-1/2">
                        <form className="flex flex-col gap-4 w-fit" onSubmit={handleSubmit}>
                            {isSignUp &&
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="username" value="Your username" />
                                    </div>
                                    <TextInput id="username" name="username" type="text" placeholder="Ram" required />
                                </div>
                            }
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput id="email1" name="email1" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput id="password1" name="password1" type="password" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" name="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Card>
                </Modal.Body>
                <div className="flex justify-center mb-20">
                    <span>{isSignUp ? "Already have an account ?" : "Not have an account ?"}<button className="text-blue-800 pl-3" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Login" : "Sign up"}</button> </span>
                </div>
                {/* <Modal.Footer>
                    <Button onClick={onClose}>Cancel</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default LoginPage;
