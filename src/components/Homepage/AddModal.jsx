import React from 'react'

const AddModal = () => {
  return (
    <div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Added to Cart!</h3>
                <p className="py-4">Enjoy Shopping!</p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
        
  )
}

export default AddModal