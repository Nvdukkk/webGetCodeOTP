import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

function Register() {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({});
 
    const password = useRef({});

    password.current = watch("password", "");

    const onSubmit = (data ) => {
        const json = JSON.stringify(data)
        localStorage.setItem('data', json)
        alert('Đăng ký thành công')
        reset()
    }

    return (
        <div className='user-login-register'>
            <div className='register-box'>
                <div className='register-box-body'>
                    <p>Đăng ký tài khoản</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className='form-group'>
                            <input
                                type="text" name="fullname" placeholder="Họ tên..." className='form-control'
                                {...register("name", { required: "Vui lòng nhập họ tên" })}
                            />
                            {errors.name && (<span className='form-message'>{errors.name.message}</span>)}

                        </div>
                    
                    
                        <div className='form-group'>
                            <input
                                type="email" name="email" placeholder="Email..." className='form-control'
                                {...register("email", {
                                    required: "Vui lòng nhập email",
                                    pattern: {
                                        value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i, 
                                        message: "Vui lòng nhập đúng định dạng email"
                                    }
                                })}
                            />
                            {errors.email && (<span className='form-message'>{errors.email.message}</span>)}
                        </div>
                    
                    
                        <div className='form-group'>
                            <input
                                type="text" name="username" placeholder="Tên tài khoản..." className='form-control'
                                {...register("username", { required: "Vui lòng nhập tên tài khoản" })}
                            />
                            {errors.username && (<span className='form-message'>{errors.username.message}</span>)}
                        </div>
                    
                    
                        <div className='form-group'>
                            <input
                                type="password" name="password" placeholder="Mật khẩu..." className='form-control'
                                {...register("password", {
                                    required: "Vui lòng nhập mật khẩu",
                                    minLength: {
                                        value: 6,
                                        message: 'Mật khẩu tối thiểu 6 kí tự'
                                    }
                                })}
                            />
                            {errors.password && (<span className='form-message'>{errors.password.message}</span>)}
                        </div>
                                  
                    
                        <div className='form-group'>
                            <input
                                type="password" name="password-confirm" placeholder="Nhập lại mật khẩu..." className="form-control"
                                {...register("repassword", {
                                    required: "Vui lòng nhập lại mật khẩu",
                                    validate: value =>
                                        value === password.current || "Mật khẩu không khớp"
                                })}
                            />
                            {errors.repassword && (<span className='form-message'>{errors.repassword.message}</span>)}
                        </div>

                        <button type="submit" class="btn-click">
                            Đăng ký
                        </button>
                    </form>


                    <hr></hr>

                    Đã có tài khoản? 

                    <NavLink to='/Login' className='href'>
                        Đăng nhập
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Register;