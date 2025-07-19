import React from 'react'

const CheckOutModal = () => {
  return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">

                <h3 className="font-bold text-lg">Thank You for Your Purchase!</h3>

                <p className="py-4">This system is built for learning purposes only. It is not a production-ready platform and is open for further development and improvement in the future. Thank you for exploring it!</p>
                <div className="modal-action">

                <a href="/"><button className="btn btn-primary">Close</button></a>

                </div>
            </div>
        </dialog>
  )
}

export default CheckOutModal