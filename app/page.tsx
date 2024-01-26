"use client"

import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

// component
import PlaneIcon from "@/public/svg/PlaneIcon"
import Spinner from "@/public/svg/Spinner"

const Home = () => {

  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<any>('');

  const handleChangeInput = (e: any) => {
    const value = e.target.value
    setInputValue(value)
  }
  
  const handleSendAction = async () => {
    setIsLoading(true)
    await setTimeout(() => {
      setIsLoading(false)
      toast('Message sent successfully!');
      setInputValue('')
    }, 2000);
  }

  return (
    <section className="w-full h-dvh bg-instagram">
      <Toaster />
      {/* content */}
      <div className="w-full h-full flex justify-center items-center p-4">
        <form className="flex w-full sm:w-fit flex-col">
          <label htmlFor=""></label>
          <input type="text" placeholder="Write a message here secretly..." value={inputValue} onChange={(e) => handleChangeInput(e)} />

          <div className="w-full flex justify-end mt-5">
            <button type="button" className="inline-flex h-12 items-center justify-center rounded-md bg-oceanic pl-5 pr-6 font-medium transition active:scale-110 gap-2" onClick={handleSendAction}>
              {!isLoading ? (
                <><PlaneIcon />Send Message</>
              ) : (
                <><div className="animate-spin"><Spinner /></div><span>Sending Message...</span></>
              )}
              </button>
          </div>
                

        </form>
      </div>
    </section>
  )
}

export default Home