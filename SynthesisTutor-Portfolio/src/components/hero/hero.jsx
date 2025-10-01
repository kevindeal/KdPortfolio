import { Download } from "lucide-react";
import { HeroTypeSpan} from "./heroTypeSpan";
import heroImage from '/assets/kevnmike.webp';

const link = document.createElement('link');
link.rel = 'preload';
link.as = 'image';
link.href = heroImage;
document.head.appendChild(link);

export const Hero = () => {
  const hiringManager = 'Mike Jones';
  const teamNeed = 'Frontend Engineer role';
  const ctaUrl = 'assets/Resume202508250416-1.png';
  const ctaText = 'Download CV';

  return (
    <section aria-label="hero" id="hero" className="hero relative bg-overlay py-20">
      <div className="container md:flex md:flex-row gap-10">
        <div className="hero-content z-10 flex-1">
        <h1
          className="hero-heading md:text-nowrap text-4xl md:text-[58px] tracking-normal font-bold text-white leading-[1.1] text-center md:text-left md:pb-10"
          aria-label="heading"
        >
          Who...? {hiringManager}<br></br> I will push ideas<br></br> to launch as Heyo's next 
          <br />
          <div className="relative" style={{ minHeight: '1.2em' }}>
            <HeroTypeSpan text="Frontend Engineer" />
            {/* <p style={{ whiteSpace: 'nowrap' }}>for Nuuly.</p> */}
          </div>
        </h1>
          <picture className="mobile-img mt-10 md:hidden inline-block w-full h-auto aspect-w-16 aspect-h-9 border-2 border-white rounded-[20px] overflow-hidden">
            <source
              type="image/webp" 
              media="(max-width:600px)"
              srcSet={`${heroImage} 600w`}
              sizes="(max-width: 600px) 100vw, 600px"
            />
            <img
              loading="eager"
              decoding="async"
              src={heroImage}
              alt="heroimg"
              id="heroimg"
              className="w-[110%] h-[110%] object-cover -m-[2.5%]"
            />
          </picture>
          <p
            className="hero-subhead mt-5 md:m-0 mb-6 md:mb-6 md:py-[20px] text-lg md:text-2xl text-center md:text-left text-[#bfceff] font-normal"
            aria-label="subheading"
          >
            I&apos;m Kevin Deal, an award-winning Frontend Developer with 8 years of experience turning ideas into scalable digital products. From PHP and WordPress to Vue and React, I use the right tools to help businesses grow while championing community, collaboration, and team success. 
          </p>
          <a
            href={ctaUrl}
            aria-label={ctaText}
            className="hero-cta w-full flex flex-column items-center justify-center text-center md:w-[250px] py-[20px]"
            download
          >
            <span
              className="hero-button w-full flex items-center justify-center gap-2 text-[#020718] bg-[#ffd000] bg-gradient-to-r from-[#fcd544] to-[#fa9a3d] border-none rounded-[15px] h-[55px] py-3 px-[30px] pr-[23px] text-[18.2px] font-semibold 
              hover:bg-gradient-to-r hover:from-[#ffe066] hover:to-[#fdbb42] transition-all duration-80"
            >
              <Download className="w-5 h-5" />
              {ctaText}
            </span>
          </a>
        </div>
        <div className="md:w-1/2 flex">
          <picture className="w-full border-2 border-white rounded-[20px]  hidden md:block h-[600px] relative overflow-hidden">
            <source
              type="image/webp"
              media="(min-width:601px)"
              srcSet={`${heroImage} 1200w`}
              sizes="(min-width: 601px) 50vw, 1200px"
            />
            <img
              loading="eager"
              decoding="async"
              src={heroImage}
              alt="heroimg"
              id="heroimg"
              className="w-[110%] h-[110%] object-cover -m-[2.5%]"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}