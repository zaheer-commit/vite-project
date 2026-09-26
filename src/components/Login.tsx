import PlantImage from '../assets/PlantImage.jpg'

function Login()
{
    return(
        <div className="flex flex-row justify-center items-center h-screen">

            <div className="w-120 h-132 p-15">
                <h1 className="text-black font-bold font-arial text-2xl">Get Stated Now</h1>
                <form className="space-y-4 mt-10 font-sans font-medium">
                    <div>
                        <label className="text-black text-[14px]">Name</label>
                        <input type="text" placeholder="Enter you name"
                            className="w-full px-5 py-1 text-[12px] text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div>
                        <label className="text-black text-[14px]">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter you email"
                            className="w-full px-5 text-[12px] py-1 text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div>
                        <label className="block text-black text-[15px]">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full text-[12px] px-5 py-1 text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-1" />I agree to the items & policy
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-[#395C22] text-white py-3 rounded-lg font-semibold hover:bg-[#395C22]/80 transition">Login</button>
                </form>
            </div>

            <div>
                <img src={PlantImage} alt="Plant" className="w-100 mx-auto"/>
            </div>

        </div>
    )   
}
export default Login