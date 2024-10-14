import { bodyLotionsArr } from "./src/Components/Categories/BodyLotions/bodyLotions";
import { BrighteningCreamsArr } from "./src/Components/Categories/Brightening Cream/BrighteningCreams";
import { CleansersArr } from "./src/Components/Categories/Cleansers/Cleanser";
import { FaceWashArr } from "./src/Components/Categories/Face Wash/FaceWash";
import { FacialKitsArr } from "./src/Components/Categories/Facial Kit/FacialKit";
import { GelsArr } from "./src/Components/Categories/Gels/Gels";
import { FaceMasksArr } from "./src/Components/Categories/Masks/FaceMaks";
import { NightCreamsArr } from "./src/Components/Categories/NightSkinCare/NightSkinCare";
import { powdersArr } from "./src/Components/Categories/Powders/Powders";
import { serumsArr } from "./src/Components/Categories/Serums/Serums";
import { sunblocksArr } from "./src/Components/Categories/Sunblock/Sunblocks";
import { tonersArr } from "./src/Components/Categories/Toners/Toners";
import { featuredProductsArr } from "./src/Components/FeaturedProducts/FeaturedProducts";

const allProducts = [
  ...bodyLotionsArr, ...BrighteningCreamsArr, ...CleansersArr, ...FaceWashArr, ...FacialKitsArr, ...GelsArr, ...FaceMasksArr, ...NightCreamsArr, ...powdersArr, ...serumsArr, ...sunblocksArr, ...tonersArr, ...featuredProductsArr
]

export default allProducts