import { AiTwotonePhone } from 'react-icons/ai'
import { PiWhatsappLogoFill } from 'react-icons/pi'
import { GrMail } from 'react-icons/gr'

const SocialHeader = () => {
  return (
    <div
      className=" w-full h-[30px] bg-yellow-600 flex items-center px-32 "
    >

      <div>
        <div className="flex items-center gap-2">
          <GrMail className="text-white text-xl" />
          <p className="text-white text-sm">
            <strong>mail us:</strong> info@zeevistaadvisors.com
          </p>
          </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <AiTwotonePhone className="text-white rotate-90 text-xl" />
          <p className="text-white text-sm">
            <strong>24h: </strong>
            (04) 449 0918</p>
        </div>
        <div className="flex items-center gap-2">
          <PiWhatsappLogoFill className="text-white text-xl" />
          <p className="text-white text-sm">
            <strong>24h: </strong>
            91 9876543210</p>
        </div>
      </div>

    </div>
  )
}

export default SocialHeader