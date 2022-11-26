import React, { useState } from 'react'

function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState("")

    const changeHandler = (e: any) => {     
        let selected = e.target.files[0];
        
        if (selected) {
            setFile(selected)
            setError("")
        } else {
            setFile(null)
            setError('Please select an image file (PNG or JPEG)')
        }
    }
    
    return (
        <>
        <form>
            <input type='file' onChange={changeHandler} accept="image/png, image/jpg, image/jpeg" />
            <span>+</span>
            <div className='file-output'>
                { error != "" && <div className='error'> {error} </div> }
                { file != "" && <div> { "" } </div> }
            </div>
        </form>
        </>
    )
}

export default UploadForm
