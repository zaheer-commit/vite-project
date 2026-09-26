import PlantImage from '../assets/PlantImage.jpg'

function Login()
{
    return(
        <div className="flex flex-row justify-center items-center h-screen">

            <div className="w-120 h-132 p-15 px-10">
                <h1 className="text-black font-bold font-arial md:text-2xl text-4xl">Get Stated Now</h1>
                <form className="space-y-4 md:mt-10 mt-20 font-sans font-medium">
                    <div>
                        <label className="text-black md:text-[14px] text-[20px]">Name</label>
                        <input type="text" placeholder="Enter you name"
                            className="w-full px-5 py-3 md:py-1 md:text-[12px] text-[16px] text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div>
                        <label className="text-black md:text-[14px] text-[20px]">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter you email"
                            className="w-full px-5 md:text-[12px] text-[16px] py-3 md:py-1 text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div>
                        <label className="block text-black md:text-[14px] text-[20px]">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full md:text-[12px] text-[16px] px-5 py-3 md:py-1 text-gray-600 rounded-lg border border-gray-700 focus:outline-none transition"/>
                    </div>
                    <div className="flex items-center justify-between md:text-sm text-lg">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-1" />I agree to the items & policy
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-[#395C22] text-white py-3 rounded-lg font-semibold hover:bg-[#395C22]/80 transition">Login</button>
                </form>
            </div>

            <div className="hidden md:flex justify-center">
                <img src={PlantImage} alt="Plant" className="w-100 mx-auto"/>
            </div>
            
        </div>
        
    )   
}
export default Login