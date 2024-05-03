export function Card({icon: Icon, title, value, color}){
    const colorClasses = {
        laranja: 'bg-red-500',
        verde_claro: 'bg-green-700',
        azul_escuro: 'bg-sky-700',
        azul_claro: 'bg-emerald-700',
    };

    const statusClass = colorClasses[color] || 'bg-emerald-700';

    return(
        <article className="bg-BG_CARD p-4 flex gap-4 items-center rounded-lg lg:w-full">
            <div className={`p-3 ${statusClass} rounded-full`}>
            {Icon && <Icon className="text-WHITE_FULL"/>}
            </div>

            <div className="flex flex-col gap-2">
            <p className="text-GRAY text-xs ">{title}</p>
            <h2 className="text-WHITE font-bold text-sm">{value}</h2>
            </div>
        </article>
    )
}