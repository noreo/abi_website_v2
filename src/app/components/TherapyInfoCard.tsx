interface TherapyInfoCardProps {
  title: string;
  description: string;
}

export default function TherapyInfoCard({
  title,
  description,
}: TherapyInfoCardProps) {
  return (
    <div
      className="bg-dark border border-border relative rounded-[16px] self-stretch shrink-0 w-full lg:w-[408px]"
      data-name="card"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center py-[24px] px-[24px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full">
            <div
              className="flex flex-col font-semibold justify-center relative shrink-0 text-primary text-[34px] w-full"
            >
              <h3 className="text-[32px] leading-[34px]">{title}</h3>
            </div>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-foreground text-[21px] w-full">
              <p className="leading-[32px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}