import { useState } from "react";
import { toast } from "sonner";

export function User({ user }) {
    const [status, setStatus] = useState(user.status);
    let statusClass;
    if (status === 'denied') {
        statusClass = 'bg-red-500';
    } else if (status === 'approved') {
        statusClass = 'bg-green-500';
    } 
    else if (status === 'pending') {
        statusClass = 'bg-orange-500';
    } 
    else {
        statusClass = 'bg-zinc-800';
    }

    const handleClick = () => {
        if (status === 'pending') {
            setStatus('approved');
            toast.success("Pedido aprovado com sucesso !" , {
                duration: 2000
            })
            return
        }
        if (status === 'approved') {
          return  toast.error("O pedido já está aprovado.", {
            duration: 2000
        })

        }
        toast.error("Apenas é possivel aprovar pedidos pendentes!", {
            duration: 2000
        })
    };
    return (
     
        <tr className="bg-BG_CARD border-b border-t border-zinc-800">
            <td className="flex items-center gap-3 pl-3 pb-3 pt-3">
                <img src={user.image} alt="" className="h-9 rounded-full" />
                <td className="flex flex-col text-left">
                    <p className="font-bold">{user.name}</p>
                    <p>{user.profession}</p>
                </td>
            </td>

            <td>
                <p>{(user.ammount).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
            </td>

            <td className=" cursor-pointer ">
                <p className={`rounded-2xl text-white capitalize ${statusClass} w-max py-1 px-2 m-auto`} onClick={handleClick}>{status}</p>
            </td>

            <td>
                <p>16/12/2024</p>
            </td>
        </tr>
    );
}