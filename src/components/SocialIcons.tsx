import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'


const SocialIcons = () => {
  return (
    <div className='flex flex-col gap-5 glass px-2 py-3 rounded-2xl'>
        <a
            href="https://www.facebook.com/zeevistaadvisors"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl"
            >
            <BsFacebook />
        </a>
        <a
            href="https://www.instagram.com/zeevistaadvisors"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl"
            >
            <BsInstagram />
        </a>
        <a
            href="https://www.linkedin.com/company/zeevista-immigration-advisors/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl"
            >
            <BsLinkedin />
        </a>

    </div>
  )
}

export default SocialIcons