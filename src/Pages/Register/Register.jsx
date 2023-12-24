import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/userInBg.png";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-hot-toast";
import SocileLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const { register, profile } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");
    console.log(role);

    // const data = new FormData();
    // data.append("image", image);

    // fetch('https://api.imgbb.com/1/upload?key=ca1e75a277bb15be2aa64bc489aa437b', {
    //     method: "POST",
    //     body: data
    // })
    // .then(res => res.json()) // Return the result of the first then block
    // .then(data => console.log(data))
    // .catch(error => console.error('Error uploading image:', error));

    register(email, password)
      .then(() => {
        profile(name, image)
          .then(() => {
            const user = {
                name,
                image,
                email,
                role
            }
            axios.post('/users',user)
            .then(res=>{
                console.log(res.data);
            })
            navigate("/");
            toast("Register your account sucessfully", {
              icon: "👏",
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto pt-24 px-5 mb-7 flex items-center justify-center lg:flex-row flex-col gap-8">
      <div className="">
        <h1 className="text-5xl text-white font-semibold ">
          Welcome to <br /> Ecommerce
        </h1>
        <img className="lg:h-[400px]" src={image} alt="" />
      </div>
      <div className="flex-1 max-w-xl bg-[#181818] text-white px-7 py-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Sign Up Now..</h1>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="name">
                Your Name
              </label>{" "}
              <br />
              <input
                required
                type="text"
                name="name"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Enter Your Name..."
              />
            </div>
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="image">
                Image
              </label>{" "}
              <br />
              <input
                required
                type="url"
                name="image"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Image url here..."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="email">
                Your Email
              </label>{" "}
              <br />
              <input
                required
                type="email"
                name="email"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Enter email here..."
              />
            </div>
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="email">
                Work For
              </label>
              <br />
              <select
                name="role"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                required
                id=""
              >
                <option value="student">Student</option>
                <option value="developer">Developer</option>
                <option value="banker">Banker</option>
                <option value="professional">professional</option>
              </select>
            </div>
          </div>
          <label className="font-bold " htmlFor="email">
            Password
          </label>{" "}
          <br />
          <input
            required
            type="password"
            name="password"
            className="py-2 px-3 mt-1 w-full rounded-sm"
            placeholder="Enter Password here..."
          />
          <input
            required
            type="submit"
            value="Sign Up"
            className="w-full py-3 rounded bg-[#141414] hover:bg-[#404040] font-medium mt-5 text-white cursor-pointer text-lg"
          />
        </form>
        <p className="my-2 text-center font-medium">or</p>
        <SocileLogin/>
        <p className="font-bold mt-1">
          Already have an Account?
          <Link to="/login" className="text-red-600">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;