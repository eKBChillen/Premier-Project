import { docReady } from './utils';
import detectorInit from './detector';
import tooltipInit from './tooltip';
import popoverInit from './popover';
import toastInit from './toast';
import plyrInit from './plyr';
import initMap from './googleMap';
import countupInit from './countup';
import scrollToTop from './scroll-to-top';
import swiperInit from './swiper';
import dropdownOnHover from './dropdown-on-hover';
import scrollbarInit from './scrollbar';
import dropdownMenuInit from './dropdown-menu';
import lightboxInit from './lightbox';
import bgPlayerInit from './bg-player';
import hamburgerInit from './hamburger';
import zanimationInit from './zanimation';
import inertiaInit from './inertia';
import preloaderInit from './preloader';
import formInit from './form-processor';
import navbarInit from "./navbar";
import isotopeInit from "./isotope";
import typedTextInit from "./typed";
import rellaxInit from "./rellax";
import bigPictureInit from "./bigPicture";
import tableCollationInit from "./basic-table";
/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(typedTextInit);
docReady(navbarInit);
docReady(tooltipInit);
docReady(popoverInit);
docReady(toastInit);
docReady(plyrInit);
docReady(initMap);
docReady(isotopeInit);
docReady(countupInit);
docReady(scrollToTop);
docReady(rellaxInit);
docReady(swiperInit);
docReady(tableCollationInit);
docReady(bigPictureInit);

docReady(dropdownOnHover);

docReady(scrollbarInit);

docReady(dropdownMenuInit);
docReady(lightboxInit);
docReady(bgPlayerInit);
docReady(hamburgerInit);
docReady(zanimationInit);
docReady(inertiaInit);
docReady(preloaderInit);
docReady(formInit);
