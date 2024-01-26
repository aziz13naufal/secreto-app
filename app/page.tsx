"use client"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    return (
        <div className="w-full h-dvh p-4 bg-instagram flex items-center justify-center">
            <div className="w-full p-4 bg-white/30 backdrop-blur-sm border border-zinc-200 rounded-lg">
                <div className="">
                    <h1 className="text-center font-semibold text-xl">Confes.In</h1>
                    <h3 className="mt-3 font-normal">Selamat datang di Confes.In. Kirim ungkapanmu sekarang tanpa ketahuan!</h3>
                </div>

                <div className="mt-4 flex flex-col gap-y-4">
                    <input 
                        type="text"
                        placeholder="Dari" 
                        className="w-full p-3 rounded-md bg-white/30 backdrop-blur-sm border border-zinc-200 font-medium placeholder:text-orange-800 focus:outline-blue-500"
                    />
                    <input 
                        type="text"
                        placeholder="Kepada" 
                        className="w-full p-3 rounded-md bg-white/30 backdrop-blur-sm border border-zinc-200 font-medium placeholder:text-orange-800 focus:outline-blue-500"
                    />
                    <textarea 
                        placeholder="Masukkan pesanmu..." 
                        className="w-full h-32 p-3 rounded-md bg-white/30 backdrop-blur-sm border border-zinc-200 font-medium placeholder:text-orange-800 focus:outline-blue-500"
                    />
                    <button 
                      className="mt-1 inline-flex h-12 items-center justify-center rounded-md bg-oceanic px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                      onClick={() => toast("Pesanmu berhasil dikirim!")}
                      >Kirim Pesan</button>
                </div>
            </div>

            {/* component */}
            <Toaster />
        </div>
    )
}

export default Page