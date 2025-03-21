import React from 'react'

const Card = ({ apiDataObjectProps, handleDelete, handleEditItem  }) => {
    return (
        <div className="row">
            {apiDataObjectProps?.map((item, index) => {
                return <div className="col-xl-4" key={index}>
                    <div className="card mt-2" >
                        <div className="card-body" key={item.id}>
                            <h5 className="card-title text-start">Title: - {item.title}</h5>
                            <p className="card-text text-start">Description: - {item.body}</p>
                            <>
                                <button className='m-1 p-2 rounded border-0' onClick={() => handleEditItem(item)}>Edit</button>
                                <button className='m-1 p-2 rounded border-0' onClick={() => handleDelete(item.id)}>Delete</button>
                            </>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    )
}
export default Card;