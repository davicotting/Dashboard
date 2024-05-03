
import { User } from '../User';
import { userData } from '../../utils/data';
export function Table() {
    return (
        <table className="w-full mt-5 table-auto p-1">
            <thead className="bg-BG_CARD text-GRAY text-sm">
                <tr>
                    <th className="rounded-tl-md pl-10 text-start py-2">Client</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="rounded-tr-md">Date</th>
                </tr>
            </thead>
            <tbody className="text-xs text-GRAY text-center">
            {userData && userData.map(user => <User key={user.id} user={{
                name: user.name,
                image: user.profilePhoto,
                profession: user.profession,
                ammount: user.ammount,
                status: user.status
                   
                   }}/>)}
            </tbody>
        </table>
    );
}