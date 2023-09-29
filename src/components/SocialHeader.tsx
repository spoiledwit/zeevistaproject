
import { PiWhatsappLogoFill } from 'react-icons/pi'
import { GrMail } from 'react-icons/gr'
import {TbDeviceLandlinePhone} from 'react-icons/tb'

const SocialHeader = () => {
  return (
    <div
      className=" w-full h-[30px] glass border-b flex items-center px-12 "
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
          <TbDeviceLandlinePhone className="text-white text-xl" />
          <p className="text-white text-sm">
            <strong>24h: </strong>
            +971 4449 0918</p>
        </div>
        <div className="flex items-center gap-2">
          <PiWhatsappLogoFill className="text-white text-xl" />
          <p className="text-white text-sm">
            <strong>24h: </strong>
            +91 9876543210</p>
        </div>
      </div>

    </div>
  )
}

export default SocialHeader