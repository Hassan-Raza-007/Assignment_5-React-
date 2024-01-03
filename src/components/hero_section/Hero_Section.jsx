import { Text_for_Heading } from "../generals/Text";
import { Text_for_para } from "../generals/Text";
import { Text_for_Heading_two } from "../generals/Text";
import { Button_Cmponent } from "../generals/Button";
import Chair_image from "../generals/Chair_images";

const Hero_Section = () => {
    return (
        <div className="hero_section">
            <div>
                <Chair_image />
            </div>
            <div className="hero_section_texts">
            <Text_for_Heading label='30%  Off' />
            <Text_for_Heading_two label='Comfort Chair' />
            <Text_for_para label='Collect from Daxone & get 30% Discount.' />
            <Button_Cmponent label='Singup' />
            </div>
        </div>

    )
}
export default Hero_Section;