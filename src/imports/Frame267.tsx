function Card() {
  return (
    <div className="bg-[rgba(240,179,143,0.25)] h-[279px] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center leading-[0] px-[40px] py-[24px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-semibold h-full justify-center min-h-px min-w-px relative text-primary text-[34px]" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
            <p className="leading-[43.2px]">Deuil d’un animal de compagnie</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-normal h-full justify-center min-h-px min-w-px relative text-foreground text-[21px]">
            <p className="leading-[32px]">Votre animal de compagnie occupait une grande place de choix dans votre cœur. Il est normal donc de normal vivre un deuil, le reconnaitre permettre de mieux le vivre, comme tout autre deuil.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#edefeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start px-[64px] relative size-full">
      <Card />
    </div>
  );
}