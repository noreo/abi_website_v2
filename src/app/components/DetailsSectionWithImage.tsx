import svgPaths from "../../imports/svg-oxzbb3e3mb";
import imgDetailsSection1 from "figma:asset/6e512aa86f2c1a091d17728c0815f5b8e654a625.png";
import imgDeuil from "figma:asset/783c78a352076b15e4264d15720715433bb9eb32.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface DetailsSectionWithImageProps {
  heading: string;
  subheading: string;
  listItems: string[];
  closingStatement: string;
  image?: string;
  imageAlt?: string;
}

export default function DetailsSectionWithImage({
  heading,
  subheading,
  listItems,
  closingStatement,
  image = imgDeuil,
  imageAlt = "Personne avec les mains sur le ventre, pour illustrer le deuil",
}: DetailsSectionWithImageProps) {
  return (
    <section
      className="bg-background content-stretch flex flex-col gap-[32px] items-start relative w-full px-[16px] py-16"
      data-name="Section"
    >
      <div
        className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start justify-center relative rounded-[16px] shrink-0 w-full max-w-[1320px] mx-auto"
        data-name="card"
      >
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative order-1 w-full lg:w-auto">
          <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-8">
            {heading}
          </h2>
          <div
            className="flex flex-col font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[34px] w-[min-content] text-primary"
          >
            <h3 className="text-[32px] leading-[34px]">
              {subheading}
            </h3>
          </div>
          <ul className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="list-disc ms-[31.5px] text-[21px] text-foreground whitespace-pre-wrap"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-bold leading-[32px] text-[21px] text-foreground">
            {closingStatement}
          </p>
        </div>
        <div className="relative order-2">
          <div className="absolute -scale-y-100 flex-none">
            <div
              className="h-[320.486px] relative w-[321.253px]"
              data-name="Vector"
            >
              <div className="absolute left-[-40px] top-[30px]">
                <svg
                  width="325"
                  height="326"
                  viewBox="0 0 325 326"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M162.242 4C249.633 4 320.485 75.0147 320.485 162.626C320.485 250.238 249.633 321.253 162.242 321.253C74.8518 321.253 4 250.237 4 162.626C4.00023 75.0148 74.852 4.00022 162.242 4ZM162.242 0C72.6338 0.000219328 0.000234282 72.8147 0 162.626C-3.92562e-06 252.437 72.6337 325.253 162.242 325.253C251.851 325.253 324.485 252.438 324.485 162.626C324.485 72.8145 251.851 3.91708e-06 162.242 0Z"
                    fill="#B43911"
                  />
                  <path
                    d="M162.621 1.99964C120.222 1.99964 79.5592 18.9227 49.5785 49.0461C19.5979 79.1694 2.75492 120.025 2.75492 162.626C2.75491 205.227 19.5979 246.083 49.5785 276.206C79.5591 306.33 120.222 323.253 162.621 323.253C134.558 306.974 111.255 283.56 95.0534 255.364C78.8516 227.168 70.3221 195.184 70.3221 162.626C70.3221 130.068 78.8516 98.0843 95.0534 69.8884C111.255 41.6926 134.558 18.2785 162.621 1.99964Z"
                    fill="#B43911"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className=" rounded-[800px] shrink-0 size-[300px] lg:size-[400px] mx-auto lg:mx-0  overflow-hidden"
            data-name="image-container"
          >
            <ImageWithFallback
              alt={imageAlt}
              className="h-full w-full object-cover"
              src={image}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full pointer-events-none hidden lg:block">
        <div className="absolute left-[-2rem] top-[-1rem] w-24 h-24 aspect-square bg-primary rounded-full"></div>
        <div className="absolute right-8 top-8 w-24 h-24 aspect-square bg-primary/50 rounded-full"></div>
      </div>
    </section>
  );
}