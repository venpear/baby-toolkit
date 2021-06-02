import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Bottles: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 21.9137C11.8388 21.9715 11.9627 22.0009 12.0865 22C12.2103 21.999 12.3331 21.9686 12.4449 21.9097L16.0128 20.0025C17.0245 19.4631 17.8168 18.8601 18.435 18.1579C19.779 16.6282 20.5129 14.6758 20.4998 12.6626L20.4575 6.02198C20.4535 5.25711 19.9511 4.57461 19.2082 4.32652L12.5707 2.09956C12.1711 1.96424 11.7331 1.96718 11.3405 2.10643L4.72824 4.41281C3.9893 4.67071 3.496 5.35811 3.50002 6.12397L3.54231 12.7597C3.5554 14.7758 4.31448 16.7194 5.68062 18.2335C6.3048 18.9258 7.10415 19.52 8.12699 20.0505L11.7281 21.9137ZM6.92866 12.8682C6.51866 12.8792 6.16866 13.2082 6.13866 13.6292V13.7482C6.10866 15.1492 6.95766 16.4182 8.24866 16.9082C8.65866 17.0492 9.10866 16.8282 9.25866 16.4082C9.39866 15.9882 9.17866 15.5282 8.75866 15.3792C8.11766 15.1392 7.68866 14.5082 7.68866 13.8092V13.7782C7.70766 13.5492 7.63866 13.3282 7.49866 13.1582C7.35866 12.9882 7.14866 12.8892 6.92866 12.8682Z" fill="#4E93EA"/>
    </Svg>
  );
};

export default Bottles;
