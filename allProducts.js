import { bodyLotionsArr } from "./src/Components/Categories/BodyLotions/bodyLotions.js";
import { BrighteningCreamsArr } from "./src/Components/Categories/Brightening Cream/BrighteningCreams.js";
import { CleansersArr } from "./src/Components/Categories/Cleansers/Cleanser.js";
import { FaceWashArr } from "./src/Components/Categories/Face Wash/FaceWash.js";
import { FacialKitsArr } from "./src/Components/Categories/Facial Kit/FacialKit.js";
import { GelsArr } from "./src/Components/Categories/Gels/Gels.js";
import { FaceMasksArr } from "./src/Components/Categories/Masks/FaceMaks.js";
import { NightCreamsArr } from "./src/Components/Categories/NightSkinCare/NightSkinCare.js";
import { powdersArr } from "./src/Components/Categories/Powders/Powders.js";
import { serumsArr } from "./src/Components/Categories/Serums/Serums.js";
import { sunblocksArr } from "./src/Components/Categories/Sunblock/Sunblocks.js";
import { tonersArr } from "./src/Components/Categories/Toners/Toners.js";
import { featuredProductsArr } from "./src/Components/FeaturedProducts/FeaturedProducts.js";

const allProducts = [
  ...bodyLotionsArr, ...BrighteningCreamsArr, ...CleansersArr, ...FaceWashArr, ...FacialKitsArr, ...GelsArr, ...FaceMasksArr, ...NightCreamsArr, ...powdersArr, ...serumsArr, ...sunblocksArr, ...tonersArr, ...featuredProductsArr
]

export default allProducts