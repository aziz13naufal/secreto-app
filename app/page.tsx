"use client"

import PlaneIcon from "@/public/svg/PlaneIcon"
import Spinner from "@/public/svg/Spinner"
import { useState } from "react"

const Home = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendAction = async () => {
    setIsLoading(true)
    await setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  return (
    <section className="w-full h-dvh bg-instagram">
      {/* content */}
      <div className="w-full h-full flex justify-center items-center p-3">
        
        <form className="flex flex-col">
          <label htmlFor="">Write Message as Annonim</label>
          <textarea name="" id=""></textarea>

          <div className="w-full flex justify-end mt-4">
            <button type="button" className="inline-flex h-12 items-center justify-center rounded-md bg-oceanic pl-5 pr-6 font-medium transition active:scale-110 gap-2" onClick={handleSendAction}>
              {!isLoading ? (
                <>
                <PlaneIcon />
                Send Message
                </>
              ) : (
                <>
                <div className="animate-spin">
                  <Spinner />
                </div>
                Sending Message...
                </>
              )}
              </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Home