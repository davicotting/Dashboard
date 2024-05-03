    import '../../../tailwind.config';

    import { RedirectCard } from '../../Components/RedirectCard';
    import { Card } from '../../Components/Card';
    import { Table } from '../../Components/Table';

    import { PiUsersThreeFill } from "react-icons/pi";
    import { FaMoneyBills } from "react-icons/fa6";
    import { IoCart } from "react-icons/io5";
    import { IoChatboxEllipses } from "react-icons/io5";



    export function Dashboard(){
        return(
            <main className='font-poppins bg-BG_DEFAULT min-h-screen text-WHITE font-medium p-6 text-2xl'>
                <h1>DashBoard</h1>

                <RedirectCard />
                
                <section className='w-full flex items-center justify-center gap-5 flex-col md:flex-row md:justify-between lg:w-full'>
                <div className='flex flex-col gap-5 w-full lg:flex-row '>

                <Card icon={PiUsersThreeFill} title={"Total Clients"} value={6389} color={"laranja"} />
                <Card icon={FaMoneyBills} title={"Account Balance"} value={"$ 46,760.89"} color={"verde_claro"}  />

                </div>

                <div className='flex flex-col gap-5 w-full lg:flex-row'>

                <Card icon={IoCart} title={"New sales"} value={376} color={"azul_escuro"} />
                <Card icon={IoChatboxEllipses} title={"Pending Contacts"} value={35} color={"azul_claro"} />
                
                </div>                
                </section>

                <Table />
                
            </main>
        )
    }