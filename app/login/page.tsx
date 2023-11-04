'use client'
import './login.css';
import { useForm } from 'react-hook-form';
import { useSession, signIn, signOut } from "next-auth/react"

type FormFields = {
     username: string;
     password: string;
};


export default function page() {
     const { register, handleSubmit } = useForm<FormFields>({
     });
     const login = handleSubmit((data) => {
          console.log(data);
          signIn('credentials', {
               username: data.username,
               password: data.password,
               callbackUrl: `${window.location.origin}/`,
          });
     });

     return (
          <div className='pageWrap'>
               <form onSubmit={login}>
                    <div className="flex flex-col w-[30rem] bg-gray-100 py-12 px-12">
                         <h1 className='text-2xl text-black mb-5 self-center'>Login System</h1>
                         <input {
                              ...register('username', {
                                   required: true,
                              })
                         } className="mb-3" type="text" placeholder="Username" />
                         <input {
                              ...register('password', {
                                   required: true,
                              })
                         } type="password" placeholder="Password" />
                         <button className='btn mt-5'>Login</button>
                    </div>
               </form>
          </div>
     )
}
