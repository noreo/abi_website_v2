import svgPaths from "./svg-azv94sv8r2";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[12px] items-start relative shrink-0 text-foreground text-[21px]">
      <div className="flex flex-col justify-center leading-[32px] relative shrink-0 w-[508px] whitespace-pre-wrap">
        <p className="mb-[8px]">{`Chaque séance est un espace privilégié où vous pouvez déposer ce qui est présent pour vous. `}</p>
        <p>{`En tant que thérapeute en relation d'aide, je vous accompagne pour explorer votre vécu, vos émotions et vos besoins, dans le respect de votre rythme.`}</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
            <span className="leading-[32px]">Accueil et écoute bienveillante</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
            <span className="leading-[32px]">Exploration de votre situation actuelle</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
            <span className="leading-[32px]">Identification des pistes de solutions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[358.25px] items-start relative shrink-0" data-name="Container">
      <p className="font-semibold leading-[48px] relative shrink-0 text-primary text-[44px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>{`Déroulement d'une séance`}</p>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[480.928px] relative shrink-0 w-[368.001px]">
      <div className="absolute inset-[-0.42%_-0.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372.001 484.928">
          <g>
            <path d={svgPaths.p11051d80} stroke="var(--stroke-0, #F0B38F)" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
            <g>
              <path d={svgPaths.p2d71a470} stroke="var(--stroke-0, #FFC771;)" strokeMiterlimit="10" strokeWidth="4" />
              <path d={svgPaths.p184fe080} fill="var(--fill-0, #FFC771;)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative size-full">
      <Container />
      <Group />
    </div>
  );
}