import React from 'react'

const Form = () => {
    return (
        <form className='my-3'>
            <div className="mb-3">
                <label for="noteTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="noteTitle" aria-describedby="noteTitle" />
            </div>
            <div className="mb-3">
                <label for="noteDescription" className="form-label">Description</label>
                <textarea class="form-control" id="noteDescription" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form
