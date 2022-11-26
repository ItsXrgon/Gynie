import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config'

function useStorage(file: any){
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState("")
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // refrences 
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('state_changed', (snap: any) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage) 
        }, (err: string) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }

}

export default useStorage