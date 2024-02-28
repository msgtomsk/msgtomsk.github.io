import "./OtherCapabilities.less";

import SectionFooter from "../section-footer/SectionFooter";
import Text from "../text/Text";

const FOOTER_LINKS = [{ url: "#", linkText: "Instagram" }];
const CAPABILITIES = ["Motion Graphics", "2D Animation u"];

function OtherCapabilities() {
  return (
    <div className="component-container other-capabilities-container">
      <Text text="Other Capabilities"></Text>
      <ul>
        {CAPABILITIES.map((capability: string) => {
          return <li key={capability}>{capability}</li>;
        })}
      </ul>
      <SectionFooter
        text="Checkout some of my interests in"
        links={FOOTER_LINKS}
      ></SectionFooter>
    </div>
  );
}

export default OtherCapabilities;
