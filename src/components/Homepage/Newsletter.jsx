import React from 'react'

const Newsletter = () => {
  
  function showModal(){
    const inputs = document.getElementById("email-input").value;
    if(inputs !== ""){
      document.getElementById('my_modal_3').showModal()
      document.getElementById("email-input").value = "";
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 text-blue-100">Get the latest cube releases and solving tips</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              placeholder="Enter your email"
              id='email-input'
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button onClick={showModal} className="cursor-pointer px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
          <dialog id="my_modal_3" className="modal ">
              <div className="modal-box bg-white">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                </form>
                <h3 className="font-bold text-lg text-black">Subscribed!</h3>
                <p className="py-4 text-black">Thank you and have a nice day!</p>
              </div>
        </dialog>

      </section>
  )
}

export default Newsletter