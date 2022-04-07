
function FileUpload() {

    function submitHandler() {

    }
    return(
        <form> 
            <input type='file' name='file' onChange={submitHandler}>Select File</input>
        </form>
    )
}

export default FileUpload;