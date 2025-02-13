import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div>Contact Page</div>
      <button onClick={() => navigate("/contact/info")} className='w-20 h-6 bg-blue-700 text-white'>Info Button</button>
    </>
  )
}

export default Contact