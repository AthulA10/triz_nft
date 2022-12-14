function CreatHero(){
    return <section className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-col px-5 py-24 justify-start items-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2EADC5]">Create New Item</h1>
      
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-left text-left">
      <label for="formFile" className="form-label inline-block mb-2 text-[#2EADC5] ">Image, Video, Audio, or 3D Model</label>
      <h6 className="text-white py-2">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</h6>
    <input className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-transparent bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-[#2EADC5] focus:bg-transparent focus:border-[#2EADC5] focus:outline-none" type="file" id="formFile"/>
        

        <label for="name" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">Name</label>
        <input type="text" id="name" className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  " placeholder="Item name" required/>

        <label for="link" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">External Link</label>
        <p className="text-white ">Trizwit will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
        <input type="text" id="link" className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  " placeholder="https://xyz.io/123" required/>
        
        <label for="descr" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">Description</label>
        <p className="text-white ">The description will be included on the item's detail page underneath its image. </p>
        <input type="text" id="descr" className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  " placeholder="Provide a detailed description of your item" required/>
        
        <label for="coll" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">Collection</label>
        <p className="text-white ">The description will be included on the item's detail page underneath its image. </p>
        <select id="col" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-[#2EADC5] dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white ">
          <option selected>Choose a collection</option>
          <option value="ART">Art</option>
          <option value="SPT">Sport</option>
           <option value="DOM">Domain</option>
          <option value="MUS">Music</option>
          </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        
        <label for="supply" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">Supply</label>
        <p className="text-white ">The number of items that can be minted.No gas cost to you! </p>
        <input type="text" id="descr" className="bg-transparent border border-[#2EADC5] text-white text-sm rounded-lg  focus:border-[#2EADC5] block w-full p-2.5  " placeholder="1" required/>
        
        
        <label for="block" className="form-label inline-block mb-2 text-[#2EADC5] pt-4">Blockchain</label>

        <select id="col" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-[#2EADC5] dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white ">
          <option selected>Ethereum</option>
          <option value="ETH">Solana</option>
          <option value="ARB">Arbitrum</option>
           <option value="AVA">Avalanche</option>
          <option value="PLG">Polygon</option>
          </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
         





        <div className="flex w-full justify-center items-end my-4">
          {/* <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div> */}
          <button className="inline-flex text-white bg-[#2EADC5] border-2 border-[#2EADC5] py-2 px-6 focus:outline-none hover:bg-transparent hover:border-[#2EADC5] rounded text-lg">Create</button>
        </div>
        {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
        {/* <div className="flex">
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span className="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">Download on the</span>
              <span className="title-font font-medium">App Store</span>
            </span>
          </button>
        </div> */}
      </div>
    </div>
  </section>
}

export default CreatHero;