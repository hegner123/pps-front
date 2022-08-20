import React, { useEffect, useState } from 'react'

export const ResetPass = (props) => {
    const [isPassword, setPassword] = useState()
    const [isConfirmPassword, setConfirmPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <>
            <div
                css={`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    background: white;
                    padding:1rem;
                    border-radius: 5px;
                `}
            >
                <form>
                    <label htmlFor="passwordReset">New password:</label>
                    <input
                        id="passwordReset"
                        name="passwordReset"
                        autoComplete="new-password"
                        type={showPassword ? 'text' : 'password'}
                        value={isPassword}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        Show Password
                    </span>
                    <label htmlFor="confirmPasswordReset">
                        Confirm new password:
                    </label>
                    <input
                        id="confirmPasswordReset"
                        name="confirmPasswordReset"
                        autoComplete="off"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={isConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        Show Password
                    </span>
                </form>
            </div>
        </>
    )
}
