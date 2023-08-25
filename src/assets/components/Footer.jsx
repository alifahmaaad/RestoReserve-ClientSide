const Footer = () => {
  return (
    <footer className="bottom-0 flex w-full flex-col items-center justify-center bg-[#FFB100]">
      <div className="flex w-full justify-center px-10 py-4 sm:max-w-[calc(100vw-10rem)] sm:py-20 md:max-w-[calc(100vw-25rem)] xl:max-w-[calc(100vw-35rem)]">
        <div className="relative flex flex-col md:flex-row ">
          <div
            className="absolute left-0 top-0 flex h-fit w-fit items-center gap-2 rounded-xl bg-white p-4"
            href="/"
          >
            <p className="text-3xl font-bold">
              RR<b className="text-[#FFB100]">.</b>
            </p>
            <p className="font-mono font-bold">RestoReserve</p>
          </div>
          <div className="mt-20 flex items-center justify-center py-4 sm:px-20">
            <div className="flex flex-col justify-center gap-3 px-4 text-white">
              <span>Developed By:</span>
              <span className="px-2">
                <a className="flex gap-2" target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="text-sm">Ahmad Alif Sofian</p>
                </a>
              </span>
              <span className="px-2">
                <a href="#" target="_blank" className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <p className="text-sm">Ahmad Alif Sofian</p>
                </a>
              </span>
              <span className="px-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6281270003726"
                  className="flex gap-2"
                  target="_blank"
                >
                  <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                  </svg>
                  <p className="text-sm">081270003726</p>
                </a>
              </span>
              <span className="px-2">
                <a className="flex gap-2" href="mailto:alif12sofian@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                  <p className="text-sm">alif12sofian@gmail.com</p>
                </a>
              </span>
            </div>
          </div>
          <div className="min-w-[22rem] rounded-xl bg-white p-10">
            <header className="py-5 text-2xl font-bold  lg:text-4xl   ">
              <h1 className="text-ellipsis text-[#FFB100]">Lets Talk.</h1>
            </header>
            <form>
              <label htmlFor="name" className="block font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="my-4 h-[2rem] w-full p-4 text-black shadow-lg focus:outline-none"
                placeholder="Your Name"
              />
              <label htmlFor="email" className="block font-semibold">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="my-4 h-[2rem] w-full p-4 text-black shadow-lg focus:outline-none"
                placeholder="Your E-Mail"
              />
              <label htmlFor="email" className="block font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h[3rem] my-4 h-[5rem] w-full resize-none p-4 text-black shadow-lg focus:outline-none"
                placeholder="Message"
              />
              <button
                type="submit"
                className="rounded-full bg-[#ffedc3] p-2 font-bold text-[#FFB100]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pb-4 text-white">Created By - Ahmad Alif Sofian 2023</div>
    </footer>
  );
};

export default Footer;