// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
// import { useRef ,useState,useEffect} from 'react';
// import { FaWhatsapp } from "react-icons/fa";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   const audioRef1 = useRef(null);
//   const audioRef2 = useRef(null);
//   const audioRef3 = useRef(null);
//   const audioRef4 = useRef(null);
//   const playAudio = () => {
//     if (audioRef1.current) {
//       audioRef1.current.play();
//     }
//   };
//   const playAudio1 = () => {
//     if (audioRef2.current) {
//       audioRef2.current.play();
//     }
//   };
//   const playAudio2 = () => {
//     if (audioRef3.current) {
//       audioRef3.current.play();
//     }
//   };
//   const playAudio3 = () => {
//     if (audioRef2.current) {
//       audioRef2.current.play();
//     }
//   };
//   const playAudio4 = () => {
//     if (audioRef4.current) {
//       audioRef4.current.play();
//     }
//   };

//   const [isRed, setIsRed] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
//   const [imageSrc, setImageSrc] = useState('/VVPAT.gif');

//   const handleButtonClick = () => {
//     setIsRed(true); // Change circle color to red
//     setIsModalOpen(true);
//     playAudio2();
//     playAudio4();
    
    
//   };

//   const handleButtonClick1 = () => {
//      // Change circle color to red
//      playAudio();
//   };
//   const handleButtonClick2 = () => {
//      // Change circle color to red
//      playAudio1();
//   };
//   const handleButtonClick3 = () => {
//      // Change circle color to red
//      playAudio3();
//   };


//   const fakeLinkRef = useRef(null);
 
//   const handleButtonWhatsapp = () => {
//     // Get the current URL
//     const currentUrl = window.location.href;

//     // Create the WhatsApp URL with the message
//     const whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(currentUrl) + '%0D%0Aमी डेमो मतदान केले, तुम्ही केले का?';

//     // Set the fake link's href
//     fakeLinkRef.current.setAttribute('href', whatsappUrl);

//     // Trigger the click on the fake link
//     fakeLinkRef.current.click();
//   };
 

//   useEffect(() => {
//     let timer;
//     if (isRed) {
//       timer = setTimeout(() => setIsRed(false), 2000); // Reset after 2 seconds
//     }
//     return () => clearTimeout(timer); // Cleanup on unmount or state change
//   }, [isRed]);

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close modal
//   };
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      
//       <div className="p-4 bg-white  max-w-xl mx-auto text-center">
//     <h1 className="text-lg font-semibold text-blue-800">
//         194- महाड - 
//         पोलदपूर विधानसभा सार्वत्रिक निवडणूक 2024
//     </h1>
//     <h2 className="text-2xl font-bold text-red-600 mt-2">
//         डमी मतदान यंत्र
//     </h2>
//     <button className="bg-indigo-800 text-white py-2 px-4 rounded-md text-lg mt-4 shadow-md" onClick={handleButtonClick3} >
//         डेमो मतदानासाठी कमळ निशाणी समोरील निळे बटन दाबावे
//     </button>
//     <p className="text-md font-medium mt-6">
//         मतदानाच्या दिवशी सुद्धा <span className="font-bold">कमळ</span> या चिन्हासमोरील बटन दाबून <span className="font-bold">भरत मारुती गोगावले</span> यांना प्रचंड मतांनी विजयी करा !
//     </p>
//     <div className="flex justify-center mt-6 ">
//         <button className="bg-green-500 mr-2 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2" onClick={handleButtonWhatsapp}>
//         <FaWhatsapp />
//             <span>SHARE</span>
//         </button>
//     {/* </div>
//     <div className="flex justify-center mt-6"> */}
//     <a href="https://wa.link/92x71l">
//         <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
//             <span>MESSAGE</span>
//         </button>
//     </a>
// </div>
// </div>

// <div className="bg-yellow-400 text-center py-4 px-6">
//     <p className="text-black font-bold text-3xl">
//         “कमळ” या चिन्हासमोरील बटन दाबून प्रचंड मतांनी विजयी करा.
//     </p>
//     <p className="text-black text-xl mt-2">
//         मतदान दिनांक २० नोव्हेंबर २०२४ स. ०७:०० ते सायं. ०६:००
//     </p>
// </div>



//       <div className="overflow-x-auto">
//   <table className="table-auto w-full border border-black">
//     <thead>
//       <tr>
//         <th className="border-2 border-black p-2 font-semibold">अ.क्र</th>
//         <th className="border-2 border-black p-2 font-semibold">उमेदवाराचे नाव</th>
//         <th className=""></th>
//         <th className="border-2 border-black p-2 font-semibold">चिन्ह</th>
//         <th className="border-2 border-black  font-semibold bg-orange-100">बटन</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td className="border-2 border-black  text-center">१.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg" onClick={handleButtonClick1}></button>
//         </td>
//      </tr>

//      <tr>
//       <td className="border-2 border-black p-2 text-center text-xl font-bold">२.</td>
//       <td className="border-2 border-black  text-center text-sm font-bold w-65">
//         भरत मारुती गोगावले.
//       </td>
//       <td className="border-2 border-black text-center">
//         <img src="/img.jpeg" className="w-16 h-16 object-cover m-auto" />
//       </td>
//       <td className="border-2 border-black  text-center">
//         <img src="/logo.jpeg" className="w-16 h-16 object-cover m-auto" />
//         </td>
//       <td className="border-2 border-black p-4 bg-orange-100 text-center flex">
//         <div
//           className={`w-8 h-6 rounded-full border border-black inline-block mr-2 ${
//             isRed ? 'bg-red-500' : ''
//           }`}
//         ></div>
//         <button
//           onClick={handleButtonClick}
//           className="bg-blue-900 text-white  rounded-full px-4   shadow-lg"
//         >
//           बटण दाबा
//         </button>
//       </td>
//     </tr>
    


//       <tr>
//         <td className="border-2 border-black  text-center">३.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">४.</td>
//         <td className="border-2 border-black  text-center"></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">५.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">६.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">७.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">८.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black text-center">९.</td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१०.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">११.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१२.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१३.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१४.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block  mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१५.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black text-center">१६.</td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black text-center">१७.</td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१८.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black  text-center">१९.</td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black "></td>
//         <td className="border-2 border-black  text-center">
//         </td>
//         <td className="border-2 border-black  bg-orange-100 text-center  ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
//       <tr>
//         <td className="border-2 border-black text-center">२०.</td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black"></td>
//         <td className="border-2 border-black text-center">
//         </td>
//         <td className="border-2 border-black bg-orange-100 text-center flex ">
//         <div className="w-6 h-6 rounded-full border border-black inline-block mr-2"></div>
//           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
//         </td>
//      </tr>
      
      
//       </tbody>
//       </table>
//       </div>

//       <audio ref={audioRef1} src="/x.mp4" preload="auto"></audio>
//       <audio ref={audioRef2} src="/BHARAT_AUDIO.wav" preload="auto"></audio>
//       <audio ref={audioRef3} src="/ButtonBeep.WAV" preload="auto"></audio>
//       <audio ref={audioRef4} src="/final.wav" preload="auto"></audio>

//       


//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
//           <div className="relative">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 text-white text-2xl"
//             >
//               X
//             </button>
//             <img src={imageSrc} alt="Full-screen" className="max-w-full max-h-full" />
//           </div>
//           <div>
//           <a href="https://wa.link/92x71l">
//         <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
//             <span>MESSAGE</span>
//         </button>
//     </a>
//           <button className="bg-green-500 mr-2 mt-2 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2" onClick={handleButtonWhatsapp}>
//         <FaWhatsapp />
//             <span>SHARE</span>
//         </button>
//         </div>
//         </div>
        
//       )}
//     </>
//   );
// }

import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const audioRefs = useRef({
    audio1: null,
    audio2: null,
    audio3: null,
    audio4: null,
  });

  // State for controlling button colors and modal visibility
  const [isRed, setIsRed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAudioPlay = (audioKey) => {
    if (audioRefs.current[audioKey]) {
      audioRefs.current[audioKey].play();
    }
  };

  const handleButtonClick = () => {
    setIsRed(true); // Change circle color to red
    setIsModalOpen(true); // Open modal
    handleAudioPlay("audio3"); // Play Button Beep sound
    handleAudioPlay("audio4"); // Play Final Sound
  };

  const handleButtonClick1 = () => handleAudioPlay("audio1");
  const handleButtonClick2 = () => handleAudioPlay("audio2");

  const fakeLinkRef = useRef(null);

  const handleButtonWhatsapp = () => {
    const currentUrl = window.location.href;
    const whatsappUrl =
      "https://api.whatsapp.com/send?text=" +
      encodeURIComponent(currentUrl) +
      "%0D%0Aमी डेमो मतदान केले, तुम्ही केले का?";

    fakeLinkRef.current.setAttribute("href", whatsappUrl);
    fakeLinkRef.current.click();
  };

  useEffect(() => {
    let timer;
    if (isRed) {
      timer = setTimeout(() => setIsRed(false), 2000); // Reset after 2 seconds
    }
    return () => clearTimeout(timer); // Cleanup on unmount or state change
  }, [isRed]);

  const handleCloseModal = () => setIsModalOpen(false); // Close modal

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4 bg-white max-w-xl mx-auto text-center">
        <h1 className="text-lg font-semibold text-blue-800">
        294- कसबा विधानसभा सार्वत्रिक निवडणूक 2024
        </h1>
        <h2 className="text-2xl font-bold text-red-600 mt-2">डमी मतदान यंत्र</h2>
        <button
          className="bg-indigo-800 text-white py-2 px-4 rounded-md text-lg mt-4 shadow-md"
          onClick={handleButtonClick2}
        >
          डेमो मतदानासाठी कमळ निशाणी समोरील निळे बटन दाबावे
        </button>
        <p className="text-md font-medium mt-6">
          मतदानाच्या दिवशी सुद्धा <span className="font-bold">कमळ</span> या
          चिन्हासमोरील बटन दाबून{" "}
          <span className="font-bold">श्री.हेमंत नारायण रासने</span> यांना प्रचंड मतांनी
          विजयी करा !
        </p>
        <div className="flex justify-center mt-6 ">
          <button
            className="bg-green-500 mr-2 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
            onClick={handleButtonWhatsapp}
          >
            <FaWhatsapp />
            <span>SHARE</span>
          </button>
          {/* <a href="https://wa.link/92x71l">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
              <span>MESSAGE</span>
            </button>
          </a> */}
        </div>
      </div>

      <div className="bg-yellow-400 text-center py-4 px-6">
        <p className="text-black font-bold text-3xl">
          “कमळ” या चिन्हासमोरील बटन दाबून प्रचंड मतांनी विजयी करा.
        </p>
        <p className="text-black text-xl mt-2">
          मतदान दिनांक २० नोव्हेंबर २०२४ स. ०७:०० ते सायं. ०६:००
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-2 border-black">
          <thead>
            <tr>
              <th className="border-2 border-black p-2 font-semibold">अ.क्र</th>
              <th className="border-2 border-r-0 border-black p-2 font-semibold">उमेदवाराचे नाव</th>
              <th className=""></th>
              <th className="border-2 border-black p-2 font-semibold">चिन्ह</th>
              <th className="border-2 border-black font-semibold bg-orange-100">बटन</th>
            </tr>
          </thead>
          <tbody>
           
          <tr>
         <td className="border-2 border-black  text-center">१.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
            
            <tr>
              <td className="border-2 border-black text-center">२.</td>
              <td className="border-2 border-black "></td>
              <td className="border-2 border-black "></td>
              <td className="border-2 border-black text-center"></td>
              <td className="border-2 border-black bg-orange-100 text-center">
                <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
                <button
                  className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"
                  onClick={handleButtonClick1}
                ></button>
              </td>
            </tr>
            <tr>
              <td className="border-2 border-black p-2 text-center text-xl font-bold">३.</td>
              <td className="border-2 border-black text-center text-sm font-bold w-65">
              श्री.हेमंत नारायण रासने.
              </td>
              <td className="border-2 border-black text-center w-16">
                <img src="/HEMAN.jpg" className="m-auto" />
              </td>
              <td className="border-2 border-black text-center w-16">
                <img src="/BJP.png" className=" m-auto" />
              </td>
              <td className="border-2 border-black p-4 bg-orange-100 text-center flex flex-row justify-center">
                <div
                  className={`w-8 h-6 rounded-full border-2 border-black inline-block mr-2 ${
                    isRed ? "bg-red-500" : ""
                  }`}
                ></div>
                <button
                  onClick={handleButtonClick}
                  className="bg-blue-900 text-white rounded-full px-4 shadow-lg"
                >
                  बटण दाबा
                </button>
              </td>
            </tr>
            
            
       <tr>
         <td className="border-2 border-black  text-center">४.</td>
         <td className="border-2 border-black  text-center"></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">५.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">६.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">७.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">८.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black text-center">९.</td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१०.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">११.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१२.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१३.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१४.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block  mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१५.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black text-center">१६.</td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black text-center">१७.</td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१८.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black  text-center">१९.</td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black "></td>
         <td className="border-2 border-black  text-center">
         </td>
         <td className="border-2 border-black  bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>
       <tr>
         <td className="border-2 border-black text-center">२०.</td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black"></td>
         <td className="border-2 border-black text-center">
         </td>
         <td className="border-2 border-black bg-orange-100 text-center  ">
         <div className="w-6 h-6 rounded-full border-2 border-black inline-block mr-2"></div>
           <button className="bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg"onClick={handleButtonClick1}></button>
         </td>
      </tr>


          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-4 text-gray-600 text-sm">
    <span>2024 © <a href="https://shakktii.ai" className="text-blue-500 hover:underline">shakktii.ai</a></span>
    <span className="flex items-center">
        Crafted with <span className="text-red-500 px-1">❤️</span> by 
        <a href="tel:+918856067217" className="text-blue-500 hover:underline ml-1">+91 8856067217</a>
    </span>
</div>

      <audio ref={(el) => (audioRefs.current.audio1 = el)} src="/x.mp4" preload="auto"></audio>
      <audio ref={(el) => (audioRefs.current.audio2 = el)} src="/hemant.mp3" preload="auto"></audio>
      <audio ref={(el) => (audioRefs.current.audio3 = el)} src="/ButtonBeep.WAV" preload="auto"></audio>
      <audio ref={(el) => (audioRefs.current.audio4 = el)} src="/final_.wav" preload="auto"></audio>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
                  <div className="relative">
                    <button
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 text-white text-2xl"
                    >
                      X
                    </button>
                    <img src='/Hemant.gif' alt="Full-screen" className="max-w-full max-h-full" />
                  </div>
                  <div>
                  {/* <a href="https://wa.link/92x71l">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
                    <span>MESSAGE</span>
                </button>
            </a> */}
                  <button className="bg-green-500 mr-2 mt-2 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2" onClick={handleButtonWhatsapp}>
                <FaWhatsapp />
                    <span>SHARE</span>
                </button>
                </div>
                </div>
      )}

      <a ref={fakeLinkRef} href="#" style={{ display: "none" }} />
    </>
  );
}
