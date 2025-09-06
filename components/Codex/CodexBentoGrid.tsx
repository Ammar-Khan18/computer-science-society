import * as React from "react";

interface Data {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface DetailListProps {
  data: Data[];
}

const CodexBentoGrid: React.FC<DetailListProps> = ({ data }) => (
    <>
        <h1 className="font-heading text-3xl md:text-5xl colour-text mb-4 text-center">What We Offer</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-4 md:px-0 max-w-3xl mx-auto justify-center">
            {data.map((item) => {

                // Extract bg color from icon's className
                const iconBgClass = React.isValidElement(item.icon) && typeof (item.icon.props as { className?: string }).className === "string"
                    ? ((item.icon.props as { className?: string }).className as string).split(" ").find(c => c.startsWith("bg-")) || ""
                    : "";
                // Map bg color to shadow color
                const shadowColorMap: Record<string, string> = {
                    "bg-blue-100": "shadow-blue-200",
                    "bg-green-100": "shadow-green-200",
                    "bg-yellow-100": "shadow-yellow-200",
                    "bg-purple-100": "shadow-purple-200",
                };
                const shadowColor = shadowColorMap[iconBgClass] || "shadow-gray-200";
                return (
                    <div
                        key={item.title}
                        className={`flex flex-col items-center p-6 md:p-8 rounded-2xl min-w-[180px] md:min-w-[220px] min-h-[200px] md:min-h-[220px] shadow-[8px_8px_0_0] ${shadowColor} colour-box-primary mx-auto`}
                        style={{ boxShadow: `8px 8px 0 0 var(--tw-shadow-color)` }}
                    >
                        <div className="mb-3 md:mb-4">{item.icon}</div>
                        <h2 className="font-heading font-semibold text-xl md:text-2xl text-black mb-1 md:mb-2 text-center">{item.title}</h2>
                        <p className="font-text text-xs md:text-sm colour-text text-center mx-4">{item.desc}</p>
                    </div>
                );
            })}
        </section>
    </>
);

export default CodexBentoGrid;
