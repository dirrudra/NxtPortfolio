import Navbar from "../components/NavBar";



const Page = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="max-w-4xl mx-auto p-8 text-gray-100">
        <h1 className="text-3xl font-semibold mb-8">Connect with me on social media</h1>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center">
            <a href="https://github.com/dirrudra" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.svg" alt="GitHub" className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <a href="https://instagram.com/novaprime_pc" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://linkedin.com/in/rudrakumarb" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
