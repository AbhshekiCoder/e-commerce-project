import {Link} from 'react-router-dom';
function From({handleOnClick, btn1, btn,  user, update, formData}){
    return(
        <>
             <div className=' bg-slate-300'>

<form name="" encType = "multipart/form-data" method='post' onSubmit= {handleOnClick}>
<input type="text" name="name" className='user' />
<input type = "file" name='image' />
<button type="submit" className='btn' >Submit</button>


</form>


</div>
 <div className='output'>{user}</div>
      <button className='btn1 to-blue-600' onClick={btn1}>Click</button>
      <button onClick={btn}>logout</button>
      <button onClick={update}>delte</button>
<form name='input'>
<input type = "text" name='name'  className= "input border-2 w-96" onChange={formData} />


</form>

<button><Link to = "/Data">Submit</Link></button>

        </>
    )
}
export default From;