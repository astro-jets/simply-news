import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return ( 
        <footer className="bg-[#444] dark:bg-[#222] w-full">
        <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */ }
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">Corporate  link Africa</a>
            </div>
            {/* End Col */ }

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Services</h4>

              <div className="mt-3 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/services">Advertisment</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/services">Content Creation</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/services">Documentaries</a></p>
              </div>
            </div>
            {/* End Col */ }

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>

              <div className="mt-3 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/news">News</a></p>
                <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/about">About Us</a></p>
                <p className="md:space-x-4">
                  <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Careers</a> 
                  <span className="inline ms-1 text-xs bg-red-700 text-white py-1 px-2 rounded-lg">We're hiring</span>
                </p>
              </div>
            </div>
            {/* End Col */ }

            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Stay up to date</h4>

              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
                  <div className="w-full">
                    <label for="hero-input" className="sr-only">Search</label>
                    <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter your email"/>
                  </div>
                  <a className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Subscribe
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  Get the latest news from us.
                </p>
              </form>
            </div>
            {/* End Col */ }
          </div>
          {/* End Grid */ }

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">© 2023 Corporate  link Africa. All rights reserved.</p>
            </div>
            {/* End Col */ }

            {/* Social Brands */ }
            <div>
              {/* Facebook */}
              <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.facebook.com/">
                <BsFacebook size={20} color="#fff"/>
              </a>

              {/* Twitter */}
              <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.twitter.com/">
                <BsTwitterX size={20} color="#fff"/>
              </a>

              {/* Instagram */}
              <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.instagram.com/">
                <BsInstagram size={20} color="#fff"/>
              </a>

              {/* Whatsapp */}
              <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.whatsapp.com/">
                <BsWhatsapp size={20} color="#fff"/>
              </a>
            </div>
            {/* End Social Brands */ }
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;