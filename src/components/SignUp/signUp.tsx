import React from 'react'
import './signUp.css'

function signUpForm() {
  return (
	<>
	<div className='signup-page'>
		<div className='signup-form-container'>
			<form className='signup-form'>
				<div className='signup-form-title'>
					- : Sign Up : -
				</div>
				<label className='username-label'>
                    Username:
                </label>
				<input className='input-username' placeholder='' type='text'/>
				<label className='username-label'>
                    Password:
                </label>
				<input className='input-password' placeholder='' type='password'/>
				<label className='username-label'>
                    Confirm Password:
                </label>
				<input className='input-password' placeholder='' type='password'/>	
				<button> Sign Up</button>
			</form>
			
		</div>
	</div>
	</>
  )
}

export default signUpForm