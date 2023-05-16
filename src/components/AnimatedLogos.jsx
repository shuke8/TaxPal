import Image from 'next/image'
import caterpillarLogo from '../images/animatedLogos/Caterpillar_logo.svg'
import ciscoLogo from '../images/animatedLogos/Cisco_logo_blue_2016.svg'
import dellLogo from '../images/animatedLogos/Caterpillar_logo.svg'
import geLogo from '../images/animatedLogos/GE.svg'
import honeywellLogo from '../images/animatedLogos/Honeywell_logo.svg'
import moxaLogo from '../images/animatedLogos/moxa.svg'
import rollsRoyceLogo from '../images/animatedLogos/Rolls-Royce.svg'
import siemensAgLogo from '../images/animatedLogos/Siemens_AG_logo.svg'

const AnimatedLogos = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <Image alt="Catepillar" src={caterpillarLogo} />
        <Image alt="CIsco" src={ciscoLogo} />
        <Image alt="Dell" src={dellLogo} />
        <Image alt="GElogo" src={geLogo} />
        <Image alt="Honeywell" src={honeywellLogo} />
        <Image alt="moxa" src={moxaLogo} />
        <Image alt="rr" src={rollsRoyceLogo} />
        <Image alt="siemens" src={siemensAgLogo} />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `var copy = document.querySelector(".logos-slide").cloneNode(true);
          document.querySelector(".logos").appendChild(copy);`,
        }}
      />
    </div>
  )
}

//

export default AnimatedLogos
