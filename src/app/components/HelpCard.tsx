import { Link } from "react-router";
import svgPaths from "../../imports/svg-smch3qzwoc";
import imgVector from "figma:asset/599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png";

interface HelpCardProps {
  title: string;
  description: string;
  linkTo: string;
  className?: string;
  image?: string;
}

export function HelpCard({
  title,
  description,
  linkTo,
  className,
  image,
}: HelpCardProps) {
  return (
    <Link
      to={linkTo}
      className={
        "bg-card border border-border content-stretch flex gap-[20px] items-start p-[24px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),0px_1px_2px_0px_rgba(0,0,0,0.2)] w-full max-w-[800px] hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
      }
      data-name="card"
    >
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div
          className="absolute left-[-4px] size-[32px] top-[53px]"
          data-name="Vector"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 57 57"
            aria-hidden="true"
          >
            <path
              d={svgPaths.pf039300}
              fill="var(--fill-0, #E8B88A)"
            />
          </svg>
        </div>
        <div
          className="relative shrink-0 size-[74px]"
          data-name="Vector"
        >
          <img
            alt={title}
            className="absolute block max-w-none size-full rounded-[168px] object-cover"
            height="74"
            src={image || imgVector}
            width="74"
          />
        </div>
        <div
          className="absolute left-[45px] size-[40px] top-[-10px]"
          data-name="Vector"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 39 39"
            aria-hidden="true"
          >
            <path
              d={svgPaths.p220a8800}
              fill="var(--fill-0, #FFC771)"
            />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative h-full pb-[48px]">
        <h3 className="text-[32px] leading-[34px] font-medium min-w-full relative shrink-0 text-primary w-[min-content] whitespace-pre-wrap">
          {title}
        </h3>
        <p className="font-normal min-w-full relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap text-[18px]">
          {description}
        </p>

        <svg
          className="absolute bottom-[-8px] left-[0] text-primary"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M37.5 25.4999H10.5C9.66 25.4999 9 24.8399 9 23.9999C9 23.1599 9.66 22.4999 10.5 22.4999H37.5C38.34 22.4999 39 23.1599 39 23.9999C39 24.8399 38.34 25.4999 37.5 25.4999Z"
            fill="currentColor"
          />
          <path
            d="M30 35.9999C29.8033 36.0023 29.6082 35.9635 29.4274 35.886C29.2466 35.8085 29.0839 35.6941 28.95 35.5499C28.35 34.9499 28.35 34.0199 28.95 33.4199L38.4 23.9699L28.95 14.5199C28.35 13.9199 28.35 12.9899 28.95 12.3899C29.55 11.7899 30.48 11.7899 31.08 12.3899L41.58 22.8899C42.18 23.4899 42.18 24.4199 41.58 25.0199L31.08 35.5199C30.78 35.8199 30.39 35.9699 30.03 35.9699L30 35.9999Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </Link>
  );
}