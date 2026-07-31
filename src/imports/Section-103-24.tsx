function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[326.78px]">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-primary text-[34px] w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[43.2px]">Exprimer librement vos émotions</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-foreground text-[21px] w-full">
        <p className="leading-[32px]">Toutes vos émotions sont accueillies, sans jugement.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[326.78px]">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-primary text-[34px] w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[43.2px]">Comprendre le processus du deuil</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-foreground text-[21px] w-full">
        <p className="leading-[32px]">{`Identifier ce que vous traversez permet de réduire l'auto-critique et de normaliser votre expérience.`}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[326.78px]">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-primary text-[34px] w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[43.2px]">Retrouver des repères</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-foreground text-[21px] w-full">
        <p className="leading-[32px]">Rebâtir progressivement une stabilité émotionnelle et personnelle.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] h-[48px] items-start max-w-[1320px] relative shrink-0" data-name="Container">
      <div className="bg-background relative rounded-[16px] self-stretch shrink-0 w-[408px]" data-name="card">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center py-[24px] relative size-full">
            <Frame />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#edefeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-background relative rounded-[16px] self-stretch shrink-0 w-[408px]" data-name="card">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center py-[24px] relative size-full">
            <Frame1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#edefeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-background relative rounded-[16px] self-stretch shrink-0 w-[408px]" data-name="card">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center py-[24px] relative size-full">
            <Frame2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#edefeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-dark content-stretch flex flex-col items-center pb-[16px] px-[300px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}